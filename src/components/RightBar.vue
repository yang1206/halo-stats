<template>
  <div v-if="!app.collapsedRight" class="right-wrap">
    <div class="search-wrap">
      <n-input
        v-model:value="keyword"
        round
        clearable
        placeholder="输入GameTag"
        @keyup.enter.prevent="handleSearch"
      >
        <template #prefix>
          <icon :icon="'material-symbols:search'" />
        </template>
      </n-input>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAppStore } from '@/store'

const keyword = ref('')
const app = useAppStore()
const router = useRouter()

const handleSearch = () => {
  router.push({
    name: 'home',
    query: {
      q: keyword.value,
    },
  })
}
</script>

<style lang="scss" scoped>
.right-wrap {
  width: 200px;
  position: fixed;
  left: calc(50% + var(--content-main) / 2 + 10px);
  .search-wrap {
    margin: 12px 0;
  }
}
</style>
