import Vuex from 'vuex'
import { DateTime } from 'luxon'
import GetTextPlugin from 'vue-gettext'
import DesignSystem from '@ownclouders/design-system'
import { mount, shallowMount, createLocalVue, MountOptions } from '@vue/test-utils'
import FileVersions from 'web-app-files/src/components/SideBar/Versions/FileVersions.vue'
import { defaultStubs } from 'web-test-helpers/src/mocks/defaultStubs'
import { mockDeep } from 'jest-mock-extended'
import { Resource } from 'web-client'
import { ShareSpaceResource } from 'web-client/src/helpers'
import { DavPermission } from 'web-client/src/webdav/constants'

const yesterday = DateTime.now().minus({ days: 1 }).toHTTP()

const sevenDaysBefore = DateTime.now().minus({ days: 7 }).toHTTP()

const localVue = createLocalVue()
localVue.use(Vuex)
localVue.use(DesignSystem)
localVue.use(GetTextPlugin, {
  translations: 'does-not-matter.json',
  silent: true
})

const defaultVersions = [
  {
    fileInfo: {
      '{DAV:}getcontentlength': '23',
      '{DAV:}getcontenttype': 'text/plain',
      '{DAV:}getetag': '"82add182994ade91e3d5bc47571ea731"',
      '{DAV:}getlastmodified': yesterday,
      '{DAV:}resourcetype': ''
    },
    name: '/meta/2147524174/v/1625818937',
    tusSupport: null,
    type: 'file'
  },
  {
    fileInfo: {
      '{DAV:}getcontentlength': '11',
      '{DAV:}getcontenttype': 'text/plain',
      '{DAV:}getetag': '"311b3319ebc7063069a15ee02b926298"',
      '{DAV:}getlastmodified': sevenDaysBefore,
      '{DAV:}resourcetype': ''
    },
    name: '/meta/2147524174/v/1625637401',
    tusSupport: null,
    type: 'file'
  }
]

const loadingStubSelector = 'oc-loader-stub'
const versionTableStubSelector = 'oc-simple-table-stub'

const selectors = {
  noVersionsMessage: '[data-testid="file-versions-no-versions"]',
  fileTypeIcon: '[data-testid="file-versions-file-icon"] oc-resource-icon-stub',
  lastModifiedDate: '[data-testid="file-versions-file-last-modified-date"]',
  resourceSize: '[data-testid="file-versions-file-size"]',
  revertVersionButton: '[data-testid="file-versions-revert-button"]',
  downloadVersionButton: '[data-testid="file-versions-download-button"]'
}

const mapActions = {
  loadVersions: jest.fn()
}

describe('FileVersions', () => {
  describe('loading is true', () => {
    // fetchFileVersion is fired up when the wrapper is mounted and it sets loading to false
    // so the function needs to be mocked to get a loading wrapper
    jest.spyOn((FileVersions as any).methods, 'fetchFileVersions').mockImplementation()
    const wrapper = getShallowWrapper(createStore(), true)

    it('should show oc loader component', () => {
      expect(wrapper.find(loadingStubSelector).exists()).toBeTruthy()
    })

    it('should not show versions table', () => {
      expect(wrapper.find(versionTableStubSelector).exists()).toBeFalsy()
    })

    it('should show no versions message', () => {
      expect(wrapper.find(selectors.noVersionsMessage).exists()).toBeTruthy()
    })
  })

  describe('when loading is false', () => {
    const store = createStore({ versions: [] })

    it('should not show oc loader component', () => {
      const wrapper = getShallowWrapper(store)
      expect(wrapper.find(loadingStubSelector).exists()).toBeFalsy()
    })

    it('should show no versions message if hasVersion is falsy', () => {
      const wrapper = getShallowWrapper(store)
      const noVersionsMessageElement = wrapper.find(selectors.noVersionsMessage)

      expect(noVersionsMessageElement.text()).toBe('No Versions available for this file')
    })

    describe('currentVersionId method', () => {
      it('should return last item from slitted file name', () => {
        const wrapper = getShallowWrapper(store)
        expect(wrapper.vm.currentVersionId({ name: '/meta/2147525688/v/1616851438' })).toBe(
          '1616851438'
        )
      })
    })

    describe('when hasVersion is truthy', () => {
      describe('versions table', () => {
        it('should render icon according to file type', () => {
          const store = createStore({
            highlightedFile: mockDeep<Resource>({
              name: 'lorem.png',
              extension: 'png',
              type: 'file'
            }),
            versions: [
              {
                fileInfo: {
                  '{DAV:}getcontentlength': '55474',
                  '{DAV:}getcontenttype': 'image/jpeg',
                  '{DAV:}getetag': '"156c87c7f5b017e55b38e1d188493f45"',
                  '{DAV:}getlastmodified': 'Sat, 27 Mar 2021 13:23:58 GMT',
                  '{DAV:}resourcetype': ''
                },
                name: '/meta/2147525688/v/1616851438',
                tusSupport: null,
                type: 'file'
              }
            ]
          })
          const wrapper = getShallowWrapper(store)

          const iconElements = wrapper.findAll(selectors.fileTypeIcon)

          expect(iconElements.length).toBe(1)
        })
        it('should show item last modified date', () => {
          const wrapper = getShallowWrapper(createStore())
          const dateElement = wrapper.findAll(selectors.lastModifiedDate)

          expect(dateElement.length).toBe(2)
          expect(dateElement.at(0).text()).toBe('1 day ago')
          expect(dateElement.at(1).text()).toBe('7 days ago')
        })
        it('should show item content length', () => {
          const wrapper = getShallowWrapper(createStore())
          const contentLengthElement = wrapper.findAll(selectors.resourceSize)

          expect(contentLengthElement.length).toBe(2)
          expect(contentLengthElement.at(0).text()).toBe('23 B')
          expect(contentLengthElement.at(1).text()).toBe('11 B')
        })
        describe('row actions', () => {
          const spyRevertFunction = jest
            .spyOn((FileVersions as any).methods, 'revertVersion')
            .mockImplementation()
          const spyDownloadFunction = jest
            .spyOn((FileVersions as any).methods, 'downloadVersion')
            .mockImplementation()

          describe('reverting versions', () => {
            it('should be possible for a non-share', () => {
              const wrapper = getMountedWrapper(createStore())
              const revertVersionButton = wrapper.findAll(selectors.revertVersionButton)
              expect(revertVersionButton.length).toBe(2)
            })
            it('should be possible for a share with write permissions', () => {
              const wrapper = getMountedWrapper(
                createStore({
                  highlightedFile: mockDeep<Resource>({
                    permissions: DavPermission.Updateable,
                    share: undefined
                  })
                }),
                mockDeep<ShareSpaceResource>({ driveType: 'share' })
              )
              const revertVersionButton = wrapper.findAll(selectors.revertVersionButton)
              expect(revertVersionButton.length).toBe(2)
            })
            it('should not be possible for a share with read-only permissions', () => {
              const wrapper = getMountedWrapper(
                createStore({
                  highlightedFile: mockDeep<Resource>({ permissions: '', share: undefined })
                }),
                mockDeep<ShareSpaceResource>({ driveType: 'share' })
              )
              const revertVersionButton = wrapper.findAll(selectors.revertVersionButton)
              expect(revertVersionButton.length).toBe(0)
            })
            it('should call revertVersion method when revert version button is clicked', async () => {
              const wrapper = getMountedWrapper(createStore())
              const revertVersionButton = wrapper.findAll(selectors.revertVersionButton)

              expect(revertVersionButton.length).toBe(2)
              expect(spyRevertFunction).not.toHaveBeenCalled()

              await revertVersionButton.at(0).trigger('click')

              expect(spyRevertFunction).toHaveBeenCalledTimes(1)
              expect(spyRevertFunction).toHaveBeenCalledWith(defaultVersions[0])
            })
          })

          it('should call downloadVersion method when download version button is clicked', async () => {
            const wrapper = getMountedWrapper(createStore())
            const downloadVersionButton = wrapper.findAll(selectors.downloadVersionButton)

            expect(downloadVersionButton.length).toBe(2)
            expect(spyDownloadFunction).not.toHaveBeenCalled()

            await downloadVersionButton.at(0).trigger('click')

            expect(spyDownloadFunction).toHaveBeenCalledTimes(1)
            expect(spyDownloadFunction).toHaveBeenCalledWith(defaultVersions[0])
          })
        })
      })
    })
  })
})

function getMountOptions({ store, loading = false, space = undefined }): MountOptions<any> {
  return {
    localVue,
    store,
    stubs: {
      ...defaultStubs,
      'oc-td': true,
      'oc-tr': true,
      'oc-tbody': true,
      'oc-table-simple': true,
      'oc-resource-icon': true,
      'oc-button': false
    },
    directives: {
      'oc-tooltip': jest.fn()
    },
    data() {
      return {
        loading
      }
    },
    provide: {
      displayedSpace: space
    }
  }
}

function getShallowWrapper(store, loading = false, space = undefined) {
  return shallowMount(FileVersions, getMountOptions({ store, loading, space }))
}

function getMountedWrapper(store, space = undefined) {
  return mount(FileVersions, getMountOptions({ store, space }))
}

function createStore({
  highlightedFile = mockDeep<Resource>(),
  versions = defaultVersions
}: { highlightedFile?: Resource; versions?: typeof defaultVersions } = {}) {
  return new Vuex.Store({
    modules: {
      Files: {
        namespaced: true,
        getters: {
          highlightedFile: function () {
            return highlightedFile
          },
          versions: function () {
            return versions
          }
        },
        actions: mapActions
      }
    }
  })
}
