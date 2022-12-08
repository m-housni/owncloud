import { Resource } from 'web-client'
import { join } from 'path'
import { SpaceResource } from 'web-client/src/helpers'
import { ClientService } from 'web-pkg/src/services'
import {
  ConflictDialog,
  ResolveStrategy,
  isResourceBeeingMovedToSameLocation,
  resolveFileNameDuplicate
} from '../conflictHandling'
import { TransferType } from '.'

export class ResourceTransfer extends ConflictDialog {
  constructor(
    private sourceSpace: SpaceResource,
    private resourcesToMove: Resource[],
    private targetSpace: SpaceResource,
    private targetFolder: Resource,
    private clientService: ClientService,
    createModal: (modal: object) => void,
    hideModal: () => void,
    showMessage: (data: object) => void,
    $gettext: (msg: string) => string,
    $ngettext: (msgid: string, plural: string, n: number) => string,
    $gettextInterpolate: (msg: string, context: object, disableHtmlEscaping?: boolean) => string
  ) {
    super(createModal, hideModal, showMessage, $gettext, $ngettext, $gettextInterpolate)
  }

  hasRecursion(): boolean {
    if (this.sourceSpace.id !== this.targetSpace.id) {
      return false
    }
    return this.resourcesToMove.some(
      (resource: Resource) => this.targetFolder.path === resource.path
    )
  }

  showRecursionErrorMessage() {
    const count = this.resourcesToMove.length
    const title = this.$ngettext(
      "You can't paste the selected file at this location because you can't paste an item into itself.",
      "You can't paste the selected files at this location because you can't paste an item into itself.",
      count
    )
    this.showMessage({ title, status: 'danger' })
  }

  showResultMessage(errors, movedResources: Array<Resource>, transferType: TransferType) {
    if (errors.length === 0) {
      const count = movedResources.length
      if (count === 0) {
        return
      }
      const ntitle =
        transferType === TransferType.COPY
          ? this.$ngettext(
              '%{count} item was copied successfully',
              '%{count} items were copied successfully',
              count
            )
          : this.$ngettext(
              '%{count} item was moved successfully',
              '%{count} items were moved successfully',
              count
            )
      const title = this.$gettextInterpolate(ntitle, { count }, true)
      this.showMessage({
        title,
        status: 'success'
      })
      return
    }
    let title = this.$gettextInterpolate(
      transferType === TransferType.COPY
        ? this.$gettext('Failed to copy %{count} resources')
        : this.$gettext('Failed to move %{count} resources'),
      { count: errors.length },
      true
    )
    if (errors.length === 1) {
      title = this.$gettextInterpolate(
        transferType === TransferType.COPY
          ? this.$gettext('Failed to copy "%{name}"')
          : this.$gettext('Failed to move "%{name}"'),
        { name: errors[0]?.resourceName },
        true
      )
    }
    this.showMessage({
      title,
      status: 'danger'
    })
  }

  async perform(transferType: TransferType): Promise<Resource[]> {
    if (this.hasRecursion()) {
      this.showRecursionErrorMessage()
      return []
    }
    if (this.sourceSpace.id !== this.targetSpace.id && transferType === TransferType.MOVE) {
      const doCopyInsteadOfMove = await this.resolveDoCopyInsteadOfMoveForSpaces()
      if (!doCopyInsteadOfMove) {
        return []
      }
      transferType = TransferType.COPY
    }

    const errors = []
    const targetFolderResources = (
      await this.clientService.webdav.listFiles(this.targetSpace, this.targetFolder)
    ).children

    const resolvedConflicts = await this.resolveAllConflicts(
      this.resourcesToMove,
      this.targetFolder,
      targetFolderResources
    )
    const movedResources: Resource[] = []

    for (let resource of this.resourcesToMove) {
      // shallow copy of resources to prevent modifying existing rows
      resource = { ...resource }
      const hasConflict = resolvedConflicts.some((e) => e.resource.id === resource.id)
      let targetName = resource.name
      let overwriteTarget = false
      if (hasConflict) {
        const resolveStrategy = resolvedConflicts.find(
          (e) => e.resource.id === resource.id
        )?.strategy
        if (resolveStrategy === ResolveStrategy.SKIP) {
          continue
        }
        if (resolveStrategy === ResolveStrategy.REPLACE) {
          overwriteTarget = true
        }
        if (resolveStrategy === ResolveStrategy.KEEP_BOTH) {
          targetName = resolveFileNameDuplicate(resource.name, resource.extension, [
            ...movedResources,
            ...targetFolderResources
          ])
          resource.name = targetName
        }
      }
      try {
        if (
          isResourceBeeingMovedToSameLocation(
            this.sourceSpace,
            resource,
            this.targetSpace,
            this.targetFolder
          ) &&
          overwriteTarget
        ) {
          continue
        }
        if (transferType === TransferType.COPY) {
          await this.clientService.webdav.copyFiles(
            this.sourceSpace,
            resource,
            this.targetSpace,
            { path: join(this.targetFolder.path, targetName) },
            { overwrite: overwriteTarget }
          )
          resource.id = undefined
          resource.fileId = undefined
        } else if (transferType === TransferType.MOVE) {
          await this.clientService.webdav.moveFiles(
            this.sourceSpace,
            resource,
            this.targetSpace,
            { path: join(this.targetFolder.path, targetName) },
            { overwrite: overwriteTarget }
          )
        }
        resource.path = join(this.targetFolder.path, resource.name)
        resource.webDavPath = join(this.targetFolder.webDavPath, resource.name)
        movedResources.push(resource)
      } catch (error) {
        console.error(error)
        error.resourceName = resource.name
        errors.push(error)
      }
    }
    this.showResultMessage(errors, movedResources, transferType)
    return movedResources
  }
}
