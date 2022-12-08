import { unref } from 'vue'
import VueRouter, { Location } from 'vue-router'

import { MaybeRef } from '../../utils'
import { FileContext } from './types'
import { LocationQuery, LocationParams } from '../router'
import { Resource } from 'web-client'
import { useFileRouteReplace } from '../router/useFileRouteReplace'

interface AppNavigationOptions {
  router: VueRouter
  currentFileContext: MaybeRef<FileContext>
}

export interface AppNavigationResult {
  closeApp(): void
  replaceInvalidFileRoute(context: MaybeRef<FileContext>, resource: Resource): void
}

export const contextRouteNameKey = 'contextRouteName'
const contextRouteParamsKey = 'contextRouteParams'
const contextRouteQueryKey = 'contextRouteQuery'

/*
  vue-router type bindings do not allow nested objects
  because they are not handled by default. We override
  parseQuery and stringifyQuery and handle it there.
  That's why we have types that match the router types
  and break them here once on purpose in encapsulated
  functions
*/
export const routeToContextQuery = (location: Location): LocationQuery => {
  const { params, query } = location

  const contextQuery = {}
  const contextQueryItems = ['fileId', 'shareId'].concat(
    (location as any).meta?.contextQueryItems || []
  ) as string[]
  for (const queryItem of contextQueryItems) {
    contextQuery[queryItem] = query[queryItem]
  }

  return {
    [contextRouteNameKey]: location.name,
    [contextRouteParamsKey]: params,
    [contextRouteQueryKey]: contextQuery
  } as any
}
export const contextQueryToFileContextProps = (
  query: LocationQuery
): { routeName: string; routeParams: LocationParams; routeQuery: LocationQuery } => {
  return {
    routeName: queryItemAsString(query[contextRouteNameKey]),
    routeParams: query[contextRouteParamsKey] as any,
    routeQuery: query[contextRouteQueryKey] as any
  }
}

export const queryItemAsString = (queryItem: string | string[]) => {
  if (Array.isArray(queryItem)) {
    return queryItem[0]
  }

  return queryItem
}

export function useAppNavigation({
  router,
  currentFileContext
}: AppNavigationOptions): AppNavigationResult {
  const navigateToContext = (context: MaybeRef<FileContext>) => {
    const { fileName, routeName, routeParams, routeQuery } = unref(context)

    if (!unref(routeName)) {
      return router.push({ path: '/' })
    }

    return router.push({
      name: unref(routeName),
      params: unref(routeParams),
      query: {
        ...unref(routeQuery),
        scrollTo: unref(fileName)
      }
    })
  }

  const { replaceInvalidFileRoute: replaceInvalidFileRouteGeneric } = useFileRouteReplace({
    router
  })
  const replaceInvalidFileRoute = (context: MaybeRef<FileContext>, resource: Resource) => {
    const ctx = unref(context)
    return replaceInvalidFileRouteGeneric({
      space: unref(ctx.space),
      resource,
      path: unref(ctx.item),
      fileId: unref(ctx.itemId)
    })
  }

  const closeApp = () => {
    return navigateToContext(currentFileContext)
  }

  return {
    replaceInvalidFileRoute,
    closeApp
  }
}
