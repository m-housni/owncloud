import Vuex from 'vuex'
import GetTextPlugin from 'vue-gettext'
import DesignSystem from '@ownclouders/design-system'
import { mount, shallowMount, createLocalVue } from '@vue/test-utils'
import FileLinks from 'web-app-files/src/components/SideBar/Shares/FileLinks.vue'
import { createLocationSpaces } from 'web-app-files/src/router'
import { defaultStubs } from 'web-test-helpers/src/mocks/defaultStubs'

const localVue = createLocalVue()

localVue.use(Vuex)
localVue.use(DesignSystem)
localVue.use(GetTextPlugin, {
  translations: 'does-not-matter.json',
  silent: true
})

const mapActions = {
  addLink: jest.fn(),
  loadSharesTree: jest.fn()
}

const mapMutations = {
  TRIGGER_PUBLIC_LINK_CREATE: jest.fn()
}

const defaultLinksList = [
  {
    id: '1',
    indirect: false,
    name: 'public link 1',
    url: 'some-link-1',
    path: '/file-1.txt',
    permissions: 1
  },
  {
    id: '2',
    indirect: true,
    name: 'public link 2',
    url: 'some-link-2',
    path: '/file-2.txt',
    permissions: 1
  }
]

const selectors = {
  linkAddButton: '#files-file-link-add',
  noResharePermissions: '[data-testid="files-links-no-reshare-permissions-message"]',
  linkNoResults: '#oc-file-links-no-results'
}

const linkListItemNameAndCopy = 'name-and-copy-stub'
const linkListItemDetailsAndEdit = 'details-and-edit-stub'

describe('FileLinks', () => {
  describe('links', () => {
    describe('when links list is not empty', () => {
      const store = createStore()
      const wrapper = getShallowWrapper(store)

      it('should render a list of links', () => {
        const linkListItems = wrapper.findAll(linkListItemNameAndCopy)
        const linkListItemsDetails = wrapper.findAll(linkListItemDetailsAndEdit)

        expect(linkListItems.length).toBe(2)
        expect(linkListItemsDetails.length).toBe(2)

        expect(linkListItems.at(0).props().link).toMatchObject({
          id: '1',
          indirect: false,
          name: 'public link 1',
          key: 'direct-link-1'
        })
        expect(linkListItems.at(1).props().link).toMatchObject({
          id: '2',
          indirect: true,
          name: 'public link 2',
          key: 'direct-link-2'
        })
      })

      it('should not show the "no results" message', () => {
        expect(wrapper.find(selectors.linkNoResults).exists()).toBeFalsy()
      })
    })

    it('should not render link list if no links are provided', () => {
      const wrapper = getShallowWrapper(createStore({ links: [] }))
      expect(wrapper.find('oc-list-stub').exists()).toBeFalsy()
    })
  })
  describe('when canCreatePublicLinks is set to true', () => {
    it('should show a button to add a link', () => {
      const store = createStore()
      const wrapper = getShallowWrapper(store)

      expect(wrapper.find(selectors.linkAddButton).exists()).toBeTruthy()
    })

    describe('when the add-new-link button is clicked', () => {
      it('should call addNewLink', async () => {
        const spyAddNewLink = jest.spyOn((FileLinks as any).methods, 'addNewLink')
        const store = createStore({ links: [] })
        const wrapper = getMountedWrapper(store)
        expect(spyAddNewLink).toHaveBeenCalledTimes(0)

        await wrapper.find(selectors.linkAddButton).trigger('click')

        expect(spyAddNewLink).toHaveBeenCalledTimes(1)
      })
    })
  })
  describe('when canCreatePublicLinks is set to false', () => {
    const store = createStore({
      highlightedFile: {
        path: '/lorem.txt',
        type: 'file',
        canShare: jest.fn(() => false),
        isFolder: false,
        isReceivedShare: jest.fn()
      }
    })

    it('should show the "no reshare permissions" message', () => {
      const wrapper = getShallowWrapper(store)

      expect(wrapper.find(selectors.noResharePermissions).exists()).toBeTruthy()
    })
  })
  function createStore({
    links = defaultLinksList,
    highlightedFile = {
      path: '/lorem.txt',
      type: 'file',
      canShare: jest.fn(() => true),
      isFolder: false,
      isReceivedShare: jest.fn()
    },
    sharesTreeLoading = false,
    expireDate = {
      enabled: true,
      days: 1,
      enforced: false
    }
  } = {}) {
    return new Vuex.Store({
      actions: {
        showMessage: jest.fn()
      },
      getters: {
        configuration: jest.fn(() => ({
          server: 'http://example.com/',
          currentTheme: {
            general: {
              name: 'some-company'
            }
          },
          options: {
            sidebar: {
              shares: {
                showAllOnLoad: false
              }
            }
          }
        })),
        capabilities: jest.fn(() => {
          return {
            files_sharing: {
              public: {
                defaultPublicLinkShareName: 'public link name default',
                expire_date: expireDate,
                password: {
                  enforced_for: {
                    read_only: false,
                    upload_only: false,
                    read_write: false
                  }
                }
              }
            }
          }
        })
      },
      modules: {
        Files: {
          namespaced: true,
          state: {
            sharesTree: {}
          },
          getters: {
            highlightedFile: function () {
              return highlightedFile
            },
            currentFileOutgoingLinks: function () {
              return links
            },
            sharesTreeLoading: jest.fn(() => sharesTreeLoading)
          },
          actions: mapActions,
          mutations: mapMutations
        }
      }
    })
  }

  function getShallowWrapper(store) {
    return shallowMount(FileLinks, {
      localVue,
      store: store,
      provide: {
        incomingParentShare: {},
        displayedItem: {
          value: null
        }
      },
      stubs: defaultStubs,
      mocks: {
        $route: {
          params: {}
        },
        $router: {
          currentRoute: createLocationSpaces('files-spaces-generic'),
          resolve: (r) => {
            return { href: r.name }
          }
        }
      }
    })
  }

  function getMountedWrapper(store) {
    return mount(FileLinks, {
      localVue,
      store: store,
      provide: {
        incomingParentShare: {},
        displayedItem: {
          value: null
        }
      },
      mocks: {
        $route: {
          params: {}
        },
        $router: {
          currentRoute: createLocationSpaces('files-spaces-generic'),
          resolve: (r) => {
            return { href: r.name }
          }
        }
      }
    })
  }
})
