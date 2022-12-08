import Vuex from 'vuex'
import { createStore } from 'vuex-extensions'
import { mount, createLocalVue } from '@vue/test-utils'
import rename from 'web-app-files/src/mixins/spaces/actions/rename.js'
import { createLocationSpaces } from '../../../../src/router'
import mockAxios from 'jest-mock-axios'

const localVue = createLocalVue()
localVue.use(Vuex)

const Component = {
  render() {},
  mixins: [rename]
}

describe('rename', () => {
  afterEach(() => jest.clearAllMocks())

  describe('method "$_rename_trigger"', () => {
    it('should trigger the rename modal window', async () => {
      const wrapper = getWrapper()
      const spyCreateModalStub = jest.spyOn(wrapper.vm, 'createModal')
      await wrapper.vm.$_rename_trigger({ resources: [{ id: 1, name: 'renamed space' }] })

      expect(spyCreateModalStub).toHaveBeenCalledTimes(1)
    })
    it('should not trigger the rename modal window without any resource', async () => {
      const wrapper = getWrapper()
      const spyCreateModalStub = jest.spyOn(wrapper.vm, 'createModal')
      await wrapper.vm.$_rename_trigger({ resources: [] })

      expect(spyCreateModalStub).toHaveBeenCalledTimes(0)
    })
  })

  describe('method "$_rename_checkName"', () => {
    it('should throw an error with an empty space name', async () => {
      const wrapper = getWrapper()
      const spyInputErrorMessageStub = jest.spyOn(wrapper.vm, 'setModalInputErrorMessage')
      await wrapper.vm.$_rename_checkName('')

      expect(spyInputErrorMessageStub).toHaveBeenCalledTimes(1)
    })
    it('should throw an error with an space name longer than 255 characters', async () => {
      const wrapper = getWrapper()
      const spyInputErrorMessageStub = jest.spyOn(wrapper.vm, 'setModalInputErrorMessage')
      await wrapper.vm.$_rename_checkName('n'.repeat(256))

      expect(spyInputErrorMessageStub).toHaveBeenCalledTimes(1)
    })
    it.each(['/', '\\', '.', ':', '?', '*', '"', '>', '<', '|'])(
      'should show an error message when trying to create a space with a special character',
      (specialChar) => {
        const wrapper = getWrapper()
        wrapper.vm.setModalInputErrorMessage = jest.fn()

        const spyInputErrorMessageStub = jest.spyOn(wrapper.vm, 'setModalInputErrorMessage')
        wrapper.vm.$_rename_checkName(specialChar)

        expect(spyInputErrorMessageStub).toHaveBeenCalledTimes(1)
      }
    )
  })

  describe('method "$_rename_renameSpace"', () => {
    it('should hide the modal and show message on success', async () => {
      mockAxios.request.mockImplementationOnce(() => {
        return Promise.resolve()
      })

      const wrapper = getWrapper()
      const hideModalStub = jest.spyOn(wrapper.vm, 'hideModal')
      const showMessageStub = jest.spyOn(wrapper.vm, 'showMessage')
      await wrapper.vm.$_rename_renameSpace(1, 'renamed space')

      expect(hideModalStub).toHaveBeenCalledTimes(1)
      expect(showMessageStub).toHaveBeenCalledTimes(1)
    })

    it('should show message on error', async () => {
      jest.spyOn(console, 'error').mockImplementation(() => {})
      mockAxios.request.mockImplementationOnce(() => {
        return Promise.reject(new Error())
      })

      const wrapper = getWrapper()
      const showMessageStub = jest.spyOn(wrapper.vm, 'showMessage')
      await wrapper.vm.$_rename_renameSpace(1, 'renamed space')

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
        }
      },
      $gettext: jest.fn()
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
        Files: {
          namespaced: true,
          mutations: {
            UPDATE_RESOURCE_FIELD: jest.fn()
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
