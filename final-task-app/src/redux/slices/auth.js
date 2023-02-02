import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { authSignin } from "api";
import { setFail, setOk } from "./loading";
import { setInfo } from "./user";

export const signin = createAsyncThunk(
  'auth/signin',
  async (data, { dispatch }) => {
    try {
      const response = await authSignin(data)
      if (response.ok) {
        const { user, access_token } = await response.json();
        dispatch(setToken(access_token));
        dispatch(setAuth(true));
        dispatch(setInfo(user));
        dispatch(setOk());
        dispatch(setErrorMessage(""));
      } else {
        const { message } = await response.json()
        dispatch(setErrorMessage(message));
        dispatch(setFail());
        dispatch(setOk());
      }
    } catch (error) {
      dispatch(setFail());
      dispatch(setAuth(false));
      console.log("Redux: signin", error);
      dispatch(setOk())
    }
  }
)

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    access_token: null,
    auth: false,
    errorMessage: "",
  },
  reducers: {
    setToken: (state, action) => {
      state.access_token = action.payload;
      console.log("Redux: Tokken set")
    },
    setAuth: (state, action) => {
      state.auth = action.payload
    },
    setErrorMessage: (state, action) => {
      state.errorMessage = action.payload;
    }
  },
});


export const {
  setToken,
  setAuth,
  setErrorMessage
} = authSlice.actions;

export default authSlice.reducer;