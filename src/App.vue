<script setup lang="ts">
import AppProvider from './components/common/AppProvider.vue'
</script>

<template>
  <AppProvider>
    <div has-sider class="main-wrap" position="static">
      <!-- 侧边栏 -->

      <div class="content-wrap">
        <router-view v-slot="{ Component }" class="app-wrap">
          <keep-alive>
            <component :is="Component" v-if="$route.meta.keepAlive" />
          </keep-alive>
          <component :is="Component" v-if="!$route.meta.keepAlive" />
        </router-view>
      </div>

      <!-- 右侧 -->
    </div>
    <!-- 登录/注册公共组件 -->
  </AppProvider>
</template>
<style lang="scss">
@import '@/styles/main.scss';
</style>
