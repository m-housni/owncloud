import App from '../../src/App.vue'
import { mount } from '@vue/test-utils'
import { ref } from 'vue'
import Vuex from 'vuex'
import { defaultComponentMocks } from 'web-test-helpers/src/mocks/defaultComponentMocks'
import { defaultLocalVue } from 'web-test-helpers/src/localVue/defaultLocalVue'
import { defaultStoreMockOptions } from 'web-test-helpers/src/mocks/store/defaultStoreMockOptions'
import { createStore } from 'vuex-extensions'
import { defaultStubs } from 'web-test-helpers/src/mocks/defaultStubs'
import { useAppDefaultsMock } from 'web-test-helpers/src/mocks/useAppDefaultsMock'
import { FileContext, useAppDefaults } from 'web-pkg/src/composables/appDefaults'
import { mockDeep } from 'jest-mock-extended'

jest.mock('web-pkg/src/composables/appDefaults')

describe('Text editor app', () => {
  it('appTopBar always present', () => {
    const { wrapper } = getWrapper()
    expect(wrapper.find('app-top-bar-stub').exists()).toBeTruthy()
  })
  describe('different view states', () => {
    it('shows the loading spinner during loading', () => {
      const { wrapper } = getWrapper()
      expect(wrapper.find('oc-spinner-stub').exists()).toBeTruthy()
    })
    it('shows the editor after loading', async () => {
      const { wrapper } = getWrapper()
      await wrapper.vm.loadFileTask.last
      expect(wrapper.find('oc-spinner-stub').exists()).toBeFalsy()
      expect(wrapper.find('oc-textarea-stub').exists()).toBeTruthy()
    })
  })
  describe('preview', () => {
    it.each([
      { fileExtension: 'txt', showPreview: false },
      { fileExtension: 'js', showPreview: false },
      { fileExtension: 'php', showPreview: false },
      { fileExtension: 'json', showPreview: false },
      { fileExtension: 'xml', showPreview: false },
      { fileExtension: 'md', showPreview: true }
    ])('shows only for supported file types', async (data) => {
      const { wrapper } = getWrapper({ fileName: `file.${data.fileExtension}` })
      await wrapper.vm.loadFileTask.last
      expect(wrapper.find('#text-editor-preview').exists()).toBe(data.showPreview)
    })
  })
})

function getWrapper({ fileName = 'someFile.txt' }: { fileName?: string } = {}) {
  jest.mocked(useAppDefaults).mockImplementation(() =>
    useAppDefaultsMock({
      currentFileContext: ref(mockDeep<FileContext>({ path: fileName }))
    })
  )
  const defaultMocks = { ...defaultComponentMocks() }
  const storeOptions = { ...defaultStoreMockOptions }
  const localVue = defaultLocalVue()
  const store = createStore(Vuex.Store, storeOptions)
  return {
    mocks: defaultMocks,
    storeOptions,
    wrapper: mount(App, {
      localVue,
      mocks: defaultMocks,
      store,
      stubs: defaultStubs
    })
  }
}
