<script setup lang="ts"></script>
<template>
  <div class="sidebar-wrap">
    <div class="logo-wrap">
      <!-- <n-image
        class="logo-img"
        width="36"
        :src="LOGO"
        :preview-disabled="true"
        @click="goHome"
      /> -->
    </div>
    <!-- <n-menu
      :accordion="true"
      :collapsed="store.state.collapsedLeft"
      :collapsed-width="64"
      :icon-size="24"
      s
      :options="menuOptions"
      :render-label="renderMenuLabel"
      :render-icon="renderMenuIcon"
      :value="selectedPath"
      @update:value="goRouter"
    /> -->
  </div>
</template>
<style lang="scss">
.sidebar-wrap {
  z-index: 99;
  width: 200px;
  height: 100vh;
  position: fixed;
  right: calc(50% + var(--content-main) / 2 + 10px);
  padding: 12px 0;
  box-sizing: border-box;
  .n-menu .n-menu-item-content::before {
    border-radius: 21px;
  }
}
.logo-wrap {
  display: flex;
  justify-content: flex-start;
  margin-bottom: 12px;
  .logo-img {
    margin-left: 24px;
    &:hover {
      cursor: pointer;
    }
  }
}
.user-wrap {
  display: flex;
  align-items: center;
  position: absolute;
  bottom: 12px;
  left: 12px;
  right: 12px;
  .user-mini-wrap {
    display: none;
  }
  .user-avatar {
    margin-right: 8px;
  }

  .user-info {
    display: flex;
    flex-direction: column;

    .nickname {
      font-size: 16px;
      font-weight: bold;
      line-height: 16px;
      height: 16px;
      margin-bottom: 2px;
      display: flex;
      align-items: center;

      .nickname-txt {
        max-width: 90px;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
      }

      .logout {
        margin-left: 6px;
      }
    }

    .username {
      font-size: 14px;
      line-height: 16px;
      height: 16px;
      width: 120px;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
      opacity: 0.75;
    }
  }
  .login-wrap {
    display: flex;
    justify-content: center;
    width: 100%;
    button {
      margin: 0 4px;
    }
  }
}
.auth-card {
  .n-card-header {
    z-index: 999;
  }
}
@media screen and (max-width: 821px) {
  .sidebar-wrap {
    width: 65px;
    right: calc(100% - 60px);
  }
  .logo-wrap {
    .logo-img {
      margin-left: 12px !important;
    }
  }
  .user-wrap {
    .user-avatar,
    .user-info,
    .login-wrap {
      display: none;
    }

    .user-mini-wrap {
      display: block !important;
    }
  }
}
</style>
