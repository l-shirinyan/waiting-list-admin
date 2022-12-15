import { createSlice } from '@reduxjs/toolkit'

import { IAuthState } from './model'

const identity = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user') || '') : ''

const initialState: IAuthState = {
  isAuth: identity ? (identity._token ? true : false) : null,
  identity_id: identity ? identity.identity_id : null,
  terms_identity: identity ? identity.terms_identity : null,
}
const authSlice = createSlice({
  name: 'isAuth',
  initialState,
  reducers: {
    setIsAuthenticated: (state, action) => {
      state.isAuth = action.payload
    },
    setIdentity_id: (state, action) => {
      state.identity_id = action.payload
    },
    setTerms_identity: (state, action) => {
      state.terms_identity = action.payload
    },
  },
})
export const { setIsAuthenticated, setIdentity_id, setTerms_identity } = authSlice.actions
export default authSlice.reducer
