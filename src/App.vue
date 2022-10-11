<template>
  <AppProvider>
    <div has-sider class="main-wrap" position="static">
      <!-- 侧边栏 -->
      <SlideBar />
      <div class="content-wrap">
        <Nav />
        <router-view v-slot="{ Component }" class="app-wrap">
          <keep-alive>
            <component :is="Component" v-if="$route.meta.keepAlive" />
          </keep-alive>
          <component :is="Component" v-if="!$route.meta.keepAlive" />
        </router-view>
      </div>
      <!-- 右侧 -->
      <RightBar />
    </div>
    <!-- 登录/注册公共组件 -->
  </AppProvider>
</template>
