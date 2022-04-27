export const Login = [{
  path: '/login',
  name: 'login',
  component: () => import('@/views/login/index.vue'),
}, {
  path: '/login/code',
  component: () => import('@/views/login/callback/index.vue')
}]