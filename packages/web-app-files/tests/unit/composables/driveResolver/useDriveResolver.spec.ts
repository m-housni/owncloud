import { useCapabilitySpacesEnabled, useDriveResolver } from 'web-pkg/src'
import { createComposableWrapper } from '../composables.setup'
import { defaultComponentMocks } from 'web-test-helpers/src/mocks/defaultComponentMocks'
import { computed, ref, unref } from 'vue'
import Vuex from 'vuex'
import { mockDeep } from 'jest-mock-extended'
import { defaultStoreMockOptions } from 'web-test-helpers/src/mocks/store/defaultStoreMockOptions'
import { isShareSpaceResource, SpaceResource } from 'web-client/src/helpers'
import { createStore } from 'vuex-extensions'

jest.unmock('web-app-files/src/composables')
jest.mock('web-pkg/src/composables/capability')

describe('useDriveResolver', () => {
  it('should be valid', () => {
    expect(useDriveResolver).toBeDefined()
  })
  it('space and item should be null when no driveAliasAndItem given', () => {
    createComposableWrapper(
      () => {
        const { space, item } = useDriveResolver({ driveAliasAndItem: ref('') })
        expect(unref(space)).toEqual(null)
        expect(unref(item)).toEqual(null)
      },
      { mocks: defaultComponentMocks(), store: defaultStoreMockOptions }
    )
  })
  it('returns a public space on a public page', () => {
    const token = 'token'
    const spaceMock = mockDeep<SpaceResource>({ id: token })
    const storeOptions = { ...defaultStoreMockOptions }
    storeOptions.modules.runtime.modules.spaces.getters.spaces = jest.fn(() => [spaceMock])
    const store = createStore(Vuex.Store, storeOptions)
    createComposableWrapper(
      () => {
        const { space, item } = useDriveResolver({ driveAliasAndItem: ref(`public/${token}`) })
        expect(unref(space)).toEqual(spaceMock)
        expect(unref(item)).toEqual('/')
      },
      { mocks: defaultComponentMocks(), store }
    )
  })
  it('returns a share space for a share', () => {
    const spaceMock = mockDeep<SpaceResource>()
    const storeOptions = { ...defaultStoreMockOptions }
    storeOptions.modules.runtime.modules.spaces.getters.spaces = jest.fn(() => [spaceMock])
    const store = createStore(Vuex.Store, storeOptions)
    createComposableWrapper(
      () => {
        const { space, item } = useDriveResolver({
          driveAliasAndItem: ref(`share/someSharedFolder`)
        })
        expect(isShareSpaceResource(unref(space))).toEqual(true)
        expect(unref(item)).toEqual('/')
      },
      { mocks: defaultComponentMocks(), store }
    )
  })
  it('returns a space by fileId if given', () => {
    const hasSpaces = true
    const fileId = 'someFileId'
    const resourcePath = '/someFolder'
    const spaceMock = mockDeep<SpaceResource>({ fileId, driveAlias: 'driveAlias' })
    const storeOptions = { ...defaultStoreMockOptions }
    storeOptions.modules.runtime.modules.spaces.getters.spaces = jest.fn(() => [spaceMock])
    const store = createStore(Vuex.Store, storeOptions)

    jest.mocked(useCapabilitySpacesEnabled).mockImplementation(() => computed(() => hasSpaces))

    createComposableWrapper(
      () => {
        const { space, item, itemId } = useDriveResolver({
          driveAliasAndItem: ref(`/personal${resourcePath}`)
        })
        expect(unref(space)).toEqual(spaceMock)
        expect(unref(item)).toEqual(resourcePath)
        expect(unref(itemId)).toEqual(fileId)
      },
      {
        mocks: defaultComponentMocks({
          currentRoute: { name: 'files-spaces-generic', path: '/', query: { fileId } }
        }),
        store
      }
    )
  })
  it('returns a space by driveAlias if no fileId given', () => {
    const hasSpaces = true
    const driveAlias = '/personal'
    const resourcePath = '/someFolder'
    const spaceMock = mockDeep<SpaceResource>({ driveAlias })
    const storeOptions = { ...defaultStoreMockOptions }
    storeOptions.modules.runtime.modules.spaces.getters.spaces = jest.fn(() => [spaceMock])
    const store = createStore(Vuex.Store, storeOptions)

    jest.mocked(useCapabilitySpacesEnabled).mockImplementation(() => computed(() => hasSpaces))

    createComposableWrapper(
      () => {
        const { space, item } = useDriveResolver({
          driveAliasAndItem: ref(`${driveAlias}${resourcePath}`)
        })
        expect(unref(space)).toEqual(spaceMock)
        expect(unref(item)).toEqual(resourcePath)
      },
      {
        mocks: defaultComponentMocks({
          currentRoute: { name: 'files-spaces-generic', path: '/', query: { fileId: undefined } }
        }),
        store
      }
    )
  })
  it.each([
    { driveType: 'projects', loadMembersCalls: 1 },
    { driveType: 'public', loadMembersCalls: 0 },
    { driveType: 'share', loadMembersCalls: 0 },
    { driveType: 'personal', loadMembersCalls: 0 }
  ])('loads space members for a project space', (data) => {
    const driveAlias = `/${data.driveType}`
    const spaceMock = mockDeep<SpaceResource>({ driveAlias, driveType: data.driveType })
    const storeOptions = { ...defaultStoreMockOptions }
    storeOptions.modules.runtime.modules.spaces.getters.spaces = jest.fn(() => [spaceMock])
    const store = createStore(Vuex.Store, storeOptions)

    createComposableWrapper(
      () => {
        useDriveResolver({ driveAliasAndItem: ref(`${driveAlias}/someFolder`) })
        expect(
          storeOptions.modules.runtime.modules.spaces.actions.loadSpaceMembers
        ).toHaveBeenCalledTimes(data.loadMembersCalls)
      },
      {
        mocks: defaultComponentMocks({
          currentRoute: { name: 'files-spaces-generic', path: '/', query: { fileId: undefined } }
        }),
        store
      }
    )
  })
})
