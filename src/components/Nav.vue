<template>
  <n-card size="small" :bordered="true" class="nav-title-card">
    <template #header>
      <div class="navbar">
        <n-button
          v-if="back"
          class="back-btn"
          quaternary
          circle
          size="small"
          @click="goBack"
        >
          <template #icon>
            <icon :icon="'material-symbols:chevron-left'" />
          </template>
        </n-button>

        {{ props.title }}
        <n-select
          v-model:value="currentLang"
          w-28
          right-15
          absolute
          :options="langList"
          filterable
          @update:value="changeLang"
        >
          <template #arrow>
            <transition name="slide-left">
              <icon :icon="'material-symbols:language'" />
            </transition>
          </template>
        </n-select>
        <n-switch
          :value="appStore.darkMode"
          size="small"
          class="theme-switch-wrap"
          @update:value="switchTheme"
        >
          <template #checked-icon>
            <icon :icon="'material-symbols:dark-mode-outline'" />
          </template>
          <template #unchecked-icon>
            <icon :icon="'material-symbols:light-mode-outline'" />
          </template>
        </n-switch>
      </div>
    </template>
  </n-card>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useOsTheme } from 'naive-ui'
import { useDark, useStorage, useToggle } from '@vueuse/core'
import { useAppStore } from '@/store'

const currentLang = useStorage('lang', 'zh')
const langList = [
  {
    label: '中文',
    value: 'zh',
    disabled: false,
  },
  {
    label: 'English',
    value: 'en',
  },
  {
    label: '日本語',
    value: 'ja',
  },
]
const appStore = useAppStore()
const router = useRouter()
const isDark = useDark()
const toggleDark = useToggle(isDark)
const props = withDefaults(
  defineProps<{
    title?: string
    back?: boolean
  }>(),
  {
    title: '',
    back: false,
  }
)
const switchTheme = (theme: boolean) => {
  if (theme) {
    appStore.setDarkMode(true)
    toggleDark(true)
  } else {
    appStore.setDarkMode(false)
    toggleDark(false)
  }
}
const changeLang = () => {
  window.location.reload()
}
const goBack = () => {
  if (window.history.length <= 1) {
    router.push({
      path: '/',
    })
  } else {
    router.go(-1)
  }
}

onMounted(() => {
  if (!localStorage.getItem('vueuse-color-scheme')) {
    switchTheme((useOsTheme() as unknown as string) === 'dark')
  }
})
</script>

<style lang="scss">
.nav-title-card {
  z-index: 99;
  width: 100%;
  top: 0;
  position: sticky;
  border-radius: 0;
  border-bottom: 0;
  background-color: rgba(255, 255, 255, 0.75);
  backdrop-filter: blur(12px);

  .navbar {
    height: 30px;
    position: relative;
    display: flex;
    align-items: center;

    .back-btn {
      margin-right: 8px;
    }

    .theme-switch-wrap {
      position: absolute;
      right: 0;
      top: calc(50% - 9px);
    }
  }
}

.dark {
  .nav-title-card {
    background-color: rgba(16, 16, 20, 0.75);
  }
}
</style>
