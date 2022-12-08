import { Store } from 'vuex'

export const getWebVersion = (): string => {
  const version = process.env.PACKAGE_VERSION
  return `ownCloud Web UI ${version}`
}

export const getBackendVersion = ({ store }: { store: Store<unknown> }): string => {
  const backendStatus = store.getters.capabilities?.core?.status
  if (!backendStatus || !backendStatus.versionstring) {
    return undefined
  }
  const product = backendStatus.product || 'ownCloud'
  const version = backendStatus.productversion || backendStatus.versionstring
  const edition = backendStatus.edition
  return `${product} ${version} ${edition}`
}
