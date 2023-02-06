import { createAction, createSlice } from "@reduxjs/toolkit";

export const resetStore = createAction('RESET_STORE');

const initialState = {
  loading: false,
  editStatus: false,
  openModal: false,
  errorMessage: '',
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setEditStatus: (state, action) => {
      state.editStatus = action.payload;
    },
    setOpenModal: (state, action) => {
      state.openModal = action.payload;
    },
    setErrorMessage: (state, action) => {
      state.errorMessage = action.payload;
    },
  },
  extraReducers: (builder) => builder.addCase(resetStore, () => initialState),
})

export const {
  setLoading,
  setEditStatus,
  setOpenModal,
  setErrorMessage,
  setInitPage,
} = appSlice.actions;
export default appSlice.reducer;