<script lang="ts" setup>
import { Icon } from '@iconify/vue'
defineProps({
  icon: {
    type: String,
    default: 'logos:vue',
  },
  size: {
    type: Number,
    default: 14,
  },
})
</script>
<template>
  <n-icon :size="size" color="#0e7a0d">
    <Icon :icon="icon" />
  </n-icon>
</template>
