import axios, { AxiosError } from 'axios'
import { BASE_URL } from '../utils/constants'

export const apiRequest = async (
  url?: string,
  method = 'GET',
  body?: object,
  headers?: object,
  base_url = BASE_URL,
  toggleToken?: boolean,
) => {
  try {
    const token = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user') || '') : ''
    const { data, headers: header } = await axios({
      method,
      url: base_url + `${url}`,
      headers: toggleToken
        ? { ...headers }
        : {
            ...headers,
            'Access-Control-Expose-Headers': 'authorization, Uid',
            Authorization: token ? token._token : null,
          },
      data: body,
    })

    const resData = header.authorization
      ? { auth: header.authorization, identity_id: data.id }
      : data
    return resData
  } catch (e: unknown) {
    const error = e as AxiosError
    throw new Error(error?.message || 'Something went wrong')
  }
}
