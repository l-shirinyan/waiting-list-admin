import { createSlice } from '@reduxjs/toolkit'

import { IAuthState } from './model'

const initialState: IAuthState = {
  isAuth: localStorage.getItem('_token') ? true : null,
  identity_id: localStorage.getItem('identity_id') ? localStorage.getItem('identity_id') : null,
}
const authSlice = createSlice({
  name: 'isAuth',
  initialState,
  reducers: {
    setIsAuthenticated: (state, action) => {
      state.isAuth = action.payload
    },
    setIdentity_id: (state, action) => {
      state.isAuth = action.payload
    },
  },
})
export const { setIsAuthenticated, setIdentity_id } = authSlice.actions
export default authSlice.reducer
