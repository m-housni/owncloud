import { Page } from 'playwright'
import { startCase, difference } from 'lodash'
import util from 'util'
import { Group, User } from '../../../types'

export interface ICollaborator {
  collaborator: User | Group
  role: string
  type?: CollaboratorType
}

export interface InviteCollaboratorsArgs {
  page: Page
  collaborators: ICollaborator[]
}

export interface CollaboratorArgs {
  page: Page
  collaborator: ICollaborator
}

export interface RemoveCollaboratorArgs extends Omit<CollaboratorArgs, 'collaborator'> {
  collaborator: Omit<ICollaborator, 'role'>
  removeOwnSpaceAccess?: boolean
}

export type CollaboratorType = 'user' | 'group'
export type CustomPermissionType = 'read' | 'update' | 'create' | 'delete' | 'share'

export default class Collaborator {
  private static readonly invitePanel = '//*[@id="oc-files-sharing-sidebar"]'
  private static readonly inviteInput = '#files-share-invite-input'
  private static readonly newCollaboratorRoleDropdown =
    '//*[@id="files-collaborators-role-button-new"]'
  private static readonly newCollaboratorRoleItemSelector = '//*[@id="files-role-%s"]'
  private static readonly sendInvitationButton = '#new-collaborators-form-create-button'
  private static readonly collaboratorRoleDropdownButton =
    '%s//button[contains(@class,"files-recipient-role-select-btn")]'
  private static readonly collaboratorRoleItemSelector =
    '%s//ul[contains(@class,"files-recipient-role-drop-list")]//button[@id="files-recipient-role-drop-btn-%s"]'
  private static readonly collaboratorEditDropdownButton =
    '%s//button[contains(@class,"collaborator-edit-dropdown-options-btn")]'
  private static readonly collaboratorUserSelector = '//*[@data-testid="collaborator-user-item-%s"]'
  private static readonly collaboratorGroupSelector =
    '//*[@data-testid="collaborator-group-item-%s" or @data-testid="collaborator-group-item-%s"]'
  private static readonly collaboratorRoleSelector =
    '%s//button[contains(@class,"files-recipient-role-select-btn")]/span[text()="%s"]'
  private static readonly removeCollaboratorButton =
    '%s//ul[contains(@class,"collaborator-edit-dropdown-options-list")]//button[contains(@class,"remove-share")]'
  private static readonly removeCollaboratorConfirmationButton = '.oc-modal-body-actions-confirm'
  private static readonly customPermissionCheckbox = '//*[@id="files-collaborators-permission-%s"]'
  private static readonly customPermissionApplyButton =
    '//*[contains(@class, "files-recipient-custom-permissions-drop-cancel-confirm-btns")]//button[text()="Apply"]'

  static CUSTOM_PERMISSIONS: readonly CustomPermissionType[] = [
    'read',
    'update',
    'create',
    'delete',
    'share'
  ]

  static async addCollaborator(args: CollaboratorArgs): Promise<void> {
    const {
      page,
      collaborator: { collaborator }
    } = args
    const collaboratorInputLocator = page.locator(Collaborator.inviteInput)
    await collaboratorInputLocator.click()
    await Promise.all([
      page.waitForResponse((resp) => resp.url().includes('sharees') && resp.status() === 200),
      collaboratorInputLocator.fill(collaborator.id)
    ])
    await collaboratorInputLocator.focus()
    await page.waitForSelector('.vs--open')
    await page.locator('.vs__dropdown-option').click()
  }

  static async sendInvitation(page: Page): Promise<void> {
    await Promise.all([
      page.waitForResponse(
        (resp) =>
          resp.url().endsWith('shares') &&
          resp.status() === 200 &&
          resp.request().method() === 'POST'
      ),
      page.locator(Collaborator.sendInvitationButton).click()
    ])
  }

  static async inviteCollaborators(args: InviteCollaboratorsArgs): Promise<void> {
    const { page, collaborators } = args
    // When adding multiple users/groups at once
    // the role of the first collaborator is used as the collaborators role
    const role = collaborators[0].role

    for (const collaborator of collaborators) {
      await Collaborator.addCollaborator({ page, collaborator })
    }
    await Collaborator.setCollaboratorRole(page, role)
    await Collaborator.sendInvitation(page)
  }

  static async setCustomPermissions(
    page: Page,
    permissions: CustomPermissionType[]
  ): Promise<void> {
    for (const permission of permissions) {
      if (!Collaborator.CUSTOM_PERMISSIONS.includes(permission)) {
        throw new Error(
          'Invalid custom permission: ' +
            permission +
            '\nAvailable permissions: ' +
            Collaborator.CUSTOM_PERMISSIONS
        )
      }
      await page.check(util.format(Collaborator.customPermissionCheckbox, permission))
    }
    // uncheck others
    const removePermissions = difference(Collaborator.CUSTOM_PERMISSIONS, permissions)
    for (const permission of removePermissions) {
      await page.uncheck(util.format(Collaborator.customPermissionCheckbox, permission))
    }
  }

  static async setCollaboratorRole(
    page: Page,
    role: string,
    dropdownSelector?: string,
    itemSelector?: string
  ): Promise<void> {
    if (!dropdownSelector) {
      dropdownSelector = Collaborator.newCollaboratorRoleDropdown
      itemSelector = Collaborator.newCollaboratorRoleItemSelector
    }
    await page.click(dropdownSelector)

    // custom permissions should be set as below
    // custom_permissions:read,share
    if (role.includes('custom_permissions')) {
      await page.click(util.format(itemSelector, 'custom'))
      const custom_permissions = role.split(':')[1]

      if (!custom_permissions) {
        throw new Error('No custom permissions provided: ' + custom_permissions)
      }

      const permissions = custom_permissions.split(',')
      await Collaborator.setCustomPermissions(page, permissions as CustomPermissionType[])

      return await page.click(Collaborator.customPermissionApplyButton)
    }
    return await page.click(util.format(itemSelector, role))
  }

  static async changeCollaboratorRole(args: CollaboratorArgs): Promise<void> {
    const {
      page,
      collaborator: { collaborator, type, role }
    } = args

    const collaboratorRow = Collaborator.getCollaboratorUserOrGroupSelector(collaborator, type)
    const roleDropdownSelector = util.format(
      Collaborator.collaboratorRoleDropdownButton,
      collaboratorRow
    )
    const roleItemSelector = util.format(Collaborator.collaboratorRoleItemSelector, collaboratorRow)
    await Collaborator.setCollaboratorRole(page, role, roleDropdownSelector, roleItemSelector)
  }

  static async removeCollaborator(args: RemoveCollaboratorArgs): Promise<void> {
    const {
      page,
      collaborator: { collaborator, type },
      removeOwnSpaceAccess
    } = args
    const collaboratorRow = Collaborator.getCollaboratorUserOrGroupSelector(collaborator, type)

    await Promise.all([
      page.waitForResponse(
        (resp) =>
          resp.url().includes('shares') &&
          resp.status() === 200 &&
          resp.request().method() === 'DELETE'
      ),
      page
        .locator(util.format(Collaborator.collaboratorEditDropdownButton, collaboratorRow))
        .click(),
      page.locator(util.format(Collaborator.removeCollaboratorButton, collaboratorRow)).click(),
      page.locator(Collaborator.removeCollaboratorConfirmationButton).click()
    ])
    if (removeOwnSpaceAccess) {
      await page.waitForNavigation()
    }
  }

  static async checkCollaborator(args: CollaboratorArgs): Promise<void> {
    const {
      page,
      collaborator: { collaborator, type, role }
    } = args
    const collaboratorRow = Collaborator.getCollaboratorUserOrGroupSelector(collaborator, type)

    await page.locator(collaboratorRow).waitFor()

    if (role) {
      const parts = role.split(' ')
      const collaboratorRole =
        startCase(parts[0].toLowerCase()) + (parts[1] ? ` ${parts[1].toLowerCase()}` : '')
      const roleSelector = util.format(
        Collaborator.collaboratorRoleSelector,
        collaboratorRow,
        collaboratorRole
      )
      await page.locator(roleSelector).waitFor()
    }
  }

  static waitForInvitePanel(page: Page): Promise<void> {
    return page.locator(Collaborator.invitePanel).waitFor()
  }

  static getCollaboratorUserOrGroupSelector = (collaborator: User | Group, type = 'user') => {
    return type === 'group'
      ? util.format(
          Collaborator.collaboratorGroupSelector,
          collaborator.displayName,
          collaborator.id
        )
      : util.format(Collaborator.collaboratorUserSelector, collaborator.id)
  }
}
