import { createSlice } from '@reduxjs/toolkit'
import { IQueueData } from './model'

const initialState: IQueueData = {
  queueData: null,
}
const queueSlice = createSlice({
  name: 'queueData',
  initialState,
  reducers: {
    currentQueueData: (state, action) => {
      state.queueData = action.payload
    },
    addNewQueue: (state, action) => {
      state.queueData = state.queueData && [...state.queueData, action.payload]
    },
  },
})
export const { currentQueueData, addNewQueue } = queueSlice.actions
export default queueSlice.reducer
