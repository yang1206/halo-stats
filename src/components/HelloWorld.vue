<script setup lang="ts">
import { getH5CampaignMissions } from '@/api'
getH5CampaignMissions().then((res) => {
  res.map(() => {
    // console.log(item.imageUrl)
  })
})
</script>

<template>
  <n-layout>
    <n-layout-header>颐和园路</n-layout-header>
    <n-layout-content content-style="padding: 24px;"> 平山道 </n-layout-content>
    <n-layout-footer>成府路</n-layout-footer>
  </n-layout>
</template>
