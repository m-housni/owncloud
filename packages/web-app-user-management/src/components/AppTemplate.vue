<template>
  <main class="oc-flex oc-height-1-1 app-content oc-width-1-1">
    <app-loading-spinner v-if="loading" />
    <template v-else>
      <div id="user-management-wrapper" class="oc-width-expand">
        <div id="user-management-app-bar" ref="appBar" class="oc-app-bar oc-py-s">
          <div class="oc-flex oc-flex-between">
            <oc-breadcrumb class="oc-flex oc-flex-middle" :items="breadcrumbs" />
            <div>
              <oc-button
                id="files-toggle-sidebar"
                v-oc-tooltip="toggleSidebarButtonLabel"
                :aria-label="toggleSidebarButtonLabel"
                appearance="raw"
                class="oc-my-s oc-p-xs"
                @click.stop="$emit('toggleSideBar')"
              >
                <oc-icon name="side-bar-right" :fill-type="toggleSidebarButtonIconFillType" />
              </oc-button>
            </div>
          </div>
          <slot name="topbarActions" class="oc-flex-1 oc-flex oc-flex-start" />
        </div>
        <slot name="mainContent" />
      </div>
      <side-bar
        v-if="sideBarOpen"
        :active-panel="sideBarActivePanel"
        :available-panels="sideBarAvailablePanels"
        :loading="false"
        :open="sideBarOpen"
        @selectPanel="(panel) => $emit('selectPanel', panel)"
        @close="$emit('closeSideBar')"
      >
      </side-bar>
    </template>
  </main>
</template>

<script lang="ts">
import AppLoadingSpinner from 'web-pkg/src/components/AppLoadingSpinner.vue'
import SideBar from 'web-pkg/src/components/sideBar/SideBar.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  components: {
    SideBar,
    AppLoadingSpinner
  },
  props: {
    loading: {
      required: true,
      type: Boolean
    },
    breadcrumbs: {
      required: true,
      type: Array
    },
    sideBarOpen: {
      required: true,
      type: Boolean
    },
    sideBarAvailablePanels: {
      required: true,
      type: Array
    },
    sideBarActivePanel: {
      required: true,
      type: String
    }
  },
  computed: {
    toggleSidebarButtonLabel() {
      return this.sideBarOpen
        ? this.$gettext('Close sidebar to hide details')
        : this.$gettext('Open sidebar to view details')
    },
    toggleSidebarButtonIconFillType() {
      return this.sideBarOpen ? 'fill' : 'line'
    }
  }
})
</script>

<style lang="scss">
#user-management-app-bar {
  background-color: var(--oc-color-background-default);
  border-top-right-radius: 15px;
  box-sizing: border-box;
  z-index: 2;
  position: sticky;
  padding: 0 var(--oc-space-medium);
  top: 0;
}

#files-toggle-sidebar {
  vertical-align: middle;
  border: 3px solid transparent;
  &:hover {
    background-color: var(--oc-color-background-hover);
    border-radius: 3px;
  }
}

.user-management-app-bar-actions {
  align-items: center;
  display: flex;
  min-height: 3rem;
}

#user-management-wrapper {
  overflow-y: auto;
}
</style>
