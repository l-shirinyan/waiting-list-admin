import { configureStore } from '@reduxjs/toolkit'
import authReducer from './auth/authSlice'
export const store = configureStore({
  reducer: {
    isAuth: authReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
