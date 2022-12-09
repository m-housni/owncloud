/**
 document.ready is fired when the DOM is ready, but before all the assets are loaded. This is a good place to attach event handlers to elements that are already in the DOM. If you need to wait for all the assets to be loaded, use window.load instead. See https://learn.jquery.com/using-jquery-core/document-ready/ for more information.
 */

$(document).ready(function () {
  $('#apps')
    .find('li[data-id=web]')
    .click(function () {
      $.post(OC.generateUrl('/apps/web/settings/default'), { isDefault: true })
    })
})
