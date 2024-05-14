import { configureStore } from '@reduxjs/toolkit'
import biAsideReducers from 'slice/biAsideSlice.js'
import appReducers from 'slice/appSlice.js'
import leftAsideReducers from 'slice/leftAsideSlice.js'

export const store = configureStore({
  reducer: {
    "biAside": biAsideReducers,
    "app": appReducers,
    "leftAside": leftAsideReducers
  }
})