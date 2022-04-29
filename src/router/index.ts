import { createRouter, createWebHistory } from 'vue-router'
import { Login } from './modules/login'

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/home',
    component: () => import('@/views/layout/index.vue')
  },
  ...Login
]

export const router = createRouter({
  history: createWebHistory(),
  routes
})

