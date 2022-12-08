import { base, router } from './index'
import Router, { Route, RouteRecordPublic } from 'vue-router'
import {
  authContextValues,
  contextQueryToFileContextProps,
  LocationParams,
  WebRouteMeta
} from 'web-pkg/src/composables'

export const buildUrl = (pathname) => {
  const isHistoryMode = !!base
  const baseUrl = new URL(window.location.href.split('#')[0])
  baseUrl.search = ''
  if (isHistoryMode) {
    // in history mode we can't determine the base path, it must be provided by the document
    baseUrl.pathname = new URL(base.href).pathname
  } else {
    // in hash mode, auto-determine the base path by removing `/index.html`
    if (baseUrl.pathname.endsWith('/index.html')) {
      baseUrl.pathname = baseUrl.pathname.split('/').slice(0, -1).filter(Boolean).join('/')
    }
  }

  /**
   * build full url by either
   * - concatenating baseUrl and pathname (for unknown/non-router urls, e.g. `oidc-callback.html`) or
   * - resolving via router (for known routes)
   */
  if (/\.(html?)$/i.test(pathname)) {
    baseUrl.pathname = [...baseUrl.pathname.split('/'), ...pathname.split('/')]
      .filter(Boolean)
      .join('/')
  } else {
    baseUrl[isHistoryMode ? 'pathname' : 'hash'] = router.resolve(pathname).href
  }

  return baseUrl.href
}

/**
 * Checks if the `to` route or the route it was reached from (i.e. the `contextRoute`) needs authentication from the IDP.
 *
 * @param router {Router}
 * @param to {Route}
 * @returns {boolean}
 */
export const isUserContext = (router: Router, to: Route): boolean => {
  const meta = getRouteMeta(to)
  if (meta.authContext === 'user') {
    return true
  }
  if (meta.authContext !== 'hybrid') {
    return false
  }

  const contextRoute = getContextRoute(router, to)
  return !contextRoute || getRouteMeta({ meta: contextRoute.meta } as Route).authContext === 'user'
}

/**
 * Checks if the `to` route or the route it was reached from (i.e. the `contextRoute`) needs a resolved public link context (with or without password).
 *
 * @param router {Router}
 * @param to {Route}
 * @returns {boolean}
 */
export const isPublicLinkContext = (router: Router, to: Route): boolean => {
  if (to.params.driveAliasAndItem?.startsWith('public/')) {
    return true
  }

  const meta = getRouteMeta(to)
  if (meta.authContext === 'publicLink') {
    return true
  }
  if (meta.authContext !== 'hybrid') {
    return false
  }

  const contextRoute = getContextRoute(router, to)
  return (
    contextRoute && getRouteMeta({ meta: contextRoute.meta } as Route).authContext === 'publicLink'
  )
}

/**
 * Extracts the public link token from the various possible route params.
 *
 * @param to {Route}
 * @returns {string}
 */
export const extractPublicLinkToken = (to: Route): string => {
  const contextRouteParams = contextQueryToFileContextProps(to.query)?.routeParams
  if (contextRouteParams) {
    return extractPublicLinkTokenFromRouteParams(contextRouteParams)
  }
  return extractPublicLinkTokenFromRouteParams(to.params)
}

/**
 * Extracts the public link token from known possible occurrences in params of a route.
 *
 * @param params {LocationParams}
 */
const extractPublicLinkTokenFromRouteParams = (params: LocationParams): string => {
  if (Object.prototype.hasOwnProperty.call(params, 'driveAliasAndItem')) {
    if (!params.driveAliasAndItem.startsWith('public/')) {
      return ''
    }
    return params.driveAliasAndItem.split('/')[1]
  }
  return (params.item || params.filePath || params.token || '').split('/')[0]
}

/**
 * Asserts that no form of authentication is required.
 *
 * @param router {Router}
 * @param to {Route}
 * @returns {boolean}
 */
export const isAnonymousContext = (router: Router, to: Route): boolean => {
  return getRouteMeta(to).authContext === 'anonymous'
}

/**
 * The contextRoute in URLs is used to give applications additional context where the application route was triggered from
 * (e.g. from a project space, a public link file listing, a personal space, etc).
 * Application routes need to fulfill both their own auth requirements and the auth requirements from the context route.
 *
 * Example: the `preview` app and its routes don't explicitly require authentication (`meta.auth` is set to `false`), because
 * the app can be used from both an authenticated context or from a public link context. The information which endpoint
 * the preview app is supposed to load files from is transported via the contextRouteName, contextRouteParams and contextRouteQuery
 * in the URL (provided by the context that opens the preview app in the first place).
 */
const getContextRoute = (router: Router, to: Route): RouteRecordPublic | null => {
  const contextRouteNameKey = 'contextRouteName'
  if (!to.query || !to.query[contextRouteNameKey]) {
    return null
  }

  return router.getRoutes().find((r) => r.name === to.query[contextRouteNameKey])
}

const getRouteMeta = (to: Route): WebRouteMeta => {
  if (!to.meta) {
    return {
      authContext: 'user'
    }
  }

  // rewrite deprecated `auth` property to the respective `authContext` value
  if (!to.meta.authContext && Object.prototype.hasOwnProperty.call(to.meta, 'auth')) {
    to.meta.authContext = to.meta.auth ? 'user' : 'hybrid'
    console.warn(
      `route key meta.auth is deprecated. Please switch to meta.authContext="${to.meta.authContext}" in route "${to.name}".`
    )
  }

  if (to?.meta?.authContext) {
    if (authContextValues.includes(to.meta.authContext)) {
      return to.meta
    }
    console.warn(
      `invalid authContext "${to.meta.authContext}" in route "${
        to.name
      }". must be one of [${authContextValues.join(', ')}].`
    )
  }
  if (to?.meta) {
    return {
      ...to.meta,
      authContext: 'user'
    }
  }
  return {
    authContext: 'user'
  }
}
