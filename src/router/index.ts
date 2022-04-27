import { createRouter, createWebHistory } from 'vue-router'
import { Login } from './modules/login'

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  ...Login
]

export const router = createRouter({
  history: createWebHistory(),
  routes
})

