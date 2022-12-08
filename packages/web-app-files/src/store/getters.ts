import { isProjectSpaceResource } from 'web-client/src/helpers'
import { ShareTypes } from 'web-client/src/helpers/share'

export default {
  selectedFiles: (state, getters) => {
    return getters.filesAll.filter((f) => state.selectedIds.includes(f.id))
  },
  files: (state) => {
    return state.files
  },
  filesAll: (state) => state.filesSearched || state.files,
  currentFolder: (state) => {
    return state.currentFolder
  },
  clipboardResources: (state) => {
    return state.clipboardResources
  },
  clipboardAction: (state) => {
    return state.clipboardAction
  },
  activeFiles: (state, getters) => {
    let files = [].concat(getters.filesAll)

    if (!state.areHiddenFilesShown) {
      files = files.filter((file) => !file.name.startsWith('.'))
    }

    return files
  },
  totalFilesSize: (state, getters) => {
    return getters.filesAll.map((file) => parseInt(file.size)).reduce((x, y) => x + y, 0)
  },
  totalFilesCount: (state, getters) => {
    const fileCount = getters.filesAll.filter((file) => file.type === 'file').length
    const folderCount = getters.filesAll.filter((file) => file.type === 'folder').length
    const spaceCount = getters.filesAll.filter((file) => isProjectSpaceResource(file)).length
    return {
      files: fileCount,
      folders: folderCount,
      spaces: spaceCount
    }
  },
  currentFileOutgoingCollaborators: (state) => {
    return state.currentFileOutgoingShares.filter((share) => {
      return ShareTypes.containsAnyValue(ShareTypes.authenticated, [share.shareType])
    })
  },
  currentFileOutgoingLinks: (state) => {
    return state.currentFileOutgoingShares.filter((share) => {
      return ShareTypes.containsAnyValue(ShareTypes.unauthenticated, [share.shareType])
    })
  },
  sharesTree: (state) => state.sharesTree,
  sharesTreeLoading: (state) => state.sharesTreeLoading,
  quota: (state) => {
    return state.quota
  },
  highlightedFile: (state, getters) => {
    if (getters.selectedFiles.length > 0) {
      return getters.selectedFiles[0]
    }
    return state.currentFolder
  },
  versions: (state) => {
    return state.versions
  }
}
