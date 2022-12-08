import Vuex from 'vuex'
import { mount, createLocalVue } from '@vue/test-utils'
import EditPasswordModal from '../../../src/components/EditPasswordModal'

const localVue = createLocalVue()
localVue.use(Vuex)

afterEach(() => jest.clearAllMocks())

describe('EditPasswordModal', () => {
  describe('computed method "confirmButtonDisabled"', () => {
    it('should be true if any data set is invalid', () => {
      const wrapper = getWrapper()
      wrapper.vm.currentPassword = ''
      expect(wrapper.vm.confirmButtonDisabled).toBeTruthy()
    })
    it('should be false if no data set is invalid', () => {
      const wrapper = getWrapper()
      wrapper.vm.currentPassword = 'password'
      wrapper.vm.newPassword = 'newpassword'
      wrapper.vm.newPasswordConfirm = 'newpassword'
      expect(wrapper.vm.confirmButtonDisabled).toBeFalsy()
    })
  })

  describe('method "validatePasswordConfirm"', () => {
    it('should be true if passwords are identical', () => {
      const wrapper = getWrapper()
      wrapper.vm.newPassword = 'newpassword'
      wrapper.vm.newPasswordConfirm = 'newpassword'
      expect(wrapper.vm.validatePasswordConfirm).toBeTruthy()
    })
    it('should be false if passwords are not identical', () => {
      const wrapper = getWrapper()
      wrapper.vm.newPassword = 'newpassword'
      wrapper.vm.newPasswordConfirm = 'anothernewpassword'
      expect(wrapper.vm.validatePasswordConfirm).toBeTruthy()
    })
  })
})

function getWrapper() {
  return mount(EditPasswordModal, {
    localVue,
    mocks: {
      $gettext: jest.fn(),
      $gettextInterpolate: jest.fn()
    },
    propsData: {
      cancel: jest.fn(),
      confirm: jest.fn(),
      existingGroups: [
        {
          displayName: 'admins'
        }
      ]
    },
    stubs: { 'oc-modal': true, 'oc-text-input': true }
  })
}
