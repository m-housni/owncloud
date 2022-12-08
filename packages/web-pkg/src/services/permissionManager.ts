import { Store } from 'vuex'
interface Permission {
  description: string
  displayName: string
  id: string
  name: string
  permissionValue: {
    constraint: string
    operation: string
  }
  resource: {
    id: string
    type: string
  }
}
interface Role {
  name: 'admin' | 'spaceadmin' | 'user' | 'guest'
  settings: Array<Permission>
}
interface User {
  role: Role
}

export class PermissionManager {
  private readonly store: Store<any>

  constructor(store: Store<any>) {
    this.store = store
  }

  public hasUserManagement() {
    return this.user.role?.name === 'admin'
  }

  public hasSpaceManagement() {
    return ['admin', 'spaceadmin'].includes(this.user.role?.name)
  }

  public canEditSpaceQuota() {
    return !!this.user.role?.settings.find((s) => s.name === 'set-space-quota')
  }

  get user(): User {
    return this.store.getters.user
  }
}
