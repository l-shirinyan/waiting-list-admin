import { createSlice } from '@reduxjs/toolkit'

import { IAuthState } from './model'

const initialState: IAuthState = {
  isAuth: localStorage.getItem('_token') ? true : null,
}
const authSlice = createSlice({
  name: 'isAuth',
  initialState,
  reducers: {
    setIsAuthenticated: (state, action) => {
      state.isAuth = action.payload
    },
  },
})
export const { setIsAuthenticated } = authSlice.actions
export default authSlice.reducer
