import axios from 'axios'
import { BASE_URL } from '../utils/constants'

export const apiRequest = async (
  url?: string,
  method = 'GET',
  body?: object,
  headers?: object,
  base_url = BASE_URL,
) => {
  const { data, headers: header } = await axios({
    method,
    url: base_url + `${url}`,
    headers: { ...headers, 'Access-Control-Expose-Headers': 'authorization, Uid' },
    data: body,
  })

  const resData = header.authorization ? { auth: header.authorization, identity_id: data.id } : data
  return resData
}
