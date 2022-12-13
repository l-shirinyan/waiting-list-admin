export interface IHistoryData {
  historyData: IResults[] | null
  count: number
  stats: IStats[] | null
}

export interface IResults {
  guest_name: string
  phone_number: string
  guest_count: number
  request: string
  identity_id: number
  order_in_queue: number
  id: number
  added_on: string
  status: string
}

export interface IStats {
  status: string
  count: number
}
