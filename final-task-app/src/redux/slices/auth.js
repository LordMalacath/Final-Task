import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: "auth",
    initialState: {
        auth: true,
    },
    reducers: {
        setAuth: (state, action) => {
            state.auth = action.payload;
        },
    },
});

export const { setAuth } = authSlice.actions;
export default authSlice.reducer;