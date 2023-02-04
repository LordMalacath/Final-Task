import { createAsyncThunk } from "@reduxjs/toolkit";
import { authSignin } from "api";
import { setAuth, setErrorMessage, setToken } from "redux/slices/auth";
import { setLoading, setOk } from "redux/slices/loading";
import { setInfo } from "redux/slices/user";

export const signin = createAsyncThunk(
  'auth/signin',
  async (data, { dispatch }) => {
    dispatch(setLoading())
    try {
      const response = await authSignin(data)
      if (response.ok) {
        const { user, access_token } = await response.json();
        dispatch(setToken(access_token));
        dispatch(setAuth(true));
        dispatch(setInfo(user));
        dispatch(setOk());
      } else {
        const { message } = await response.json()
        dispatch(setErrorMessage(message));
        throw new Error(message)
      }
    } catch (error) {
      dispatch(setAuth(false));
      dispatch(setOk())
      console.log("Redux: signin =>", error);
    }
  }
)