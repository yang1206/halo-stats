import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from 'vue-router'
import { basicRoutes as routes } from './routes'
import { setupRouterGuard } from './guard'
import type { App } from 'vue'
const isHash = import.meta.env.VITE_USE_HASH === 'true'
export const router = createRouter({
  history: isHash ? createWebHashHistory('/') : createWebHistory('/'),
  routes,
})

export function setupRouter(app: App) {
  app.use(router)
  setupRouterGuard(router)
}
