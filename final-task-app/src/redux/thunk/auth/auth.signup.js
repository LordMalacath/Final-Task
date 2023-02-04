import { createAsyncThunk } from "@reduxjs/toolkit";
import { authSignup } from "api";
import { setLoading, setOk } from "redux/slices/loading";

export const signup = createAsyncThunk(
  'user/signup',
  async (data, { dispatch }) => {
    dispatch(setLoading());
    try {
      await authSignup(data);
      dispatch(setOk())
    } catch (error) {
      dispatch(setOk())
      console.log("Redux: signup ", error)
    }
  }
);