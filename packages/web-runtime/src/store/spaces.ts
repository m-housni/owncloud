import { buildSpace, isProjectSpaceResource } from 'web-client/src/helpers'
import Vue from 'vue'
import { set, has } from 'lodash-es'
import { unref } from 'vue'
import { buildSpaceShare } from 'web-client/src/helpers/share'
import { sortSpaceMembers } from '../helpers/space/sortMembers'

import { configurationManager } from 'web-pkg/src/configuration'

const state = {
  spaces: [],
  spacesInitialized: false,
  spacesLoading: false,
  spaceMembers: []
}

const getters = {
  spaces: (state) => state.spaces,
  spacesInitialized: (state) => state.spacesInitialized,
  spacesLoading: (state) => state.spacesLoading,
  spaceMembers: (state) => state.spaceMembers
}

const mutations = {
  // TODO: we might want to avoid duplicates at some point
  ADD_SPACES(state, spaces) {
    state.spaces = [...state.spaces, ...spaces]
  },
  SET_SPACES_INITIALIZED(state, initialized) {
    state.spacesInitialized = initialized
  },
  SET_SPACES_LOADING(state, loading) {
    state.spacesLoading = loading
  },
  /**
   * Updates a single space field. If the space with given id doesn't exist, nothing will happen.
   *
   * @param state Current state of this store module
   * @param params
   * @param params.id Id of the resource to be updated
   * @param params.field the resource field that the value should be applied to
   * @param params.value the value that will be attached to the key
   */
  UPDATE_SPACE_FIELD(state, params) {
    const spaceSource = state.spaces
    const index = state.spaces.findIndex((r) => r.id === params.id)
    if (index < 0) {
      return
    }

    const resource = spaceSource[index]
    const isReactive = has(resource, params.field)
    const newResource = set(resource, params.field, params.value)

    if (isReactive) {
      return
    }

    Vue.set(spaceSource, index, newResource)
  },
  UPSERT_SPACE(state, space) {
    const spaces = [...state.spaces]
    const index = spaces.findIndex((r) => r.id === space.id)
    const found = index > -1

    if (found) {
      spaces.splice(index, 1, space)
    } else {
      spaces.push(space)
    }
    state.spaces = spaces
  },
  REMOVE_SPACE(state, space) {
    state.spaces = state.spaces.filter((s) => s.id !== space.id)
  },
  CLEAR_SPACES(state) {
    state.spaces = []
  },
  CLEAR_PROJECT_SPACES(state) {
    state.spaces = state.spaces.filter((s) => !isProjectSpaceResource(s))
  },
  CLEAR_SPACE_MEMBERS(state) {
    state.spaceMembers = []
  },
  SET_SPACE_MEMBERS(state, members) {
    state.spaceMembers = members
  },
  UPSERT_SPACE_MEMBERS(state, member) {
    const fileIndex = state.spaceMembers.findIndex((s) => {
      return member.id === s.id && member.collaborator.name === s.collaborator.name
    })

    if (fileIndex >= 0) {
      Vue.set(state.spaceMembers, fileIndex, member)
    } else {
      // share was not present in the list while updating, add it instead
      state.spaceMembers.push(member)
    }
  },
  REMOVE_SPACE_MEMBER(state, member) {
    state.spaceMembers = state.spaceMembers.filter(
      (s) => member.id === s.id && member.collaborator.name !== s.collaborator.name
    )
  }
}

const actions = {
  async loadSpaces(context, { graphClient }) {
    context.commit('SET_SPACES_LOADING', true)
    try {
      const graphResponse = await graphClient.drives.listMyDrives()
      if (!graphResponse.data) {
        return
      }
      const spaces = graphResponse.data.value.map((space) =>
        buildSpace({ ...space, serverUrl: configurationManager.serverUrl })
      )
      context.commit('ADD_SPACES', spaces)
      context.commit('SET_SPACES_INITIALIZED', true)
    } finally {
      context.commit('SET_SPACES_LOADING', false)
    }
  },
  async reloadProjectSpaces(context, { graphClient }) {
    const graphResponse = await graphClient.drives.listMyDrives('name asc', 'driveType eq project')
    if (!graphResponse.data) {
      return
    }
    const spaces = graphResponse.data.value.map((space) =>
      buildSpace({ ...space, serverUrl: configurationManager.serverUrl })
    )
    context.commit('CLEAR_PROJECT_SPACES')
    context.commit('ADD_SPACES', spaces)
  },
  loadSpaceMembers(context, { graphClient, space }) {
    context.commit('CLEAR_SPACE_MEMBERS')
    const promises = []
    const spaceShares = []

    for (const role of Object.keys(space.spaceRoles)) {
      for (const userId of space.spaceRoles[role]) {
        promises.push(
          unref(graphClient)
            .users.getUser(userId)
            .then((resolved) => {
              spaceShares.push(buildSpaceShare({ ...resolved.data, role }, space.id))
            })
        )
      }
    }

    return Promise.all(promises).then(() => {
      context.commit('SET_SPACE_MEMBERS', sortSpaceMembers(spaceShares))
    })
  },
  async addSpaceMember(
    context,
    { client, graphClient, path, shareWith, permissions, role, storageId, displayName }
  ) {
    await client.shares.shareSpaceWithUser(path, shareWith, storageId, {
      permissions,
      role: role.name
    })
    const graphResponse = await graphClient.drives.getDrive(storageId)
    context.commit('UPSERT_SPACE', buildSpace(graphResponse.data))
    const shareObj = { role: role.name, onPremisesSamAccountName: shareWith, displayName }
    context.commit('UPSERT_SPACE_MEMBERS', buildSpaceShare(shareObj, storageId))
  },
  async changeSpaceMember(context, { client, graphClient, share, permissions, role }) {
    await client.shares.shareSpaceWithUser('', share.collaborator.name, share.id, {
      permissions,
      role: role.name
    })

    const graphResponse = await graphClient.drives.getDrive(share.id)
    context.commit('UPSERT_SPACE', buildSpace(graphResponse.data))
    const spaceShare = buildSpaceShare(
      {
        role: role.name,
        onPremisesSamAccountName: share.collaborator.name,
        displayName: share.collaborator.displayName
      },
      share.id
    )

    context.commit('UPSERT_SPACE_MEMBERS', spaceShare)
  },
  async deleteSpaceMember(context, { client, graphClient, share, reloadSpace = true }) {
    const additionalParams = { shareWith: share.collaborator.name } as any
    await client.shares.deleteShare(share.id, additionalParams)

    if (reloadSpace) {
      const graphResponse = await graphClient.drives.getDrive(share.id)
      context.commit('UPSERT_SPACE', buildSpace(graphResponse.data))
    }

    context.commit('REMOVE_SPACE_MEMBER', share)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
