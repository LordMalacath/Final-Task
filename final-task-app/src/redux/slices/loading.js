import { createAction, createSlice } from "@reduxjs/toolkit";

export const resetStore = createAction('RESET_STORE');

const initialState = {
  ok: true,
  fail: false,
  loading: false,
  editStatus: false,
  openModal: false,
};

export const loadingSlice = createSlice({
  name: 'loading',
  initialState,
  reducers: {
    setOk: (state) => {
      state.ok = true;
      state.fail = false;
      state.loading = false;
    },
    setFail: (state) => {
      state.ok = false;
      state.fail = true;
      state.loading = false;

    },
    setLoading: (state) => {
      state.ok = false;
      state.fail = false;
      state.loading = true;
    },
    setEditStatus: (state, action) => {
      state.editStatus = action.payload;
    },
    setOpenModal: (state, action) => {
      state.openModal = action.payload;
    }
  },
  extraReducers: (builder) => builder.addCase(resetStore, () => initialState),
})

export const {
  setOk,
  setFail,
  setLoading,
  setEditStatus,
  setOpenModal } = loadingSlice.actions;
export default loadingSlice.reducer;