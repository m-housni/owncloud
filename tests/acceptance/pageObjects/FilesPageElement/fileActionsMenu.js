module.exports = {
  commands: {
    /**
     * @enum {string}
     * @readonly
     */
    FileAction: Object.freeze({
      acceptShare: 'acceptShare',
      download: 'download',
      declineShare: 'declineShare',
      delete: 'delete',
      favorite: 'favorite',
      unmarkFavorite: 'unmarkFavorite',
      restore: 'restore',
      rename: 'rename',
      move: 'move',
      copy: 'copy',
      preview: 'preview',
      textEditor: 'textEditor'
    }),

    /**
     * Action button selector
     *
     * @param {string} action
     * @returns {string}
     */
    getActionSelector: function (action) {
      const actionsAccordionSelector = this.elements.actionsAccordion.selector
      const actionSelector = this.elements[action + 'ButtonInAccordion'].selector

      return `${actionsAccordionSelector}${actionSelector}`
    },
    /**
     * perform one of the main file actions
     *
     * @param {string} action delete|share|rename|download

     * @throws Error
     * @returns {*}
     */
    performFileAction: async function (action) {
      this.initAjaxCounters()
      const fileActionBtnSelectorXpath = this.getActionSelector(action)
      await this.click('xpath', fileActionBtnSelectorXpath)
      return await this.waitForAjaxCallsToStartAndFinish()
    },
    /**
     * returns the disabled state of given action
     *
     * @param {string} action
     * @returns {Promise<boolean>}
     */
    getActionDisabledAttr: async function (action) {
      let disabledState
      const btnSelector = this.getActionSelector(action)
      await this.api.element('xpath', btnSelector, (result) => {
        // action is disabled when not visible in dropdown menu
        disabledState = result.status === -1
      })

      return disabledState
    },
    /**
     * deletes resource using fileActions 'delete' button
     * @returns {Promise<*>}
     */
    delete: async function () {
      await this.performFileAction(this.FileAction.delete)
      await this.api.page.FilesPageElement.filesList().confirmDeletion()
      return this
    },
    /**
     * @param {string} toName
     * @param {boolean} expectToSucceed
     * @return {*}
     */
    rename: async function (toName, expectToSucceed = true, fromContextMenu = false) {
      if (!fromContextMenu) {
        await this.performFileAction(this.FileAction.rename)
      }
      await this.useXpath()
        .waitForElementVisible('@dialog')
        .waitForAnimationToFinish() // wait for transition on the modal to finish
        .clearValue('@dialogInput')
        .setValue('@dialogInput', toName)
        .useCss()

      const timeout = expectToSucceed
        ? this.api.globals.waitForConditionTimeout
        : this.api.globals.waitForNegativeConditionTimeout
      await this.click(
        {
          selector: '@dialogConfirmBtnEnabled',
          suppressNotFoundErrors: !expectToSucceed
        },
        timeout
      )

      if (expectToSucceed) {
        await this.waitForElementNotPresent('@dialog')
      }

      return this
    },
    /**
     * mark as favorite resource using fileActions 'favorite' button
     * @returns {Promise<*>}
     */
    favorite: async function () {
      return await this.performFileAction(this.FileAction.favorite)
    },
    /**
     * unmark as favorite resource using fileActions 'favorite' button
     * @returns {Promise<*>}
     */
    unmarkFavorite: async function () {
      return await this.performFileAction(this.FileAction.unmarkFavorite)
    },
    /**
     * @return {Promise<module.exports.commands>}
     */
    restore: async function () {
      return await this.performFileAction(this.FileAction.restore)
    },
    /**
     * @return {Promise<module.exports.commands>}
     */
    download: async function () {
      return await this.performFileAction(this.FileAction.download)
    },
    /**
     * @return {Promise<module.exports.commands>}
     */
    deleteResourceImmediately: async function () {
      await this.performFileAction(this.FileAction.delete)
      await this.api.page.FilesPageElement.filesList().confirmDeletion()

      return this
    },
    /**
     * Trigger the move of a resource via its file action
     */
    move: async function () {
      return await this.performFileAction(this.FileAction.move)
    },
    /**
     * Trigger the copy of a resource via its file action
     */
    copy: async function () {
      return await this.performFileAction(this.FileAction.copy)
    },
    /**
     * Trigger accepting a share
     */
    acceptShare: function () {
      return this.performFileAction(this.FileAction.acceptShare)
    },
    /**
     * Trigger declining a share
     */
    declineShare: function () {
      return this.performFileAction(this.FileAction.declineShare)
    },
    /**
     * Open a resource in the preview via its file action
     */
    preview: function () {
      return this.performFileAction(this.FileAction.preview)
    },
    /**
     * Open a resource in the text editor via its file action
     */
    textEditor: function () {
      return this.performFileAction(this.FileAction.textEditor)
    }
  },
  elements: {
    sharingSideBar: {
      selector: '#oc-files-sharing-sidebar'
    },
    actionsAccordion: {
      selector: '//ul[@id="oc-files-actions-sidebar"]/li',
      locateStrategy: 'xpath'
    },
    // covers oc-files-actions-delete-permanent-trigger and oc-files-actions-delete-trigger
    deleteButtonInAccordion: {
      selector: '//button[contains(@class, "oc-files-actions-delete-")]',
      locateStrategy: 'xpath'
    },
    downloadButtonInAccordion: {
      selector: '//button[contains(@class, "oc-files-actions-download-file-trigger")]',
      locateStrategy: 'xpath'
    },
    favoriteButtonInAccordion: {
      selector: '//button[normalize-space()="Add to favorites"]',
      locateStrategy: 'xpath'
    },
    unmarkFavoriteButtonInAccordion: {
      selector: '//button[normalize-space()="Remove from favorites"]',
      locateStrategy: 'xpath'
    },
    restoreButtonInAccordion: {
      selector: '//button[contains(@class, "oc-files-actions-restore-trigger")]',
      locateStrategy: 'xpath'
    },
    renameButtonInAccordion: {
      selector: '//button[contains(@class, "oc-files-actions-rename-trigger")]',
      locateStrategy: 'xpath'
    },
    // TODO: Merge with selectors in personalPage
    dialog: {
      selector: '.oc-modal'
    },
    dialogConfirmBtnEnabled: {
      selector: '.oc-modal-body-actions-confirm:enabled'
    },
    dialogInput: {
      selector: '.oc-modal-body-input .oc-text-input'
    },
    moveButtonInAccordion: {
      selector: '//button[contains(@class, "oc-files-actions-move-trigger")]',
      locateStrategy: 'xpath'
    },
    copyButtonInAccordion: {
      selector: '//button[contains(@class, "oc-files-actions-copy-trigger")]',
      locateStrategy: 'xpath'
    },
    acceptShareButtonInAccordion: {
      selector: '//button[contains(@class, "oc-files-actions-accept-share-trigger")]',
      locateStrategy: 'xpath'
    },
    declineShareButtonInAccordion: {
      selector: '//button[contains(@class, "oc-files-actions-decline-share-trigger")]',
      locateStrategy: 'xpath'
    },
    previewButtonInAccordion: {
      selector: '//button[normalize-space()="Preview"]',
      locateStrategy: 'xpath'
    },
    textEditorButtonInAccordion: {
      selector: '//button[normalize-space()="Open in Text Editor"]',
      locateStrategy: 'xpath'
    }
  }
}
