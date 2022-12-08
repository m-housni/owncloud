import { shallowMount } from '@vue/test-utils'
import UploadInfo from '../../../src/components/UploadInfo.vue'
import Vuex from 'vuex'
import { defaultComponentMocks } from 'web-test-helpers/src/mocks/defaultComponentMocks'
import { defaultStoreMockOptions } from 'web-test-helpers/src/mocks/store/defaultStoreMockOptions'
import { createStore } from 'vuex-extensions'
import { defaultLocalVue } from 'web-test-helpers/src/localVue/defaultLocalVue'

const selectors = {
  overlay: '#upload-info',
  title: '.upload-info-title p',
  progress: '.upload-info-progress',
  success: '.upload-info-success',
  error: '.upload-info-danger',
  message: '.upload-info-message',
  info: {
    items: '.upload-info-items',
    item: '.upload-info-items li'
  }
}

jest.mock('web-pkg/src/configuration', () => ({
  configurationManager: {
    options: { routing: { idBased: true } }
  }
}))

describe('UploadInfo component', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  it('should render the component in a hidden state per default', () => {
    const { wrapper } = getShallowWrapper()
    const overlay = wrapper.find(selectors.overlay)
    expect(overlay.exists()).toBeFalsy()
  })
  it('should show the component', () => {
    const { wrapper } = getShallowWrapper({ showInfo: true })
    const overlay = wrapper.find(selectors.overlay)
    expect(overlay.exists()).toBeTruthy()
  })
  describe('title', () => {
    it('should show that an upload is in progress', () => {
      const { wrapper } = getShallowWrapper({
        showInfo: true,
        filesInProgressCount: 1,
        runningUploads: 1
      })
      const uploadTitle = wrapper.find(selectors.title).text()
      expect(uploadTitle).toBe('1 item uploading...')
    })
    it('should show that an upload was successful', () => {
      const { wrapper } = getShallowWrapper({
        showInfo: true,
        filesInProgressCount: 0,
        runningUploads: 0,
        successful: ['1'],
        errors: {}
      })
      const uploadTitle = wrapper.find(selectors.title).text()
      expect(uploadTitle).toBe('Upload complete')
    })
    it('should show that an upload failed', () => {
      const { wrapper } = getShallowWrapper({
        showInfo: true,
        filesInProgressCount: 0,
        runningUploads: 0,
        errors: [{ name: 'file', type: 'file' }],
        successful: []
      })
      const uploadTitle = wrapper.find(selectors.title).text()
      expect(uploadTitle).toBe('Upload failed')
    })
    it('should show that an upload was cancelled', () => {
      const { wrapper } = getShallowWrapper({
        showInfo: true,
        filesInProgressCount: 0,
        runningUploads: 0,
        errors: {},
        successful: [],
        uploadsCancelled: true
      })
      const uploadTitle = wrapper.find(selectors.title).text()
      expect(uploadTitle).toBe('Upload cancelled')
    })
    it('should show that an upload is preparing', () => {
      const { wrapper } = getShallowWrapper({
        showInfo: true,
        filesInProgressCount: 0,
        runningUploads: 1,
        inPreparation: true
      })
      const uploadTitle = wrapper.find(selectors.title).text()
      expect(uploadTitle).toBe('Preparing upload...')
    })
    it('should show that an upload is being finalized', () => {
      const { wrapper } = getShallowWrapper({
        showInfo: true,
        filesInProgressCount: 1,
        runningUploads: 1,
        inFinalization: true,
        errors: [],
        successful: []
      })
      const uploadTitle = wrapper.find(selectors.title).text()
      expect(uploadTitle).toBe('Finalizing upload...')
    })
  })
  describe('progress bar', () => {
    it('should show the progress bar when an upload is in progress', () => {
      const { wrapper } = getShallowWrapper({
        showInfo: true,
        filesInProgressCount: 1,
        runningUploads: 1
      })
      const progressBar = wrapper.find(selectors.progress)
      expect(progressBar.exists()).toBeTruthy()
    })
  })
  describe('info', () => {
    it('should show the number of successful items', () => {
      const { wrapper } = getShallowWrapper({
        showInfo: true,
        filesInProgressCount: 0,
        runningUploads: 0,
        errors: {},
        successful: ['1', '2']
      })
      const info = wrapper.find(selectors.success).text()
      expect(info).toBe('2 items uploaded')
    })
    it('should show the number of failed items', () => {
      const { wrapper } = getShallowWrapper({
        showInfo: true,
        filesInProgressCount: 0,
        runningUploads: 0,
        errors: [{ name: 'file', type: 'file' }],
        successful: ['1']
      })
      const info = wrapper.find(selectors.error).text()
      expect(info).toBe('1 of 2 items failed')
    })
  })
  describe('details', () => {
    it('should hide the info by default', () => {
      const { wrapper } = getShallowWrapper({
        showInfo: true
      })
      const info = wrapper.find(selectors.info.items)
      expect(info.exists()).toBeFalsy()
    })
    it('should list all the uploaded files when the info is displayed', () => {
      const { wrapper } = getShallowWrapper({
        showInfo: true,
        infoExpanded: true,
        uploads: [
          { name: 'file', type: 'file', meta: { uploadId: '1' } },
          { name: 'file2', type: 'file', meta: { uploadId: '2' } }
        ]
      })
      const info = wrapper.find(selectors.info.items)
      expect(info.exists()).toBeTruthy()

      const uploadedItems = wrapper.findAll(selectors.info.item)
      expect(uploadedItems.length).toBe(2)
    })
    it('should show a message on the failed uploaded files', () => {
      const { wrapper } = getShallowWrapper({
        showInfo: true,
        infoExpanded: true,
        uploads: [
          { name: 'file', type: 'file', meta: { uploadId: '1' } },
          { name: 'file2', type: 'file', meta: { uploadId: '2' } },
          { name: 'file3', type: 'file', meta: { uploadId: '3' } }
        ],
        errors: {
          1: new Error(),
          2: new Error()
        }
      })
      const info = wrapper.find(selectors.info.items)
      expect(info.exists()).toBeTruthy()

      const infoMessages = wrapper.findAll(selectors.message)
      expect(infoMessages.length).toBe(2)
      expect(infoMessages.at(0).text()).toBe('Unknown error')
      expect(infoMessages.at(0).text()).toBe('Unknown error')
    })
    it('folder is clickable', () => {
      const { wrapper } = getShallowWrapper({
        showInfo: true,
        infoExpanded: true,
        uploads: [
          {
            name: 'file',
            type: 'folder',
            isFolder: true,
            targetRoute: { params: { driveAliasAndItem: 'some/drive/alias' } },
            path: '',
            meta: { uploadId: '1' }
          }
        ]
      })

      const info = wrapper.find(selectors.info.items)
      expect(info.exists()).toBeTruthy()
      const resourceStub = wrapper.find(`${selectors.info.item} oc-resource-stub`)
      expect(resourceStub.props().isResourceClickable).toBeTruthy()
    })
  })
  describe('getRemainingTime method', () => {
    it.each([
      { ms: 1000, expected: 'Few seconds left' },
      { ms: 1000 * 60 * 30, expected: '30 minutes left' },
      { ms: 1000 * 60 * 60, expected: '1 hour left' },
      { ms: 1000 * 60 * 60 * 2, expected: '2 hours left' }
    ])('should return the proper string', ({ ms, expected }) => {
      const { wrapper } = getShallowWrapper()
      const estimatedTime = wrapper.vm.getRemainingTime(ms)
      expect(estimatedTime).toBe(expected)
    })
  })
})

function getShallowWrapper({
  showInfo = false,
  infoExpanded = false,
  uploads = [],
  filesInProgressCount = 0,
  runningUploads = 0,
  successful = [],
  errors = {},
  uploadsCancelled = false,
  inPreparation = false,
  inFinalization = false
} = {}) {
  const mocks = {
    ...defaultComponentMocks({ gettext: false })
  }
  const storeOptions = {
    ...defaultStoreMockOptions
  }
  const localVue = defaultLocalVue()
  const store = createStore(Vuex.Store, storeOptions)

  return {
    mocks,
    storeOptions,
    wrapper: shallowMount(UploadInfo, {
      localVue,
      store,
      mocks,
      data() {
        return {
          showInfo,
          infoExpanded,
          uploads,
          filesInProgressCount,
          runningUploads,
          successful,
          errors,
          uploadsCancelled,
          inPreparation,
          inFinalization
        }
      }
    })
  }
}
