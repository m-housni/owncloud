const state = {
  fileEditors: [],
  fileEditorConfigs: {},
  newFileHandlers: [],
  fileSideBars: [],
  customFilesListIndicators: [],
  meta: {}
}

const actions = {
  registerApp({ commit }, app) {
    commit('REGISTER_APP', app)
  },
  addFileAction({ commit }, action) {
    commit('ADD_FILE_ACTION', action)
  }
}

const mutations = {
  REGISTER_EXTENSION(state, extensionBundle) {
    const { app, extension } = extensionBundle
    const editor = {
      app,
      icon: extension.icon,
      img: extension.img,
      newTab: extension.newTab || false,
      routeName: extension.routeName,
      routes: extension.routes || [],
      extension: extension.extension,
      mimeType: extension.mimeType,
      handler: extension.handler,
      canBeDefault: extension.canBeDefault !== false,
      config: (state.fileEditorConfigs || {})[app],
      ...(extension.label && { label: extension.label })
    }

    state.fileEditors.push(editor)

    if (extension.newFileMenu) {
      extension.newFileMenu.ext = extension.extension
      extension.newFileMenu.action = editor
      extension.newFileMenu.routes = extension.routes
      state.newFileHandlers.push(extension.newFileMenu)
    }
  },
  REGISTER_APP(state, appInfo) {
    if (appInfo.extensions) {
      appInfo.extensions.forEach((extension) => {
        this.commit('REGISTER_EXTENSION', {
          app: appInfo.id,
          extension
        })
      })
    }
    if (appInfo.fileSideBars) {
      // Merge in file side bars into global list
      // Reassign object in whole so that it updates the state properly
      const list = state.fileSideBars
      appInfo.fileSideBars.forEach((sideBar) => {
        list.push(sideBar)
      })
      state.fileSideBars = list
    }

    if (appInfo.filesListIndicators) {
      const indicators = state.customFilesListIndicators
      appInfo.filesListIndicators.forEach((indicator) => {
        indicators.push(indicator)
      })
      state.customFilesListIndicators = indicators
    }

    if (!appInfo.id) {
      return
    }
    // name: use id as fallback display name
    // icon: use empty box as fallback icon
    const app = {
      name: appInfo.name || appInfo.id,
      id: appInfo.id,
      icon: appInfo.icon || 'check_box_outline_blank',
      ...(appInfo.iconFillType && { iconFillType: appInfo.iconFillType }),
      img: appInfo.img || null,
      config: (state.fileEditorConfigs || {})[appInfo.id]
    }
    state.meta[app.id] = app
  },
  LOAD_EXTENSION_CONFIG(state, { id, config }) {
    const fileEditorConfigs = { ...state.fileEditorConfigs }
    fileEditorConfigs[id] = config
    state.fileEditorConfigs = fileEditorConfigs
  }
}

const getters = {
  appIds: (state) => {
    return Object.keys(state.meta)
  },
  apps: (state) => {
    return state.meta
  },
  newFileHandlers: (state) => {
    return state.newFileHandlers
  },
  fileSideBars: (state) => {
    return state.fileSideBars
  },
  customFilesListIndicators: (state) => state.customFilesListIndicators,
  extensionConfigByAppId: (state) => (appId) => {
    return state.fileEditorConfigs[appId] || {}
  }
}

export default {
  state,
  actions,
  mutations,
  getters
}
