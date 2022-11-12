import request from '@/service/request_hi_mcc'

export const getHIappearance = (data = { gametag: 'yang206' }) => {
  return request({
    url: '/appearance/players/spartan-id/',
    method: 'get',
    data,
  })
}
