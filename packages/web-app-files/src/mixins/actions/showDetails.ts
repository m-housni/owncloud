import { mapMutations } from 'vuex'
import { isLocationTrashActive } from '../../router'
import isFilesAppActive from './helpers/isFilesAppActive'
import { eventBus } from 'web-pkg/src/services/eventBus'
import { SideBarEventTopics } from '../../composables/sideBar'
import { useGraphClient } from 'web-pkg/src/composables'

export default {
  setup() {
    return { ...useGraphClient() }
  },
  mixins: [isFilesAppActive],
  computed: {
    $_showDetails_items() {
      return [
        {
          name: 'show-details',
          icon: 'information',
          label: () => this.$gettext('Details'),
          handler: this.$_showDetails_trigger,
          // we don't have details in the trashbin, yet.
          // remove trashbin route rule once we have them.
          isEnabled: ({ resources }) => {
            // sidebar is currently only available inside files app
            if (!this.$_isFilesAppActive) {
              return false
            }

            if (isLocationTrashActive(this.$router, 'files-trash-generic')) {
              return false
            }
            return resources.length > 0
          },
          componentType: 'button',
          class: 'oc-files-actions-show-details-trigger'
        }
      ]
    }
  },
  methods: {
    ...mapMutations('Files', ['SET_FILE_SELECTION']),

    $_showDetails_trigger({ resources }) {
      this.SET_FILE_SELECTION(resources)
      eventBus.publish(SideBarEventTopics.open)
    }
  }
}
