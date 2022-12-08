import axios from 'axios'

export const apiRequest = async (url: string, method = 'GET', body?: object, headers?: object) => {
  const { data } = await axios({
    method,
    url: process.env.REACT_APP_BASE_URL + url,
    headers,
    data: body,
  })

  return data
}
