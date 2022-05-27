import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
    name: 'users',
    initialState: [{}],
    reducers: {
        createUser(state, { payload }) {
            return [...state, payload];
        },
    }
})

export const { createUser, getUsers } = slice.actions;

export default slice.reducer;