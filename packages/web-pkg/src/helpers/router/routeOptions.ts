import { isShareSpaceResource, Resource, SpaceResource } from 'web-client/src/helpers'
import { configurationManager, ConfigurationManager } from '../../configuration'
import { LocationParams, LocationQuery } from '../../composables'
import { isUndefined } from 'lodash-es'
import { Route } from 'vue-router'

/**
 * Creates route options for routing into a file location:
 * - params.driveAliasAndItem
 * - query.shareId
 * - query.fileId
 *
 * Both query options are optional.
 *
 * @param space {SpaceResource}
 * @param target {path: string, fileId: string | number}
 * @param options {configurationManager: ConfigurationManager}
 */
export const createFileRouteOptions = (
  space: SpaceResource,
  target: { path?: string; fileId?: string | number },
  options?: { configurationManager?: ConfigurationManager }
): { params: LocationParams; query: LocationQuery } => {
  const config = options?.configurationManager || configurationManager
  return {
    params: {
      driveAliasAndItem: space.getDriveAliasAndItem({ path: target.path || '' } as Resource)
    },
    query: {
      ...(isShareSpaceResource(space) && { shareId: space.shareId }),
      ...(config?.options?.routing?.idBased &&
        !isUndefined(target.fileId) && { fileId: `${target.fileId}` })
    }
  }
}

export const mergeFileRouteOptions = (
  originalRoute: Route,
  routeOptions: { params: LocationParams; query: LocationQuery }
): Route => {
  return Object.assign({}, originalRoute, {
    params: {
      ...originalRoute.params,
      ...routeOptions.params
    },
    query: {
      ...originalRoute.query,
      ...routeOptions.query
    }
  })
}
