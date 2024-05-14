import { createSlice } from '@reduxjs/toolkit';

const appSlice = createSlice({
    name: 'app',
    initialState: {
        somethingIsResizing: false
    },
    reducers: {
        setSomethingIsResizing: (state, action) => ({
            ...state,
            somethingIsResizing: action.payload
        })
    }
});
export const { setSomethingIsResizing } = appSlice.actions;

export default appSlice.reducer;