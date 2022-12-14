import Vuex from 'vuex'
import { createStore } from 'vuex-extensions'
import { mount, createLocalVue } from '@vue/test-utils'
import disable from 'web-app-files/src/mixins/spaces/actions/disable.js'
import { createLocationSpaces } from '../../../../src/router'
import mockAxios from 'jest-mock-axios'
import { buildSpace } from 'web-client/src/helpers'

const localVue = createLocalVue()
localVue.use(Vuex)

const Component = {
  render() {},
  mixins: [disable]
}

describe('disable', () => {
  afterEach(() => jest.clearAllMocks())

  describe('isEnabled property', () => {
    it('should be false when no resource given', () => {
      const wrapper = getWrapper()
      expect(wrapper.vm.$_disable_items[0].isEnabled({ resources: [] })).toBe(false)
    })
    it('should be true when the space is not disabled', () => {
      const spaceMock = {
        id: '1',
        root: {
          permissions: [{ roles: ['manager'], grantedTo: [{ user: { id: 1 } }] }]
        }
      }
      const wrapper = getWrapper()
      expect(wrapper.vm.$_disable_items[0].isEnabled({ resources: [buildSpace(spaceMock)] })).toBe(
        true
      )
    })
    it('should be false when the space is disabled', () => {
      const spaceMock = {
        id: '1',
        root: {
          permissions: [{ roles: ['manager'], grantedTo: [{ user: { id: 1 } }] }],
          deleted: { state: 'trashed' }
        }
      }
      const wrapper = getWrapper()
      expect(wrapper.vm.$_disable_items[0].isEnabled({ resources: [buildSpace(spaceMock)] })).toBe(
        false
      )
    })
    it('should be false when current user is a viewer', () => {
      const spaceMock = {
        id: '1',
        root: {
          permissions: [{ roles: ['viewer'], grantedTo: [{ user: { id: 1 } }] }]
        }
      }
      const wrapper = getWrapper()
      expect(wrapper.vm.$_disable_items[0].isEnabled({ resources: [buildSpace(spaceMock)] })).toBe(
        false
      )
    })
  })

  describe('method "$_disable_trigger"', () => {
    it('should trigger the disable modal window', async () => {
      const wrapper = getWrapper()
      const spyCreateModalStub = jest.spyOn(wrapper.vm, 'createModal')
      await wrapper.vm.$_disable_trigger({ resources: [{ id: 1 }] })

      expect(spyCreateModalStub).toHaveBeenCalledTimes(1)
    })
    it('should not trigger the disable modal window without any resource', async () => {
      const wrapper = getWrapper()
      const spyCreateModalStub = jest.spyOn(wrapper.vm, 'createModal')
      await wrapper.vm.$_disable_trigger({ resources: [] })

      expect(spyCreateModalStub).toHaveBeenCalledTimes(0)
    })
  })

  describe('method "$_disable_disableSpace"', () => {
    it('should hide the modal on success', async () => {
      mockAxios.request.mockImplementationOnce(() => {
        return Promise.resolve()
      })

      const wrapper = getWrapper()
      const hideModalStub = jest.spyOn(wrapper.vm, 'hideModal')
      await wrapper.vm.$_disable_disableSpace(1)

      expect(hideModalStub).toHaveBeenCalledTimes(1)
    })

    it('should show message on error', async () => {
      jest.spyOn(console, 'error').mockImplementation(() => {})
      mockAxios.request.mockImplementationOnce(() => {
        return Promise.reject(new Error())
      })

      const wrapper = getWrapper()
      const showMessageStub = jest.spyOn(wrapper.vm, 'showMessage')
      await wrapper.vm.$_disable_disableSpace(1)

      expect(showMessageStub).toHaveBeenCalledTimes(1)
    })
  })
})

function getWrapper() {
  return mount(Component, {
    localVue,
    mocks: {
      $router: {
        currentRoute: createLocationSpaces('files-spaces-projects'),
        resolve: (r) => {
          return { href: r.name }
        },
        push: jest.fn()
      },
      $gettext: jest.fn(),
      $gettextInterpolate: jest.fn()
    },
    store: createStore(Vuex.Store, {
      actions: {
        createModal: jest.fn(),
        hideModal: jest.fn(),
        showMessage: jest.fn(),
        setModalInputErrorMessage: jest.fn()
      },
      getters: {
        configuration: () => ({
          server: 'https://example.com'
        })
      },
      modules: {
        user: {
          state: {
            id: 'alice',
            uuid: 1
          }
        },
        runtime: {
          namespaced: true,
          modules: {
            auth: {
              namespaced: true,
              getters: {
                accessToken: () => ''
              }
            },
            spaces: {
              namespaced: true,
              mutations: {
                UPDATE_SPACE_FIELD: jest.fn()
              }
            }
          }
        }
      }
    })
  })
}
