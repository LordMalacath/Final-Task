import { createAsyncThunk } from "@reduxjs/toolkit";
import { profileUpdate } from "api";
import { setEditStatus, setLoading, setOk } from "redux/slices/loading";
import { setInfo } from "redux/slices/user";

export const updateUser = createAsyncThunk(
  'user/updateUser',
  async ({ body, token }, { dispatch }) => {
    dispatch(setLoading())
    try {
      const response = await profileUpdate({ body, token });
      const userInfo = await response.json();
      dispatch(setInfo(userInfo));
      dispatch(setEditStatus(false));
      dispatch(setOk());
    } catch (error) {
      dispatch(setOk());
      console.log("Redux: user: update fail");
    }
  }
)