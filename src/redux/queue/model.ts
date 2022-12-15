export interface IQueueData {
  queueData: null | IData[]
  seatingAreas: null | ISeat[]
}

export interface IData {
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

export interface ISeat {
  name: string
  identity_id: number
  id: number
  is_active: boolean
}
