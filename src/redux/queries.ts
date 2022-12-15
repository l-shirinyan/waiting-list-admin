import { useMutation, useQuery } from '@tanstack/react-query'
import { apiRequest } from '../configs/requests'
import { IDENTITY_URL, RESTURANT_URL, SEAT_URL, TERMS_URL } from '../utils/constants'
import { ErrorResponseSignUp, SuccessResponse } from './model'

const headers = {
  'Content-Type': 'application/json',
  accept: 'application/json',
}
export const register = async (body: { sign: object; resturant: object }) => {
  const sign = await apiRequest('/v1/register', 'post', body.sign, headers, IDENTITY_URL)

  await apiRequest(
    '',
    'post',
    body?.resturant,
    {
      ...headers,
      Authorization: sign.auth,
    },
    RESTURANT_URL,
    true,
  )
  const { id } = await apiRequest(
    '',
    'post',
    {
      text: '50% of new customers explore products because the author sharing the work on the social media network. Gain your earnings right now! 🔥',
    },
    {
      ...headers,
      Authorization: sign.auth,
    },
    TERMS_URL,
    true,
  )
  return { ...sign, terms_identity: id }
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
    queryFn: () => apiRequest(url, 'get', undefined, headers),
    retry: false,
  })
}

export function getQueue(method = 'get') {
  return {
    mutate: useMutation({
      mutationFn: (url?: string, body?: object) =>
        apiRequest('/v1/waitinglist' + url, method, body, headers),
    }),
  }
}

export function currentQueue(method = 'get') {
  return {
    mutate: useMutation({
      mutationFn: (body?: object) => apiRequest('/v1/waitinglist', method, body, headers),
    }),
  }
}

export function updateQueue(method = 'get') {
  return {
    mutate: useMutation({
      mutationFn: (body?: { url: string; id: number; status: string }) =>
        apiRequest('/v1/waitinglist' + body?.url, method, body, headers),
    }),
  }
}

export function updateDetail(
  url: string,
  method = 'patch',
  onSuccess?: () => void,
  type = 'application/json',
) {
  return {
    mutate: useMutation({
      mutationFn: (body?: object) =>
        apiRequest('', method, body, { ...headers, 'Content-type': type }, url),
      onSuccess,
    }),
  }
}

export function getSeatAreas(
  uri?: string,
  method = 'get',
  queryKey?: string,
  onSuccess?: () => void,
) {
  return useQuery({
    queryKey: [queryKey],
    queryFn: (body?: object) => apiRequest(uri, method, body, headers, SEAT_URL),
    onSuccess,
  })
}

export function getTerms(uri?: string, method = 'get', queryKey?: string, onSuccess?: () => void) {
  return useQuery({
    queryKey: [queryKey],
    queryFn: (body?: object) => apiRequest(uri, method, body, headers, TERMS_URL),
    onSuccess,
    retry: false,
  })
}
