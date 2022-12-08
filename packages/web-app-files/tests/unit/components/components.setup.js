import { createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import OwnCloud from 'owncloud-sdk'
import { createStore } from 'vuex-extensions'
import DesignSystem from '@ownclouders/design-system'
import GetTextPlugin from 'vue-gettext'
import { clientService } from 'web-pkg/src/services/client'

export const createFile = ({ id, status = 1, type = 'folder' }) => ({
  id: `file-id-${id}`,
  type,
  status,
  name: `file-name-${id}`,
  path: `/file-path/${id}`,
  extension: '',
  share: {
    id: `file-share-id-${id}`
  },
  indicators: [],
  canRename: jest.fn
})

export const localVue = createLocalVue()
localVue.prototype.$client = new OwnCloud()
localVue.prototype.$client.init({ baseUrl: 'http://none.de' })
localVue.prototype.$clientService = clientService
localVue.prototype.$clientService.owncloudSdk = localVue.prototype.$client
localVue.use(Vuex)
localVue.use(DesignSystem)

/*
 * TODO: options on GetTextPlugin do not have any effect because of
 * packages/web-app-files/src/gettext.js which overwrites every setting.
 */
localVue.use(GetTextPlugin, {
  translations: 'does-not-matter.json',
  silent: true
})

// mock `v-translate` directive
localVue.directive('translate', {
  inserted: (el) => {}
})

export const getRouter = ({ query = {} }) => ({
  afterEach: jest.fn(),
  replace: jest.fn(),
  push: jest.fn(),
  currentRoute: {
    query
  }
})

export const getStore = function ({
  highlightedFile = null,
  disablePreviews = true,
  currentPage = null,
  activeFiles = [],
  pages = null,
  currentFolder = null,
  selectedFiles = [],
  totalFilesCount = null,
  totalFilesSize = null,
  loginBackgroundImg = '',
  loginLogo = '',
  davProperties = [],
  publicLinkPassword = null,
  accessToken = '',
  slogan = null,
  user = null,
  generalThemeName = '',
  selectedResourcesForMove = null
} = {}) {
  return createStore(Vuex.Store, {
    state: {
      app: { quickActions: {} }
    },
    getters: {
      configuration: () => ({
        currentTheme: {
          loginPage: {
            backgroundImg: loginBackgroundImg
          },
          logo: {
            login: loginLogo
          },
          general: {
            name: generalThemeName,
            slogan: slogan
          }
        },
        options: {
          disablePreviews: disablePreviews
        }
      }),
      capabilities: () => {},
      homeFolder: () => '/',
      user: () => user
    },
    mutations: {
      SET_QUOTA: () => {}
    },
    actions: {
      showMessage: () => {}
    },
    modules: {
      Files: {
        namespaced: true,
        state: {
          resource: null,
          filesPageLimit: 100,
          files: [],
          spaces: [],
          activeFiles: activeFiles,
          currentFolder: currentFolder,
          currentPage: currentPage,
          selectedIds: selectedFiles ? selectedFiles.map((file) => file.id) : [],
          selectedResourcesForMove: selectedResourcesForMove
        },
        getters: {
          totalFilesCount: () => totalFilesCount,
          totalFilesSize: () => totalFilesSize,
          selectedFiles: () => selectedFiles,
          activeFiles: (state) => state.activeFiles,
          highlightedFile: () => highlightedFile,
          currentFolder: () => currentFolder,
          pages: () => pages,
          davProperties: () => davProperties
        },
        mutations: {
          UPDATE_RESOURCE: (state, resource) => {
            state.resource = resource
          },
          UPSERT_RESOURCE: (state, resource) => {
            state.activeFiles.push(resource)
          },
          CLEAR_FILES_SEARCHED: () => {},
          CLEAR_CURRENT_FILES_LIST: () => {},
          LOAD_FILES: () => {},
          SET_FILES_PAGE_LIMIT: () => {},
          SET_CURRENT_FOLDER: () => {},
          REMOVE_FILES: () => {},
          REMOVE_FILES_FROM_SEARCHED: () => {},
          REMOVE_FILE_SELECTION: () => {},
          SET_FILE_SELECTION: () => {},
          SET_SELECTED_IDS: () => {}
        },
        actions: {
          loadIndicators: () => {},
          loadFiles: () => {}
        }
      },
      runtime: {
        modules: {
          auth: {
            getters: {
              accessToken: () => accessToken,
              publicLinkPassword: () => publicLinkPassword
            }
          }
        }
      },
      user: { state: user }
    }
  })
}
