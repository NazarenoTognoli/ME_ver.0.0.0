import { configureStore } from '@reduxjs/toolkit'
import biAsideReducers from '../features/biAside/biAsideSlice.js'

export const store = configureStore({
  reducer: {
    "biAside": biAsideReducers
  }
})