import { createSlice } from '@reduxjs/toolkit';

const biAsideSlice = createSlice({
    name: `biAside`,
    initialState: {
      leftIsToggled: false,
      rightIsToggled: false
    },
    reducers: {
      toggleLeft: (state, action) => ({
        ...state,
        leftIsToggled: !state.leftIsToggled,
        rightIsToggled: false
      }),
      toggleRight: (state, action) => ({
        ...state,
        rightIsToggled: !state.rightIsToggled,
        leftIsToggled: false
      })
    }
})

export const { toggleLeft, toggleRight } = biAsideSlice.actions;

export default biAsideSlice.reducer
