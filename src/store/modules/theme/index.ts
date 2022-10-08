import { darkTheme } from 'naive-ui'
import { defineStore } from 'pinia'
import type { BuiltInGlobalTheme } from 'naive-ui/es/themes/interface'

export const useThemeStore = defineStore('theme-store', {
  state: () => ({
    darkMode: localStorage.getItem('theme') || false,
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
  },
})
