import { Wrapper, mount, createLocalVue } from '@vue/test-utils'
import DesignSystem from '@ownclouders/design-system'
import SearchBar from '../../../src/portals/SearchBar.vue'
import AsyncComputed from 'vue-async-computed'
import { createLocationCommon } from 'web-app-files/src/router'
import flushPromises from 'flush-promises'
import { createStore } from 'vuex-extensions'
import Vuex from 'vuex'

const localVue = createLocalVue()
localVue.use(DesignSystem)
localVue.use(AsyncComputed)
localVue.use(Vuex)

let wrapper: Wrapper<any>

const providerFiles = {
  id: 'files',
  displayName: 'Files',
  available: true,
  previewSearch: {
    available: true,
    search: jest.fn(),
    component: localVue.component('ProviderFilesPreview', {
      render(createElement) {
        return createElement('div')
      }
    })
  }
}

const providerContacts = {
  id: 'contacts',
  displayName: 'Contacts',
  available: true,
  previewSearch: {
    available: true,
    search: jest.fn()
  },
  component: localVue.component('ProviderContactsPreview', {
    render(createElement) {
      return createElement('div')
    }
  })
}

const selectors = {
  noResults: '#no-results',
  searchInput: 'input',
  searchInputClear: '.oc-search-clear',
  providerListItem: '.provider',
  providerDisplayName: '.provider .display-name',
  providerMoreResultsLink: '.provider .more-results',
  optionsHidden: '.tippy-box[data-state="hidden"]',
  optionsVisible: '.tippy-box[data-state="visible"]'
}

jest.mock('lodash-es/debounce', () => (fn) => fn)

beforeEach(() => {
  jest.resetAllMocks()

  window.ResizeObserver = jest.fn().mockImplementation(() => ({
    disconnect: jest.fn(),
    observe: jest.fn(),
    unobserve: jest.fn()
  }))

  providerFiles.previewSearch.search.mockImplementation(() => {
    return {
      values: [
        { id: 'f1', data: 'albert.txt' },
        { id: 'f2', data: 'marie.txt' }
      ]
    }
  })

  providerContacts.previewSearch.search.mockImplementation(() => {
    return {
      values: [
        { id: 'c1', data: 'albert' },
        { id: 'c2', data: 'marie' }
      ]
    }
  })
})

afterEach(() => {
  wrapper.destroy()
})

describe('Search Bar portal component', () => {
  test('does not render a search field if no availableProviders given', () => {
    wrapper = getMountedWrapper({ data: { providerStore: { availableProviders: [] } } })
    expect(wrapper.element.innerHTML).toBeFalsy()
  })
  test('does not render a search field if no user given', () => {
    wrapper = getMountedWrapper({ isUserContextReady: false })
    expect(wrapper.element.innerHTML).toBeFalsy()
  })
  test('updates the search term on input', () => {
    wrapper = getMountedWrapper()
    wrapper.find(selectors.searchInput).setValue('alice')
    expect(wrapper.vm.$data.term).toBe('alice')
  })
  test('shows message if no results are available', async () => {
    wrapper = getMountedWrapper()
    providerFiles.previewSearch.search.mockImplementationOnce(() => {
      return {
        values: []
      }
    })
    providerContacts.previewSearch.search.mockImplementationOnce(() => {
      return {
        values: []
      }
    })
    wrapper.find(selectors.searchInput).setValue('nothing found')
    await flushPromises()
    expect(wrapper.find(selectors.noResults)).toBeTruthy()
  })
  test('displays all available providers', async () => {
    wrapper = getMountedWrapper()
    wrapper.find(selectors.searchInput).setValue('albert')
    await flushPromises()
    expect(wrapper.findAll(selectors.providerListItem).length).toEqual(2)
  })
  test('only displays provider list item if search results are attached', async () => {
    wrapper = getMountedWrapper()
    providerContacts.previewSearch.search.mockImplementation(() => {
      return {
        values: []
      }
    })
    wrapper.find(selectors.searchInput).setValue('albert')
    await flushPromises()
    expect(wrapper.findAll(selectors.providerListItem).length).toEqual(1)
  })
  test('displays the provider name in the provider list item', async () => {
    wrapper = getMountedWrapper()
    wrapper.find(selectors.searchInput).setValue('albert')
    await flushPromises()
    const providerDisplayNameItems = wrapper.findAll(selectors.providerDisplayName)
    expect(providerDisplayNameItems.at(0).text()).toEqual('Files')
    expect(providerDisplayNameItems.at(1).text()).toEqual('Contacts')
  })
  test('displays the more results link for the available providers', async () => {
    wrapper = getMountedWrapper()
    wrapper.find(selectors.searchInput).setValue('albert')
    await flushPromises()
    expect(wrapper.findAll(selectors.providerMoreResultsLink).length).toEqual(2)
  })
  test('hides options on preview item click', async () => {
    wrapper = getMountedWrapper()
    wrapper.find(selectors.searchInput).setValue('albert')
    await flushPromises()
    expect(wrapper.findAll(selectors.optionsVisible).length).toEqual(1)
    wrapper.findAll('.preview-component').at(0).trigger('click')
    expect(wrapper.findAll(selectors.optionsHidden).length).toEqual(1)
  })
  test('hides options on key press enter', async () => {
    wrapper = getMountedWrapper()
    wrapper.find(selectors.searchInput).setValue('albert')
    await flushPromises()
    expect(wrapper.findAll(selectors.optionsVisible).length).toEqual(1)
    wrapper.find(selectors.searchInput).trigger('keyup.enter')
    expect(wrapper.findAll(selectors.optionsHidden).length).toEqual(1)
  })
  test('hides options on key press escape', async () => {
    wrapper = getMountedWrapper()
    wrapper.find(selectors.searchInput).setValue('albert')
    await flushPromises()
    expect(wrapper.findAll(selectors.optionsVisible).length).toEqual(1)
    wrapper.find(selectors.searchInput).trigger('keyup.esc')
    expect(wrapper.findAll(selectors.optionsHidden).length).toEqual(1)
  })
  test('hides options on clear', async () => {
    wrapper = getMountedWrapper()
    wrapper.find(selectors.searchInput).setValue('albert')
    await flushPromises()
    expect(wrapper.findAll(selectors.optionsVisible).length).toEqual(1)
    await wrapper.find(selectors.searchInputClear).trigger('click')
    expect(wrapper.findAll(selectors.optionsHidden).length).toEqual(1)
  })
  test('hides options if no search term is given', async () => {
    wrapper = getMountedWrapper()
    wrapper.find(selectors.searchInput).setValue('albert')
    await flushPromises()
    expect(wrapper.findAll(selectors.optionsVisible).length).toEqual(1)
    wrapper.find(selectors.searchInput).setValue('')
    await wrapper.find(selectors.searchInputClear).trigger('click')
    expect(wrapper.findAll(selectors.optionsHidden).length).toEqual(1)
  })
  test('resets search term on clear', async () => {
    wrapper = getMountedWrapper()
    wrapper.find(selectors.searchInput).setValue('albert')
    await flushPromises()
    await wrapper.find(selectors.searchInputClear).trigger('click')
    expect(wrapper.vm.$data.term).toBeFalsy()
  })
  test('sets the search term according to route value on mount', async () => {
    wrapper = getMountedWrapper({
      mocks: {
        $route: {
          query: {
            term: 'alice'
          }
        }
      }
    })

    await wrapper.vm.$nextTick()
    expect(wrapper.vm.$data.term).toBe('alice')
    expect((wrapper.get('input').element as HTMLInputElement).value).toBe('alice')
  })
  test.skip('sets active preview item via keyboard navigation', async () => {
    wrapper = getMountedWrapper()
    wrapper.find(selectors.searchInput).setValue('albert')
    await flushPromises()
    wrapper.find(selectors.searchInput).trigger('keyup.down')
    wrapper.find(selectors.searchInput).trigger('keyup.down')
  })
  test('navigates to files-common-search route on key press enter if search term is given', async () => {
    wrapper = getMountedWrapper()
    wrapper.find(selectors.searchInput).setValue('albert')
    const spyRouterPushStub = wrapper.vm.$router.push
    await flushPromises()
    wrapper.find(selectors.searchInput).trigger('keyup.enter')
    expect(spyRouterPushStub).toHaveBeenCalledTimes(1)
    expect(spyRouterPushStub).toHaveBeenCalledWith(
      createLocationCommon('files-common-search', {
        query: { term: 'albert', provider: 'files.sdk' }
      })
    )
  })
  test('does not navigate to files-common-search route on key press enter if no search term is given', async () => {
    wrapper = getMountedWrapper()
    wrapper.find(selectors.searchInput).setValue('')
    const spyRouterPushStub = wrapper.vm.$router.push
    await flushPromises()
    wrapper.find(selectors.searchInput).trigger('keyup.enter')
    expect(spyRouterPushStub).toHaveBeenCalledTimes(0)
  })
})

function getMountedWrapper({ data = {}, mocks = {}, isUserContextReady = true } = {}) {
  return mount(SearchBar, {
    localVue,
    attachTo: document.body,
    data: () => {
      return {
        providerStore: {
          availableProviders: [providerFiles, providerContacts]
        },
        ...data
      }
    },
    mocks: {
      $gettextInterpolate: (text) => text,
      $gettext: (text) => text,
      $route: {
        name: ''
      },
      $router: {
        go: jest.fn(),
        push: jest.fn()
      },
      ...mocks
    },
    stubs: {
      'router-link': true
    },
    store: createStore(Vuex.Store, {
      modules: {
        runtime: {
          namespaced: true,
          modules: {
            auth: {
              namespaced: true,
              getters: {
                isUserContextReady: () => isUserContextReady
              }
            }
          }
        }
      }
    })
  })
}
