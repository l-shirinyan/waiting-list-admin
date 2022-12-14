import { configureStore } from '@reduxjs/toolkit'
import authReducer from './auth/authSlice'
import queueReducer from './queue/queueSlice'
import historyReducer from './history/historySlice'

export const store = configureStore({
  reducer: {
    isAuth: authReducer,
    queueData: queueReducer,
    historyData: historyReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
