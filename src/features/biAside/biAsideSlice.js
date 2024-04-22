import { createSlice } from '@reduxjs/toolkit';

// document.addEventListener('keydown', (event) => {
//   if ((event.key === (left ? "a" : "l") || event.key === (left ? "A" : "L")) && event.altKey) {}
// });

const createAsideSlice = (side) => {
  return createSlice({
    name: `${side}AsideButton`,
    initialState: {
      isToggled: false,
    },
    reducers: {
      setIsToggled: (state, action) => {
        return {
          ...state,
          isToggled: action.payload.value !== undefined ? action.payload.value : !state.isToggled
        };
      }
    }
  })
}

export const leftAsideSlice = createAsideSlice('left');
export const rightAsideSlice = createAsideSlice('right');

export const { setIsToggled: setLeftIsToggled } = leftAsideSlice.actions;
export const { setIsToggled: setRightIsToggled } = rightAsideSlice.actions;

export default {
  leftAsideSliceReducer: leftAsideSlice.reducer,
  rightAsideSliceReducer: rightAsideSlice.reducer
}

export const toggleLeftAside = () => (dispatch) => {
    dispatch(setLeftIsToggled({ value: undefined }));
    dispatch(setRightIsToggled({ value: false }));
};

export const toggleRightAside = () => (dispatch) => {
    dispatch(setRightIsToggled({ value: undefined }));
    dispatch(setLeftIsToggled({ value: false }));
};