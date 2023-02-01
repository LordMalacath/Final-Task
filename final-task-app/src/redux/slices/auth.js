import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { authSignin } from "api";
import { setFail, setOk } from "./loading";
import { setInfo } from "./user";

export const signin = createAsyncThunk(
  'auth/signin',
  async (data, { dispatch }) => {
    try {
      const response = await authSignin(data)
      const { user, access_token } = await response.json();
      dispatch(setToken(access_token));
      dispatch(setAuth(true));
      dispatch(setInfo(user));
      dispatch(setOk());
    } catch (error) {
      dispatch(setFail());
      dispatch(setAuth(false));
      console.log("Redux: signin", error)
    }
  }
)

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    access_token: null,
    auth: false,
  },
  reducers: {
    setToken: (state, action) => {
      state.access_token = action.payload;
      console.log("Redux: Tokken set")
    },
    setAuth: (state, action) => {
      state.auth = action.payload
    },
  },
});

export const { setToken, setAuth } = authSlice.actions;
export default authSlice.reducer;