import { createPageLoadingGuard } from './page-loading-guard'
import { createPageTitleGuard } from './page-title-guard'
import type { Router } from 'vue-router'

export function setupRouterGuard(router: Router) {
  createPageLoadingGuard(router)
  createPageTitleGuard(router)
}
