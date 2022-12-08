import { useMutation } from '@tanstack/react-query'
import { apiRequest } from '../configs/requests'
import { ErrorResponseSignUp, SuccessResponse } from './model'

const headers = {
  ' Content-type': 'application/x-www-form-urlencoded',
}
export const register = async (body: object) => {
  return await apiRequest('/register/', 'post', body)
}

export const login = async (body: object) => {
  return await apiRequest('/login/', 'post', body, headers)
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
