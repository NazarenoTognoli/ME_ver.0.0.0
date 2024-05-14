import { createSlice } from '@reduxjs/toolkit';

const leftAsideSlice = createSlice({
    name: 'leftAside',
    initialState: {
        consoleHeight: 50, //% unit
        customizableContentHeight: 50 //% unit
    },
    reducers: {
        setConsoleHeight: (state, action) => ({
            ...state,
            consoleHeight: action.payload
        }),
        setCustomizableContentHeight: (state, action) => ({
            ...state,
            customizableContentHeight: action.payload
        })
    }
});

export const { setConsoleHeight, setCustomizableContentHeight } = leftAsideSlice.actions

export default leftAsideSlice.reducer;