<script setup lang="ts">
import { t2s } from '@/utils/common'
import { getH5CampaignMissions, getH5Profiles } from '@/api'
import type { ICampaignMissions } from '@/api'
const CampaignMissions = ref<ICampaignMissions>()
getH5CampaignMissions().then((res) => {
  CampaignMissions.value = res
})
getH5Profiles('yang1206')
</script>

<template>
  <div>
    <n-list bordered>
      <n-list-item v-for="item in CampaignMissions" :key="item.contentId">
        <p>{{ t2s(item.name) }}</p>
        <p>{{ t2s(item.description) }}</p>
        <n-image :src="item.imageUrl" w-32 h-32 :alt="item.description" />
      </n-list-item>
    </n-list>
  </div>
</template>
