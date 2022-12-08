import { SearchPreview, SearchResult } from 'web-app-search/src/types'
import PreviewComponent from '../../components/Search/Preview.vue'
import { clientService } from 'web-pkg/src/services'
import { buildResource } from 'web-client/src/helpers'
import { Cache } from 'web-pkg/src/helpers/cache'
import { Component } from 'vue'
import VueRouter from 'vue-router'
import { DavProperties } from 'web-client/src/webdav/constants'
import { Store } from 'vuex'

export const previewSearchLimit = 8

export default class Preview implements SearchPreview {
  public readonly component: Component
  private readonly cache: Cache<string, SearchResult>
  private readonly router: VueRouter
  private readonly store: Store<any>

  constructor(store: Store<any>, router: VueRouter) {
    this.component = PreviewComponent
    this.router = router
    this.store = store
    // define how long the cache should be valid, maybe conf option?
    this.cache = new Cache({ ttl: 10000, capacity: 100 })
  }

  public async search(term: string): Promise<SearchResult> {
    if (!term) {
      return {
        totalResults: null,
        values: []
      }
    }

    if (this.cache.has(term)) {
      return this.cache.get(term)
    }

    const areHiddenFilesShown = this.store.state.Files?.areHiddenFilesShown
    const { range, results } = await clientService.owncloudSdk.files.search(
      term,
      previewSearchLimit, // todo: add configuration option, other places need that too... needs consolidation
      DavProperties.Default
    )
    const resources = results.reduce((acc, result) => {
      const resource = buildResource(result)
      // info: in oc10 we have no storageId in resources. All resources are mounted into the personal space.
      if (!resource.storageId) {
        resource.storageId = this.store.getters.user.id
      }

      // filter results if hidden files shouldn't be shown due to settings
      if (!resource.name.startsWith('.') || areHiddenFilesShown) {
        acc.push({ id: resource.id, data: { ...resource } })
      }

      return acc
    }, [])
    return this.cache.set(term, {
      totalResults: range ? parseInt(range?.split('/')[1]) : null,
      values: resources
    })
  }

  public get available(): boolean {
    return this.router.currentRoute.name !== 'search-provider-list'
  }
}
