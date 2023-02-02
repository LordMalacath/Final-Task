import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { authSignup, profileUpdate } from "api";
import { setEditStatus, setFail, setOk } from "./loading";

export const signup = createAsyncThunk(
  'user/signup',
  async (data, { dispatch }) => {
    try {
      await authSignup(data);
      dispatch(setOk())
    } catch (error) {
      dispatch(setFail())
      console.log("Redux: signup ", error)
    }
  }
);

export const updateUser = createAsyncThunk(
  'user/updateUser',
  async ({ body, token }, { dispatch }) => {
    try {
      const response = await profileUpdate({ body, token });
      const userInfo = await response.json();
      dispatch(setInfo(userInfo));
      dispatch(setEditStatus(false));
      dispatch(setOk());
    } catch (error) {
      dispatch(setFail());
      console.log("Redux: user: update fail");
    }
  }
)

export const userSlice = createSlice({
  name: "user",
  initialState: {
    info: "",
    role: "user",
  },

  reducers: {
    setInfo: (state, action) => {
      state.info = action.payload;
      console.log("Redux: User info set")
    },
  }
});

export const { setInfo } = userSlice.actions;
export default userSlice.reducer