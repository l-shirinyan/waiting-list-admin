export interface IQueueData {
  queueData: null | IData[]
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
