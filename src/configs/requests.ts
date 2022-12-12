import axios from 'axios'

export const apiRequest = async (url?: string, method = 'GET', body?: object, headers?: object) => {
  const { data, headers: header } = await axios({
    method,
    url: url,
    headers: { ...headers, 'Access-Control-Expose-Headers': 'authorization, Uid' },
    data: body,
  })

  const resData = header.authorization ? header.authorization : data
  return resData
}
