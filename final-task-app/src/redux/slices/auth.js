import { createSlice } from "@reduxjs/toolkit";
import jwtDecode from "jwt-decode";
import Cookies from "universal-cookie";
import { resetStore } from "./loading";

const initialState = {
  access_token: null,
  auth: false,
  errorMessage: "",
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
    setErrorMessage: (state, action) => {
      state.errorMessage = action.payload;
    },
    removeToken: (state) => {
      state.access_token = null;
    }
  },
  extraReducers: (builder) => builder.addCase(resetStore, () => initialState),
});

export const {
  setToken,
  setAuth,
  setErrorMessage,
  removeToken
} = authSlice.actions;

export default authSlice.reducer;