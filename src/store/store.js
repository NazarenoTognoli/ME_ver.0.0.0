import { configureStore } from '@reduxjs/toolkit'
import reducers from '../features/biAside/biAsideSlice.js'

export const store = configureStore({
  reducer: {
    "left-aside": reducers.leftAsideSliceReducer,
    "right-aside": reducers.rightAsideSliceReducer
  }
})