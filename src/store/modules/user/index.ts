import { defineStore } from 'pinia'

export const useUserStore = defineStore('user-store', {
  state: () => ({
    gameTag: localStorage.getItem('gameTag') || '',
  }),
  getters: {
    getGameTag(): string | undefined {
      return this.gameTag
    },
  },
  actions: {
    /** 设置玩家id */
    setGameTag(tag: string) {
      this.gameTag = tag
    },
  },
})
