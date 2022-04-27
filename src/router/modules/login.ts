export const Login = {
  path: '/login',
  name: 'login',
  component: () => import('@/views/login/index.vue'),
  children: [
    {
      path: '/login/code',
      component: () => import('@/views/login/code.vue')
    }
  ]
}