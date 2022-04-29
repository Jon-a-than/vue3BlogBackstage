import { UserInfo } from './types'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: (): UserInfo => ({
    login: '',
    id: 0,
    token: '',
    avatar_url: ''
  }),

  persist: {
    enabled: true
  }
})