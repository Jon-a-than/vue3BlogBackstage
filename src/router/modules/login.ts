export const Login = [{
  path: '/login',
  component: () => import('@/views/login/index.vue'),
}, {
  path: '/login/github',
  component: () => import('@/views/Login/callback/github.vue')
}, {
  path: '/login/gitee',
  component: () => import('@/views/Login/callback/gitee.vue')
}]