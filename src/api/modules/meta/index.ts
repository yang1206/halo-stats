import request from '@/service'

export const getH5CampaignMissions = () => {
  return request({
    url: '/metadata/h5/metadata/campaign-missions',
    method: 'get',
  })
}
