import { createSlice } from '@reduxjs/toolkit';

const biAsideSlice = createSlice({
  name: 'biAside',
  initialState: {
    leftIsToggled: false, //TODO ANIDAR ESTADOS
    rightIsToggled: false,
    leftWidth: 33,
    rightWidth: 33,
    leftIsResizing: false,
    rightIsResizing: false
  },
  reducers: {
    setIsToggled: (state, action) => {
      const { left } = action.payload;
      return {
        ...state,
        leftIsToggled: left ? !state.leftIsToggled : false,
        rightIsToggled: left ? false : !state.rightIsToggled
      };
    },
    setWidth: (state, action) => {
      const { left, value } = action.payload;
      return {
        ...state,
        [left ? 'leftWidth' : 'rightWidth']: value
      };
    },
    setIsResizing: (state, action) => {
      const { left, value } = action.payload;
      return {
        ...state,
        [left ? 'leftIsResizing' : 'rightIsResizing']: value
      };
    }
  }
});

export const { setIsToggled, setWidth, setIsResizing } = biAsideSlice.actions;

export default biAsideSlice.reducer
