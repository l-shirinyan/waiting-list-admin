import { useMutation, useQuery } from '@tanstack/react-query'
import { apiRequest } from '../configs/requests'
import { IDENTITY_URL } from '../utils/constants'
import { ErrorResponseSignUp, SuccessResponse } from './model'

const headers = {
  'Content-Type': 'application/json',
  accept: 'application/json',
}
export const register = async (body: { sign: object; resturant: object }) => {
  const sign = await apiRequest('/v1/register', 'post', body.sign, headers, IDENTITY_URL)

  await apiRequest('https://yqrc-api-resturant.gaytomycode.com/v1/', 'post', body.resturant, {
    ...headers,
    Authorization: sign,
  })
  return sign
}

export const login = async (body: object) => {
  return await apiRequest(
    '/v1/login',
    'post',
    body,
    {
      ...headers,
      ' Content-type': 'application/x-www-form-urlencoded',
    },
    IDENTITY_URL,
  )
}

export function useSignIn(body: object) {
  return {
    mutate: useMutation({
      mutationFn: login,
      onError: (err: ErrorResponseSignUp) => {
        return err
      },
      onSuccess: (data: SuccessResponse) => {
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
      onSuccess: (data: SuccessResponse) => {
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
      apiRequest('/v1/waitinglist' + url, 'get', undefined, {
        ...headers,
        Authorization: localStorage.getItem('_token'),
      }),
  })
}

export function getQueue(method = 'get') {
  return {
    mutate: useMutation({
      mutationFn: (url?: string, body?: object) =>
        apiRequest('/v1/waitinglist' + url, method, body, {
          ...headers,
          Authorization: localStorage.getItem('_token'),
        }),
    }),
  }
}

export function currentQueue(method = 'get') {
  return {
    mutate: useMutation({
      mutationFn: (body?: object) =>
        apiRequest('/v1/waitinglist', method, body, {
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
        apiRequest('/v1/waitinglist' + body?.url, method, body, {
          ...headers,
          Authorization: localStorage.getItem('_token'),
        }),
    }),
  }
}
