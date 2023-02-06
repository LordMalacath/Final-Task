import { createSlice } from "@reduxjs/toolkit";
import jwtDecode from "jwt-decode";
import Cookies from "universal-cookie";
import { resetStore } from "./app";

const initialState = {
  access_token: null,
  auth: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.access_token = action.payload;
      const cookies = new Cookies();
      const decoded = jwtDecode(action.payload);
      cookies.set('jwt_token', action.payload, {
        expires: new Date(decoded.exp * 1000),
        path: '/'
      });
    },
    setAuth: (state, action) => {
      state.auth = action.payload
    },
  },
  extraReducers: (builder) => builder.addCase(resetStore, () => initialState),
});

export const {
  setToken,
  setAuth,
} = authSlice.actions;

export default authSlice.reducer;