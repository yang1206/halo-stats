import request from '@/service'
import type { CampaignMissions } from '@/api'

export const getH5CampaignMissions = () => {
  return request<any, CampaignMissions>({
    url: '/metadata/h5/metadata/campaign-missions',
    method: 'get',
  })
}
