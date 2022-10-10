import { darkTheme } from 'naive-ui'
import { defineStore } from 'pinia'
import type { BuiltInGlobalTheme } from 'naive-ui/es/themes/interface'

export const useAppStore = defineStore('app-store', {
  state: () => ({
    darkMode: localStorage.getItem('vueuse-color-scheme') === 'dark' || false,
    collapsedLeft: document.body.clientWidth <= 821,
    collapsedRight: document.body.clientWidth <= 821,
    lang: localStorage.getItem('lang') || 'zh',
  }),
  getters: {
    naiveTheme(): BuiltInGlobalTheme | undefined {
      return this.darkMode ? darkTheme : undefined
    },
  },
  actions: {
    /** 设置暗黑模式 */
    setDarkMode(darkMode: boolean) {
      this.darkMode = darkMode
    },
    /** 切换/关闭 暗黑模式 */
    toggleDarkMode() {
      this.darkMode = !this.darkMode
    },
    triggerCollapsedLeft(status: boolean) {
      this.collapsedLeft = status
    },
    triggerCollapsedRight(status: boolean) {
      this.collapsedRight = status
    },
  },
})
