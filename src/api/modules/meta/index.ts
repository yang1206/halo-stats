import request from '@/service'
import type { ICampaignMissions } from '@/api'

export const getH5CampaignMissions = () => {
  return request<any, ICampaignMissions>({
    url: '/metadata/h5/metadata/campaign-missions',
    method: 'get',
  })
}
