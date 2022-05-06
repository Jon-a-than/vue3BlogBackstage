import { defineStore } from 'pinia'
import { Articles } from './types'

export const useArticleStore = defineStore('articles', {
  state: ():Articles[]  => ([
    {
      title: '',
      content: '',
      id: 0
    }
  ])
})