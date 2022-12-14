import { createSlice } from '@reduxjs/toolkit'
import { IQueueData } from './model'

const initialState: IQueueData = {
  queueData: null,
  seatingAreas: null,
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
    fetchSeatAreas: (state, action) => {
      state.seatingAreas = action.payload
    },
  },
})
export const { currentQueueData, addNewQueue, fetchSeatAreas } = queueSlice.actions
export default queueSlice.reducer
