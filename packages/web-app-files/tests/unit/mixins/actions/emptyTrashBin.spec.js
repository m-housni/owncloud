import Vuex from 'vuex'
import { createStore } from 'vuex-extensions'
import { mount, createLocalVue } from '@vue/test-utils'
import EmptyTashBin from 'web-app-files/src/mixins/actions/emptyTrashBin.js'
import { createLocationTrash, createLocationSpaces } from '../../../../src/router'
// eslint-disable-next-line jest/no-mocks-import
import sdkMock from '@/__mocks__/sdk'

const localVue = createLocalVue()
localVue.use(Vuex)

const Component = {
  render() {},
  mixins: [EmptyTashBin]
}

describe('emptyTrashBin', () => {
  afterEach(() => jest.clearAllMocks())

  describe('isEnabled property', () => {
    it('should be false when resource is given', () => {
      const wrapper = getWrapper()
      expect(wrapper.vm.$_emptyTrashBin_items[0].isEnabled({ resources: [{}] })).toBe(false)
    })
    it('should be true when no resource is given', () => {
      const wrapper = getWrapper()
      expect(wrapper.vm.$_emptyTrashBin_items[0].isEnabled({ resources: [] })).toBe(true)
    })
    it('should be false when location is invalid', () => {
      const wrapper = getWrapper({ invalidLocation: true })
      expect(wrapper.vm.$_emptyTrashBin_items[0].isEnabled({ resources: [] })).toBe(false)
    })
    it('should be false in a space trash bin with insufficient permissions', () => {
      const wrapper = getWrapper({ driveType: 'project' })
      expect(
        wrapper.vm.$_emptyTrashBin_items[0].isEnabled({
          resources: [{ canBeRestored: () => true }]
        })
      ).toBe(false)
    })
  })

  describe('method "$_emptyTrashBin_trigger"', () => {
    it('should trigger the empty trash bin modal window', async () => {
      const wrapper = getWrapper()
      const spyCreateModalStub = jest.spyOn(wrapper.vm, 'createModal')
      await wrapper.vm.$_emptyTrashBin_trigger()

      expect(spyCreateModalStub).toHaveBeenCalledTimes(1)
    })
  })

  describe('method "$_emptyTrashBin_emptyTrashBin"', () => {
    it('should hide the modal and show message on success', async () => {
      const wrapper = getWrapper()
      const hideModalStub = jest.spyOn(wrapper.vm, 'hideModal')
      const showMessageStub = jest.spyOn(wrapper.vm, 'showMessage')
      await wrapper.vm.$_emptyTrashBin_emptyTrashBin()

      expect(hideModalStub).toHaveBeenCalledTimes(1)
      expect(showMessageStub).toHaveBeenCalledTimes(1)
    })

    it('should show message on error', async () => {
      jest.spyOn(console, 'error').mockImplementation(() => {})

      const wrapper = getWrapper({ resolveClearTrashBin: false })
      const showMessageStub = jest.spyOn(wrapper.vm, 'showMessage')
      await wrapper.vm.$_emptyTrashBin_emptyTrashBin()

      expect(showMessageStub).toHaveBeenCalledTimes(1)
    })
  })
})

function getWrapper({
  invalidLocation = false,
  resolveClearTrashBin = true,
  driveType = 'personal'
} = {}) {
  return mount(Component, {
    localVue,
    mocks: {
      $router: {
        currentRoute: invalidLocation
          ? createLocationSpaces('files-spaces-generic')
          : createLocationTrash('files-trash-generic'),
        resolve: (r) => {
          return { href: r.name }
        }
      },
      $gettext: jest.fn(),
      $pgettext: jest.fn(),
      space: { driveType, isEditor: () => false, isManager: () => false },
      $client: {
        ...sdkMock,
        fileTrash: {
          ...sdkMock.files,
          clearTrashBin: jest.fn().mockImplementation(() => {
            if (resolveClearTrashBin) {
              return Promise.resolve({})
            }
            return Promise.reject(new Error(''))
          })
        }
      }
    },
    store: createStore(Vuex.Store, {
      actions: {
        createModal: jest.fn(),
        hideModal: jest.fn(),
        showMessage: jest.fn()
      },
      getters: {
        configuration: () => ({
          server: 'https://example.com'
        }),
        capabilities: () => {}
      },
      modules: {
        user: {
          state: {
            id: 'alice',
            uuid: 1
          }
        },
        Files: {
          namespaced: true,
          mutations: {
            REMOVE_FILE: jest.fn()
          },
          actions: {
            clearTrashBin: jest.fn()
          }
        }
      }
    })
  })
}
