import type { RoutesType } from '@/typings/router'
export const basicRoutes: RoutesType = [
  {
    path: '/',
    name: 'main',
    redirect: '/halo-5',
  },
  {
    path: '/halo-5',
    name: 'halo5',
    component: () => import('@/views/Halo5/index.vue'),
  },
]
