import { createLocalVue, mount } from '@vue/test-utils'
import GetTextPlugin from 'vue-gettext'
import InviteCollaboratorForm from 'web-app-files/src/components/SideBar/Shares/Collaborators/InviteCollaborator/InviteCollaboratorForm.vue'
import { ShareTypes } from 'web-client/src/helpers/share'
import Vuex from 'vuex'
import DesignSystem from '@ownclouders/design-system'
import stubs from '../../../../../../../../../tests/unit/stubs'
import { mockDeep } from 'jest-mock-extended'
import { ClientService } from 'web-pkg/src'

const localVue = createLocalVue()
localVue.use(GetTextPlugin, {
  translations: 'does-not-matter.json',
  silent: true
})
localVue.use(DesignSystem)
localVue.use(Vuex)

const folderMock = {
  type: 'folder',
  isFolder: true,
  ownerId: 'alice',
  ownerDisplayName: 'alice',
  mdate: 'Wed, 21 Oct 2015 07:28:00 GMT',
  size: '740',
  isMounted: jest.fn(() => true),
  name: 'lorem.txt',
  privateLink: 'some-link',
  canShare: jest.fn(() => true),
  path: '/documents',
  canDeny: () => false
}

const spaceMock = {
  id: 1,
  type: 'space'
}

describe('InviteCollaboratorForm', () => {
  describe('renders correctly', () => {
    it.todo('renders a select field for share receivers')
    it.todo('renders an inviteDescriptionMessage')
    it.todo('renders a role selector component')
    it.todo('renders an expiration datepicker component')
    it.todo('renders an invite-sharees button')
    it.todo('renders an hidden-announcer')
  })
  describe('behaves correctly', () => {
    it.todo('upon mount fetches recipients')
    it('clicking the invite-sharees button calls the "share"-action', async () => {
      const selectedCollaborators = [
        { shareWith: 'marie', value: { shareType: ShareTypes.user.value }, label: 'label' }
      ]
      const wrapper = getWrapper({ selectedCollaborators } as any)
      const spyTriggerUpload = jest.spyOn(wrapper.vm, 'share')
      const shareBtn = wrapper.find('#new-collaborators-form-create-button')
      expect(shareBtn.exists()).toBeTruthy()

      await shareBtn.trigger('click')
      expect(spyTriggerUpload).toHaveBeenCalledTimes(0)
    })
    it.each([
      { storageId: undefined, highlightedFile: folderMock, addMethod: 'addShare' },
      { storageId: undefined, highlightedFile: spaceMock, addMethod: 'addSpaceMember' },
      { storageId: 1, highlightedFile: folderMock, addMethod: 'addShare' }
    ])('calls the "addShare" action', async (dataSet) => {
      const selectedCollaborators = [
        { shareWith: 'marie', value: { shareType: ShareTypes.user.value }, label: 'label' }
      ]
      const wrapper = getWrapper({
        selectedCollaborators,
        storageId: dataSet.storageId,
        highlightedFile: dataSet.highlightedFile as any
      })
      const addShareSpy = jest.spyOn(wrapper.vm, dataSet.addMethod)
      await wrapper.vm.share()
      expect(addShareSpy).toHaveBeenCalled()
    })
    it.todo('resets focus upon selecting an invitee')
  })
})

function getWrapper({
  selectedCollaborators = [],
  storageId = 'fake-storage-id',
  highlightedFile = folderMock
} = {}) {
  return mount(InviteCollaboratorForm, {
    localVue,
    stubs: {
      'recipient-container': true,
      'role-dropdown': true,
      ...stubs
    },
    data() {
      return {
        selectedCollaborators
      }
    },
    mocks: {
      $route: {
        params: { storageId }
      },
      $clientService: mockDeep<ClientService>({})
    },
    store: new Vuex.Store({
      modules: {
        Files: {
          namespaced: true,
          getters: {
            highlightedFile: () => {
              return highlightedFile
            }
          },
          actions: {
            addShare: jest.fn()
          }
        },
        runtime: {
          namespaced: true,
          modules: {
            auth: {
              namespaced: true,
              getters: {
                accessToken: () => 'GFwHKXdsMgoFwt'
              }
            },
            spaces: {
              namespaced: true,
              actions: {
                addSpaceMember: jest.fn()
              }
            }
          }
        }
      },
      getters: {
        capabilities: () => ({
          files_sharing: { federation: { incoming: true, outgoing: true } }
        }),
        configuration: jest.fn(() => ({
          server: 'http://example.com/'
        }))
      }
    })
  })
}
