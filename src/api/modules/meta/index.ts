import request from '@/service/request_5_hw'
import type { ICampaignMissions } from '@/api'

export const getH5CampaignMissions = () => {
  return request<unknown, ICampaignMissions>({
    url: '/metadata/h5/metadata/campaign-missions',
    method: 'get',
  })
}

export const getH5Commendations = () => {
  return request({
    url: '/metadata/h5/metadata/commendations',
    method: 'get',
  })
}

export const getH5Map = () => {
  return request({
    url: '/metadata/h5/metadata/maps',
    method: 'get',
  })
}

export const getH5Profiles = (player: string, size = 256) => {
  return request<any, string>({
    url: `/profile/h5/profiles/${player}/emblem?${size}`,
    method: 'get',
  })
}
