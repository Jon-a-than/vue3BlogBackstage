export const main = [
  {
    path: '/home',
    component: () => import('@/views/home/index.vue'),
  },
  {
    path: '/creator',
    component: () => import('@/views/creator/index.vue'),
  },
  // {
  //   path: '/creator/:id',
  // },
  {
    path: '/article',
    component: () => import('@/views/article/index.vue'),
  },
  {
    path: '/about',
    component: () => import('@/views/about/index.vue'),
  }
]