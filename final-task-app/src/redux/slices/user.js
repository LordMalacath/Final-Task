import { createSlice } from "@reduxjs/toolkit";
import { resetStore } from "./loading";

const initialState = {
  info: "",
  role: "user",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setInfo: (state, action) => {
      state.info = action.payload;
    },
  },
  extraReducers: (builder) => builder.addCase(resetStore, () => initialState),
});

export const { setInfo } = userSlice.actions;
export default userSlice.reducer