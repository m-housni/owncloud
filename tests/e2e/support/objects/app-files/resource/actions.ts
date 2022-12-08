import { Download, Page } from 'playwright'
import { expect } from '@playwright/test'
import util from 'util'
import { resourceExists, waitForResources } from './utils'
import path from 'path'
import { File } from '../../../types'
import { sidebar } from '../utils'

const downloadButtonSideBar = '#oc-files-actions-sidebar .oc-files-actions-download-file-trigger'
const downloadButtonBatchActionSingleFile = '.oc-files-actions-download-file-trigger'
const downloadButtonBatchActionMultiple = '.oc-files-actions-download-archive-trigger'
const checkBox = `//*[@data-test-resource-name="%s"]//ancestor::tr//input`
const checkBoxForTrashbin = `//*[@data-test-resource-path="%s"]//ancestor::tr//input`
const fileRow = '//ancestor::tr'
const resourceNameSelector = `[data-test-resource-name="%s"]`
const addNewResourceButton = `#new-file-menu-btn`
const createNewFolderButton = '#new-folder-btn'
const createNewTxtFileButton = '.new-file-btn-txt'
const createNewMdFileButton = '.new-file-btn-md'
const createNewDrawioFileButton = '.new-file-btn-drawio'
const saveTextFileInEditorButton = '#text-editor-controls-save:visible'
const closeTextEditorOrViewerButton = '#app-top-bar-close'
const textEditorInput = '#text-editor-input'
const resourceNameInput = '.oc-modal input'
const resourceUploadButton = '#upload-menu-btn'
const fileUploadInput = '#files-file-upload-input'
const uploadInfoCloseButton = '#close-upload-info-btn'
const filesAction = `.oc-files-actions-%s-trigger`
const clipboardBtns = '#clipboard-btns'
const breadcrumbRoot = '//nav[contains(@class, "oc-breadcrumb")]/ol/li[1]/a'
const fileRenameInput = '.oc-text-input'
const deleteButtonSidebar = '#oc-files-actions-sidebar .oc-files-actions-delete-trigger'
const actionConfirmationButton =
  '//button[contains(@class,"oc-modal-body-actions-confirm") and text()="%s"]'
const actionSkipButton = '.oc-modal-body-actions-cancel'
const actionSecondaryConfirmationButton = '.oc-modal-body-actions-secondary'
const versionRevertButton = '//*[@data-testid="file-versions-revert-button"]'
const emptyTrashBinButton = '.oc-files-actions-empty-trash-bin-trigger'
const notificationMessageDialog = '.oc-notification-message-title'
const permanentDeleteButton = '.oc-files-actions-delete-permanent-trigger'
const restoreResourceButton = '.oc-files-actions-restore-trigger'
const globalSearchInput = '.oc-search-input'
const searchList =
  '//div[@id="files-global-search-options"]//li[contains(@class,"preview")]//span[@class="oc-resource-name"]'
const globalSearchOptions = '#files-global-search-options'
const loadingSpinner = '#files-global-search-options .loading'
const filesViewOptionButton = '#files-view-options-btn'
const hiddenFilesToggleButton = '//*[@data-testid="files-switch-hidden-files"]//button'
const previewImage = '//main[@id="preview"]//div[contains(@class,"preview-player")]//img'
const drawioSaveButton = '.geBigButton >> text=Save'
const drawioIframe = '#drawio-editor'

export const clickResource = async ({
  page,
  path
}: {
  page: Page
  path: string
}): Promise<void> => {
  const paths = path.split('/')
  for (const name of paths) {
    const resource = await page.locator(util.format(resourceNameSelector, name))
    const itemId = await resource.locator(fileRow).getAttribute('data-item-id')
    await Promise.all([
      resource.click(),
      page.waitForResponse(
        (resp) => resp.url().endsWith(encodeURIComponent(name)) || resp.url().endsWith(itemId)
      )
    ])

    // toDo: remove me
    // @jannik: please have a look here what we can wait for to be sure that it's there
    await new Promise((resolve) => setTimeout(resolve, 250))
  }
}

/**/

export interface createResourceArgs {
  page: Page
  name: string
  type: 'folder' | 'txtFile' | 'mdFile' | 'drawioFile'
  content?: string
}

export const createNewFolder = async ({
  page,
  resource
}: {
  page: Page
  resource: string
}): Promise<void> => {
  await page.locator(createNewFolderButton).click()
  await page.locator(resourceNameInput).fill(resource)
  await Promise.all([
    page.waitForResponse((resp) => resp.status() === 207 && resp.request().method() === 'PROPFIND'),
    page.locator(util.format(actionConfirmationButton, 'Create')).click()
  ])
}

export const createNewFileOrFolder = async (args: createResourceArgs): Promise<void> => {
  const { page, name, type, content } = args
  await page.locator(addNewResourceButton).click()
  switch (type) {
    case 'folder': {
      await createNewFolder({ page, resource: name })
      break
    }
    case 'txtFile': {
      await page.locator(createNewTxtFileButton).click()
      await page.locator(resourceNameInput).fill(name)
      await Promise.all([
        page.waitForResponse((resp) => resp.status() === 201 && resp.request().method() === 'PUT'),
        page.locator(util.format(actionConfirmationButton, 'Create')).click()
      ])
      await editTextDocument({ page, content })
      break
    }
    case 'mdFile': {
      await page.locator(createNewMdFileButton).click()
      await page.locator(resourceNameInput).fill(name)
      await Promise.all([
        page.waitForResponse((resp) => resp.status() === 201 && resp.request().method() === 'PUT'),
        page.locator(util.format(actionConfirmationButton, 'Create')).click()
      ])
      await editTextDocument({ page, content })
      break
    }
    case 'drawioFile': {
      await page.locator(createNewDrawioFileButton).click()
      await page.locator(resourceNameInput).fill(name)

      const [drawioTab] = await Promise.all([
        page.waitForEvent('popup'),
        page.waitForResponse((resp) => resp.status() === 201 && resp.request().method() === 'PUT'),
        page.locator(util.format(actionConfirmationButton, 'Create')).click()
      ])
      await drawioTab.waitForLoadState()
      await drawioTab.frameLocator(drawioIframe).locator(drawioSaveButton).click()
      await drawioTab.waitForURL('**/draw-io/personal/**')
      await drawioTab.close()
      break
    }
  }
}

export const createResources = async (args: createResourceArgs): Promise<void> => {
  const { page, name, type, content } = args
  const paths = name.split('/')
  const resource = paths.pop()

  for (const path of paths) {
    const resourcesExists = await resourceExists({
      page: page,
      name: path
    })

    if (!resourcesExists) {
      await page.locator(addNewResourceButton).click()
      await createNewFolder({ page, resource: path })
    }
    await clickResource({ page, path })
  }
  await createNewFileOrFolder({ page, name: resource, type, content })
}

export const editTextDocument = async ({
  page,
  content
}: {
  page: Page
  content: string
}): Promise<void> => {
  await Promise.all([
    page.waitForResponse((resp) => resp.status() === 204 && resp.request().method() === 'PUT'),
    page.locator(textEditorInput).fill(content),
    page.locator(saveTextFileInEditorButton).click()
  ])

  await Promise.all([page.waitForNavigation(), page.locator(closeTextEditorOrViewerButton).click()])
}

/**/

export interface uploadResourceArgs {
  page: Page
  resources: File[]
  to?: string
  option?: string
}

export const uploadResource = async (args: uploadResourceArgs): Promise<void> => {
  const { page, resources, to, option } = args
  if (to) {
    await clickResource({ page, path: to })
  }

  await page.locator(resourceUploadButton).click()
  await page.locator(fileUploadInput).setInputFiles(resources.map((file) => file.path))

  if (option) {
    switch (option) {
      case 'skip': {
        await page.locator(actionSkipButton).click()
        break
      }
      case 'merge':
      case 'replace': {
        await page.locator(actionSecondaryConfirmationButton).click()
        await page.locator(uploadInfoCloseButton).click()

        await waitForResources({
          page: page,
          names: resources.map((file) => path.basename(file.name))
        })
        break
      }
      case 'keep both': {
        await page.locator(util.format(actionConfirmationButton, 'Keep both')).click()
        await page.locator(uploadInfoCloseButton).click()

        await waitForResources({
          page: page,
          names: resources.map((file) => path.basename(file.name))
        })
        break
      }
    }
  } else {
    await page.locator(uploadInfoCloseButton).click()

    await waitForResources({
      page: page,
      names: resources.map((file) => path.basename(file.name))
    })
  }
}

/**/

export interface downloadResourcesArgs {
  page: Page
  names: string[]
  folder?: string
  via: 'SIDEBAR_PANEL' | 'BATCH_ACTION'
}

export const downloadResources = async (args: downloadResourcesArgs): Promise<Download[]> => {
  const { page, names, folder, via } = args
  const downloads = []

  switch (via) {
    case 'SIDEBAR_PANEL': {
      if (folder) {
        await clickResource({ page, path: folder })
      }
      for (const name of names) {
        await sidebar.open({ page, resource: name })
        await sidebar.openPanel({ page, name: 'actions' })

        const [download] = await Promise.all([
          page.waitForEvent('download'),
          page.locator(downloadButtonSideBar).click()
        ])

        await sidebar.close({ page })

        downloads.push(download)
      }
      break
    }

    case 'BATCH_ACTION': {
      await selectOrDeselectResources({ page, names, folder, select: true })
      let downloadSelector = downloadButtonBatchActionMultiple
      if (names.length === 1) {
        downloadSelector = downloadButtonBatchActionSingleFile
      }
      const [download] = await Promise.all([
        page.waitForEvent('download'),
        page.locator(downloadSelector).click()
      ])
      downloads.push(download)
      break
    }
  }

  return downloads
}

export type selectResourcesArgs = {
  page: Page
  names: string[]
  folder?: string
  select: boolean
}

export const selectOrDeselectResources = async (args: selectResourcesArgs): Promise<void> => {
  const { page, folder, names, select } = args
  if (folder) {
    await clickResource({ page, path: folder })
  }

  for (const resource of names) {
    const exists = await resourceExists({
      page,
      name: resource
    })
    if (exists) {
      const resourceCheckbox = page.locator(util.format(checkBox, resource))

      if (!(await resourceCheckbox.isChecked()) && select) {
        await resourceCheckbox.check()
      } else if (await resourceCheckbox.isChecked()) {
        await resourceCheckbox.uncheck()
      }
    } else {
      throw new Error(`The resource ${resource} you are trying to select does not exist`)
    }
  }
}

/**/

export interface moveOrCopyResourceArgs {
  page: Page
  resource: string
  newLocation: string
  action: 'copy' | 'move'
}

export const moveOrCopyResource = async (args: moveOrCopyResourceArgs): Promise<void> => {
  const { page, resource, newLocation, action } = args
  const { dir: resourceDir, base: resourceBase } = path.parse(resource)

  if (resourceDir) {
    await clickResource({ page, path: resourceDir })
  }

  await page.locator(util.format(resourceNameSelector, resourceBase)).click({ button: 'right' })
  await page.locator(util.format(filesAction, action)).first().click()
  await page.locator(breadcrumbRoot).click()

  if (newLocation !== 'Personal') {
    await clickResource({ page, path: newLocation })
  }

  await page.locator(clipboardBtns).first().click()

  await waitForResources({
    page,
    names: [resourceBase]
  })
}

/**/

export interface renameResourceArgs {
  page: Page
  resource: string
  newName: string
}

export const renameResource = async (args: renameResourceArgs): Promise<void> => {
  const { page, resource, newName } = args
  const { dir: resourceDir, base: resourceBase } = path.parse(resource)

  if (resourceDir) {
    await clickResource({ page, path: resourceDir })
  }

  await page.locator(util.format(resourceNameSelector, resourceBase)).click({ button: 'right' })
  await page.locator(util.format(filesAction, 'rename')).click()
  await page.locator(fileRenameInput).fill(newName)
  await Promise.all([
    page.waitForResponse(
      (resp) =>
        resp.url().endsWith(resourceBase) &&
        resp.status() === 201 &&
        resp.request().method() === 'MOVE'
    ),
    page.locator(util.format(actionConfirmationButton, 'Rename')).click()
  ])

  await waitForResources({
    page,
    names: [newName]
  })
}

/**/

export interface restoreResourceVersionArgs {
  page: Page
  files: File[]
  folder?: string
}

export const restoreResourceVersion = async (args: restoreResourceVersionArgs) => {
  const { page, files, folder } = args
  const fileName = files.map((file) => path.basename(file.name))
  await clickResource({ page, path: folder })
  await sidebar.open({ page, resource: fileName[0] })
  await sidebar.openPanel({ page, name: 'versions' })

  await Promise.all([
    page.waitForResponse(
      (resp) =>
        resp.url().includes('/v/') && resp.status() === 204 && resp.request().method() === 'COPY'
    ),
    await page.locator(versionRevertButton).click()
  ])
}

/**/

export interface deleteResourceArgs {
  page: Page
  resource: string
}

export const deleteResource = async (args: deleteResourceArgs): Promise<void> => {
  const { page, resource } = args
  const folderPaths = resource.split('/')
  const resourceName = folderPaths.pop()

  if (folderPaths.length) {
    await clickResource({ page, path: folderPaths.join('/') })
  }

  await sidebar.open({ page, resource: resourceName })
  await sidebar.openPanel({ page, name: 'actions' })

  await page.locator(deleteButtonSidebar).first().click()
  await Promise.all([
    page.waitForResponse(
      (resp) =>
        resp.url().includes(encodeURIComponent(resourceName)) &&
        resp.status() === 204 &&
        resp.request().method() === 'DELETE'
    ),
    page.locator(util.format(actionConfirmationButton, 'Delete')).click()
  ])
  await sidebar.close({ page })
}

export interface downloadResourceVersionArgs {
  page: Page
  files: File[]
  folder?: string
}

export const downloadResourceVersion = async (
  args: downloadResourceVersionArgs
): Promise<Download[]> => {
  const { page, files, folder } = args
  const fileName = files.map((file) => path.basename(file.name))
  const downloads = []
  await clickResource({ page, path: folder })
  await sidebar.open({ page, resource: fileName[0] })
  await sidebar.openPanel({ page, name: 'versions' })
  const [download] = await Promise.all([
    page.waitForResponse(
      (resp) =>
        resp.url().includes('/v/') && resp.status() === 200 && resp.request().method() === 'HEAD'
    ),
    page.waitForEvent('download'),
    await page.locator('//*[@data-testid="file-versions-download-button"]').first().click()
  ])
  await sidebar.close({ page: page })
  downloads.push(download)
  return downloads
}

export const emptyTrashBinResources = async (page): Promise<string> => {
  await page.locator(emptyTrashBinButton).click()
  const statuses = [204, 403]
  await Promise.all([
    page.waitForResponse(
      (resp) => statuses.includes(resp.status()) && resp.request().method() === 'DELETE'
    ),
    page.locator(util.format(actionConfirmationButton, 'Delete')).click()
  ])
  const message = await page.locator(notificationMessageDialog).textContent()
  return message.trim().toLowerCase()
}

export const deleteResourceTrashbin = async (args: deleteResourceArgs): Promise<string> => {
  const { page, resource } = args
  const resourceCheckbox = page.locator(
    util.format(checkBoxForTrashbin, `/${resource.replace(/^\/+/, '')}`)
  )
  await new Promise((resolve) => setTimeout(resolve, 5000))
  if (!(await resourceCheckbox.isChecked())) {
    await resourceCheckbox.check()
  }
  const statuses = [204, 403]
  await page.locator(permanentDeleteButton).first().click()
  await Promise.all([
    page.waitForResponse(
      (resp) => statuses.includes(resp.status()) && resp.request().method() === 'DELETE'
    ),
    page.locator(util.format(actionConfirmationButton, 'Delete')).click()
  ])
  const message = await page.locator(notificationMessageDialog).textContent()
  return message.trim().toLowerCase()
}

export const getDeleteResourceButtonVisibility = async (
  args: deleteResourceArgs
): Promise<boolean> => {
  const { page, resource } = args
  const resourceCheckbox = page.locator(
    util.format(checkBoxForTrashbin, `/${resource.replace(/^\/+/, '')}`)
  )
  if (!(await resourceCheckbox.isChecked())) {
    await resourceCheckbox.check()
  }
  return await page.locator(permanentDeleteButton).isVisible()
}

export interface restoreResourceTrashbinArgs {
  resource: string
  page: Page
}

export const restoreResourceTrashbin = async (
  args: restoreResourceTrashbinArgs
): Promise<string> => {
  const { page, resource } = args
  const resourceCheckbox = page.locator(
    util.format(checkBoxForTrashbin, `/${resource.replace(/^\/+/, '')}`)
  )
  if (!(await resourceCheckbox.isChecked())) {
    await resourceCheckbox.check()
  }
  const statuses = [201, 403]
  await Promise.all([
    page.waitForResponse(
      (resp) => statuses.includes(resp.status()) && resp.request().method() === 'MOVE'
    ),
    await page.locator(restoreResourceButton).click()
  ])

  const message = await page.locator(notificationMessageDialog).textContent()
  return message.trim().toLowerCase()
}

export const getRestoreResourceButtonVisibility = async (
  args: restoreResourceTrashbinArgs
): Promise<boolean> => {
  const { page, resource } = args
  const resourceCheckbox = page.locator(
    util.format(checkBoxForTrashbin, `/${resource.replace(/^\/+/, '')}`)
  )
  if (!(await resourceCheckbox.isChecked())) {
    await resourceCheckbox.check()
  }
  return await page.locator(restoreResourceButton).isVisible()
}

export interface searchResourceGlobalSearchArgs {
  keyword: string
  page: Page
}

export const searchResourceGlobalSearch = async (
  args: searchResourceGlobalSearchArgs
): Promise<void> => {
  const { page, keyword } = args

  // .reload() waits nicely for search indexing to be finished
  await page.reload()

  await Promise.all([
    page.waitForResponse((resp) => resp.status() === 207 && resp.request().method() === 'REPORT'),
    page.locator(globalSearchInput).fill(keyword)
  ])
  await expect(page.locator(globalSearchOptions)).toBeVisible()
  await expect(page.locator(loadingSpinner)).not.toBeVisible()
}

export const getDisplayedResourcesFromSearch = async (page): Promise<string[]> => {
  const result = await page.locator(searchList).allInnerTexts()
  // the result has values like `test\n.txt` so remove new line
  return result.map((result) => result.replace('\n', ''))
}

export const showHiddenResources = async (page): Promise<void> => {
  await page.locator(filesViewOptionButton).click()
  await page.locator(hiddenFilesToggleButton).click()
}

export interface editResourcesArgs {
  page: Page
  name: string
  content: string
}

export const editResources = async (args: editResourcesArgs): Promise<void> => {
  const { page, name, content } = args
  await page.locator(util.format(resourceNameSelector, name)).click()
  await editTextDocument({ page, content: content })
}

export interface openFileInViewerArgs {
  page: Page
  name: string
  actionType: 'mediaviewer' | 'pdfviewer'
}

export const openFileInViewer = async (args: openFileInViewerArgs): Promise<void> => {
  const { page, name, actionType } = args

  if (actionType === 'mediaviewer') {
    await Promise.all([
      page.waitForResponse(
        (resp) =>
          resp.url().includes('preview') &&
          resp.status() === 200 &&
          resp.request().method() === 'GET'
      ),
      page.locator(util.format(resourceNameSelector, name)).click()
    ])

    // in case of error <img> doesn't contain src="blob:https://url"
    expect(await page.locator(previewImage).getAttribute('src')).toContain('blob')
  } else {
    await Promise.all([
      page.waitForResponse(
        (resp) => resp.status() === 207 && resp.request().method() === 'PROPFIND'
      ),
      page.locator(util.format(resourceNameSelector, name)).click()
    ])
  }

  await Promise.all([page.waitForNavigation(), page.locator(closeTextEditorOrViewerButton).click()])
}
