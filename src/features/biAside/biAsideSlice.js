import { createSlice } from '@reduxjs/toolkit';

const biAsideSlice = createSlice({
    name: 'biAside',
    initialState: {
      leftIsToggled: false,
      rightIsToggled: false,
      leftWidth: 33,
      rightWidth: 33,
      leftIsResizing: false,
      rightIsResizing: false
    },
    reducers: {
      setIsToggled: (state, action) => {
        if (action.payload.left){
          return {
            ...state,
            leftIsToggled: !state.leftIsToggled,
            rightIsToggled: false
          }
        }
        return {
          ...state,
          rightIsToggled: !state.rightIsToggled,
          leftIsToggled: false
        }
      },
      setWidth: (state, action) => {
        if (action.payload.left) {
          return {
            ...state,
            leftWidth: action.payload.value
          }
        }
        return {
          ...state,
          rightWidth: action.payload.value
        }
      },
      setIsResizing: (state, action) => {
        if (action.payload.left) {
          return {
            ...state,
            leftIsResizing: action.payload.value
          }
        }
        return {
          ...state,
          rightIsResizing: action.payload.value
        }
      }
    }
})

export const { setIsToggled, setWidth, setIsResizing } = biAsideSlice.actions;

export default biAsideSlice.reducer
