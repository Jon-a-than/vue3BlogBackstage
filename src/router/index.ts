import { createRouter, createWebHistory } from 'vue-router'
import { Login } from './modules/login'
import { main } from './modules/main'

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/home',
    component: () => import('@/views/layout/index.vue'),
    children: main
  },
  ...Login
]

export const router = createRouter({
  history: createWebHistory(),
  routes
})

