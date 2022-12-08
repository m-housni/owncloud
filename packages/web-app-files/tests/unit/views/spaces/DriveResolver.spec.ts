import { mount } from '@vue/test-utils'
import DriveResolver from '../../../../src/views/spaces/DriveResolver.vue'
import { defaultStoreMockOptions } from 'web-test-helpers/src/mocks/store/defaultStoreMockOptions'
import { defaultComponentMocks } from 'web-test-helpers/src/mocks/defaultComponentMocks'
import { createStore } from 'vuex-extensions'
import { defaultLocalVue } from 'web-test-helpers/src/localVue/defaultLocalVue'
import Vuex from 'vuex'
import { useDriveResolver } from 'web-pkg/src/composables'
import { spaces } from 'web-app-files/tests/__fixtures__'
import { computed, ref } from 'vue'
import { defaultStubs } from 'web-test-helpers/src/mocks/defaultStubs'
import { mockDeep } from 'jest-mock-extended'
import { ClientService } from 'web-pkg/src'
import { locationPublicUpload } from 'web-app-files/src/router/public'
import { PublicSpaceResource } from 'web-client/src/helpers'
import { SharePermissionBit } from 'web-client/src/helpers/share'

jest.mock('web-pkg/src/composables/driveResolver')

describe('DriveResolver view', () => {
  it('renders the "drive-redirect"-component when no space is given', () => {
    const { wrapper } = getMountedWrapper()
    expect(wrapper.find('drive-redirect-stub').exists()).toBeTruthy()
  })
  it('renders the "generic-trash"-component when on a trash route', () => {
    const { wrapper } = getMountedWrapper({
      space: spaces[0],
      currentRouteName: 'files-trash-generic'
    })
    expect(wrapper.find('generic-trash-stub').exists()).toBeTruthy()
  })
  it('renders the "generic-space"-component when a space is given', () => {
    const { wrapper } = getMountedWrapper({ space: spaces[0] })
    expect(wrapper.find('generic-space-stub').exists()).toBeTruthy()
  })
  it('redirects to the public drop page in a public context with "upload-only"-permissions', async () => {
    const space = { id: '1', getDriveAliasAndItem: jest.fn(), driveType: 'public' }
    const clientService = mockDeep<ClientService>()
    clientService.webdav.getFileInfo.mockResolvedValue(
      mockDeep<PublicSpaceResource>({ publicLinkPermission: SharePermissionBit.Create })
    )
    const { wrapper, mocks } = getMountedWrapper({
      space,
      mocks: { $clientService: clientService }
    })

    await wrapper.vm.$nextTick()
    await wrapper.vm.$nextTick()
    expect(mocks.$router.push).toHaveBeenCalledWith({
      name: locationPublicUpload.name,
      params: { token: space.id }
    })
  })
})

function getMountedWrapper({
  mocks = {},
  space = undefined,
  currentRouteName = 'files-spaces-generic'
} = {}) {
  jest.mocked(useDriveResolver).mockImplementation(() => ({
    space,
    item: ref('/'),
    itemId: computed(() => 'id')
  }))
  const defaultMocks = {
    ...defaultComponentMocks({
      currentRoute: { name: currentRouteName, params: { driveAliasAndItem: '/' } }
    }),
    ...(mocks && mocks)
  }
  const storeOptions = { ...defaultStoreMockOptions }
  const localVue = defaultLocalVue()
  const store = createStore(Vuex.Store, storeOptions)
  return {
    mocks: defaultMocks,
    storeOptions,
    wrapper: mount(DriveResolver, {
      localVue,
      mocks: defaultMocks,
      store,
      stubs: defaultStubs
    })
  }
}
