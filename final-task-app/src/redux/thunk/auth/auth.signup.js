import { createAsyncThunk } from "@reduxjs/toolkit";
import { authSignup } from "api";
import { setErrorMessage, setLoading } from "redux/slices/app";

export const signup = createAsyncThunk(
  'user/signup',
  async (data, { dispatch }) => {
    dispatch(setLoading(true));

    try {
      const response = await authSignup(data);
      if (response.ok) {
        dispatch(setErrorMessage(''))
      } else {
        const { message } = await response.json();
        console.log(message)
        dispatch(setErrorMessage(message))
        throw new Error(message)
      }
    } catch (error) {
      console.log("Redux: signup ", error);
    }

    dispatch(setLoading(false));
  }
);