import { createSlice } from '@reduxjs/toolkit'
import { IHistoryData } from './model'

const initialState: IHistoryData = {
  historyData: null,
  count: 0,
  stats: null,
}
const historySlice = createSlice({
  name: 'historyData',
  initialState,
  reducers: {
    getHistoryData: (state, action) => {
      state.historyData = action.payload
    },
    getDataCount: (state, action) => {
      state.count = action.payload
    },
    getStatsCount: (state, action) => {
      state.stats = action.payload
    },
  },
})
export const { getHistoryData, getDataCount, getStatsCount } = historySlice.actions
export default historySlice.reducer
