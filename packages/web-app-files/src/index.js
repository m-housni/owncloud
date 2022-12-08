import App from './App.vue'
import Favorites from './views/Favorites.vue'
import FilesDrop from './views/FilesDrop.vue'
import SharedWithMe from './views/shares/SharedWithMe.vue'
import SharedWithOthers from './views/shares/SharedWithOthers.vue'
import SharedViaLink from './views/shares/SharedViaLink.vue'
import SpaceDriveResolver from './views/spaces/DriveResolver.vue'
import SpaceProjects from './views/spaces/Projects.vue'
import translations from '../l10n/translations.json'
import quickActions from './quickActions'
import store from './store'
import { SDKSearch } from './search'
import { eventBus } from 'web-pkg/src/services/eventBus'
import { archiverService, thumbnailService, Registry } from './services'
import fileSideBars from './fileSideBars'
import { buildRoutes } from './router'
import get from 'lodash-es/get'

// dirty: importing view from other extension within project
import SearchResults from '../../web-app-search/src/views/List.vue'

// just a dummy function to trick gettext tools
function $gettext(msg) {
  return msg
}

const appInfo = {
  name: $gettext('Files'),
  id: 'files',
  icon: 'resource-type-folder',
  isFileEditor: false,
  extensions: [],
  fileSideBars
}
const navItems = [
  {
    name(capabilities) {
      return capabilities.spaces?.enabled ? $gettext('Personal') : $gettext('All files')
    },
    icon: appInfo.icon,
    route: {
      path: `/${appInfo.id}/spaces/personal`
    }
  },
  {
    name: $gettext('Favorites'),
    icon: 'star',
    route: {
      path: `/${appInfo.id}/favorites`
    },
    enabled(capabilities) {
      return capabilities.files && capabilities.files.favorites
    }
  },
  {
    name: $gettext('Shares'),
    icon: 'share-forward',
    route: {
      path: `/${appInfo.id}/shares`
    },
    activeFor: [{ path: `/${appInfo.id}/spaces/share` }],
    enabled(capabilities) {
      return capabilities.files_sharing?.api_enabled !== false
    }
  },
  {
    name: $gettext('Spaces'),
    icon: 'layout-grid',
    route: {
      path: `/${appInfo.id}/spaces/projects`
    },
    activeFor: [{ path: `/${appInfo.id}/spaces/project` }],
    enabled(capabilities) {
      return capabilities.spaces && capabilities.spaces.projects === true
    }
  },
  {
    name: $gettext('Deleted files'),
    icon: 'delete-bin-5',
    route: {
      path: `/${appInfo.id}/trash`
    },
    enabled(capabilities) {
      return capabilities.dav && capabilities.dav.trashbin === '1.0'
    }
  }
]

export default {
  appInfo,
  store,
  routes: buildRoutes({
    App,
    Favorites,
    FilesDrop,
    SearchResults,
    Shares: {
      SharedViaLink,
      SharedWithMe,
      SharedWithOthers
    },
    Spaces: {
      DriveResolver: SpaceDriveResolver,
      Projects: SpaceProjects
    }
  }),
  navItems,
  quickActions,
  translations,
  ready({ router, store }) {
    Registry.sdkSearch = new SDKSearch(store, router)

    // when discussing the boot process of applications we need to implement a
    // registry that does not rely on call order, aka first register "on" and only after emit.
    eventBus.publish('app.search.register.provider', Registry.sdkSearch)

    archiverService.initialize(
      store.getters.configuration.server || window.location.origin,
      get(store, 'getters.capabilities.files.archivers', [
        {
          enabled: true,
          version: '1.0.0',
          formats: ['tar', 'zip'],
          archiver_url: `${store.getters.configuration.server}index.php/apps/files/ajax/download.php`
        }
      ])
    )
    // FIXME: Use capability data only as soon as available
    thumbnailService.initialize(
      get(store, 'getters.capabilities.files.thumbnail', {
        enabled: true,
        version: 'v0.1',
        supportedMimeTypes: store.getters.configuration?.options?.previewFileMimeTypes || []
      })
    )
  }
}
