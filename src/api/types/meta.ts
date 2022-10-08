export interface CampaignMission {
  missionNumber: number
  name: string
  description: string
  imageUrl: string
  type: string
  id: string
  contentId: string
}
export type CampaignMissions = Array<CampaignMission>
