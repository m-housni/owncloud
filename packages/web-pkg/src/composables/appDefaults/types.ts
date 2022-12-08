import { MaybeRef } from '../../utils'
import { LocationParams, LocationQuery } from '../router'
import { SpaceResource } from 'web-client/src/helpers'
export interface FileContext {
  path: MaybeRef<string>
  driveAliasAndItem: MaybeRef<string>
  space: MaybeRef<SpaceResource>
  item: MaybeRef<string>
  itemId: MaybeRef<string>
  fileName: MaybeRef<string>
  routeName: MaybeRef<string>
  routeParams: MaybeRef<LocationParams>
  routeQuery: MaybeRef<LocationQuery>
}

export type AppConfigObject = Record<string, any>
