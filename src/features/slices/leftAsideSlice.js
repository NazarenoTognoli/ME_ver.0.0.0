import { createSlice } from '@reduxjs/toolkit';

const leftAsideSlice = createSlice({
    name: 'leftAside',
    initialState: {
//% units
        consoleHeight: 50,
        customizableContentHeight: 50,
        consoleDefaultTemplateInputHeight: 50,
        consoleDefaultTemplateOutputHeight: 50
    },
    reducers: {
        setConsoleHeight: (state, action) => ({
            ...state,
            consoleHeight: action.payload
        }),
        setCustomizableContentHeight: (state, action) => ({
            ...state,
            customizableContentHeight: action.payload
        }),
        setConsoleDefaultTemplateInputHeight: (state, action) => {
            return {...state,
            consoleDefaultTemplateInputHeight: action.payload}
        },
        setConsoleDefaultTemplateOutputHeight: (state, action) => {
            return {...state,
            consoleDefaultTemplateOutputHeight: action.payload}
        }
    }
});

export const { 
    setConsoleHeight, 
    setCustomizableContentHeight,
    setConsoleDefaultTemplateInputHeight,
    setConsoleDefaultTemplateOutputHeight 
} = leftAsideSlice.actions

export default leftAsideSlice.reducer;