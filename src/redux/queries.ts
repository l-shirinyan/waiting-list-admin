import { useMutation, useQuery } from '@tanstack/react-query'
import { apiRequest } from '../configs/requests'
import { ErrorResponseSignUp, SuccessResponse } from './model'

const headers = {
  accept: 'application/json',
}
export const register = async (body: { sign: object; resturant: object }) => {
  const sign = await apiRequest(
    process.env.REACT_APP_BASE_URL + '/register/',
    'post',
    body.sign,
    headers,
  )

  await apiRequest('https://yqrc-api-resturant.gaytomycode.com/v1/', 'post', body.resturant, {
    ...headers,
    Authorization: sign,
  })
  return sign
}

export const login = async (body: object) => {
  return await apiRequest(process.env.REACT_APP_BASE_URL + '/login/', 'post', body, {
    ...headers,
    ' Content-type': 'application/x-www-form-urlencoded',
  })
}

export function useSignIn(body: object) {
  return {
    mutate: useMutation({
      mutationFn: login,
      onError: (err: ErrorResponseSignUp) => {
        return err
      },
      onSuccess: (data: SuccessResponse | string) => {
        return data
      },
    }),
    body,
  }
}

export function useSignUp(body: object) {
  return {
    mutate: useMutation({
      mutationFn: register,
      onError: (err: ErrorResponseSignUp) => {
        return err
      },
      onSuccess: (data: SuccessResponse | string) => {
        return data
      },
    }),
    body,
  }
}

export function useFetch(url: string, queryKey: string) {
  return useQuery({
    queryKey: [queryKey],
    queryFn: () =>
      apiRequest(url, 'get', undefined, {
        ...headers,
        Authorization: localStorage.getItem('_token'),
      }),
  })
}

export function getQueue(method = 'get') {
  return {
    mutate: useMutation({
      mutationFn: (url?: string, body?: object) =>
        apiRequest(url, method, body, {
          ...headers,
          Authorization: localStorage.getItem('_token'),
        }),
    }),
  }
}

export function currentQueue(url?: string, method = 'get') {
  return {
    mutate: useMutation({
      mutationFn: (body?: object) =>
        apiRequest(url, method, body, {
          ...headers,
          Authorization: localStorage.getItem('_token'),
        }),
    }),
  }
}

export function updateQueue(method = 'get') {
  return {
    mutate: useMutation({
      mutationFn: (body?: { url: string; id: number; status: string }) =>
        apiRequest(body?.url, method, body, {
          ...headers,
          Authorization: localStorage.getItem('_token'),
        }),
    }),
  }
}
