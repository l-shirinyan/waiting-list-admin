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
  },
})
export const { currentQueueData } = queueSlice.actions
export default queueSlice.reducer