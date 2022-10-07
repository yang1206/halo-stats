import type { RoutesType } from '@/typings/router'
export const basicRoutes: RoutesType = [
  {
    path: '/',
    name: 'main',
    redirect: '/hello',
  },
  {
    path: '/hello',
    name: 'hello',
    component: () => import('@/components/HelloWorld.vue'),
  },
]
