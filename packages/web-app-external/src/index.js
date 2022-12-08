import translations from '../l10n/translations'
import App from './App.vue'
import store from './store'

const appInfo = {
  name: 'External',
  id: 'external'
}

const routes = [
  {
    name: 'apps',
    path: '/:driveAliasAndItem*',
    component: App,
    meta: {
      authContext: 'hybrid',
      patchCleanPath: true
    }
  }
]

export default {
  appInfo,
  routes,
  store,
  translations,
  ready({ store }) {
    store.dispatch('External/fetchMimeTypes')
  }
}
