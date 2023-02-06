import { createAsyncThunk } from "@reduxjs/toolkit";
import { profileUpdate } from "api";
import { setEditStatus, setLoading } from "redux/slices/app";
import { setInfo } from "redux/slices/user";

export const updateUser = createAsyncThunk(
  'user/updateUser',
  async ({ body, token }, { dispatch }) => {
    dispatch(setLoading(true));

    try {
      const response = await profileUpdate({ body, token });
      if (response.ok) {
        const userInfo = await response.json();
        dispatch(setInfo(userInfo));
        dispatch(setEditStatus(false));
      } else {
        const { message } = await response.json()
        throw new Error(message)
      }
    } catch (error) {
      console.log("Redux: user: update ", error);
      return error
    }

    dispatch(setLoading(false));
  }
)