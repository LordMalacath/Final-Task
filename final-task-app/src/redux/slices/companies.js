import { createSlice } from "@reduxjs/toolkit";
import { resetStore } from "./app";

const initialState = {
  list: [],
  sort: "",
};

export const companiesSlice = createSlice({
  name: "companies",
  initialState,
  reducers: {
    setCompaniesList: (state, action) => {
      state.list = action.payload;
    },
    setCreatedCompany: (state, action) => {
      state.list = [action.payload, ...state.list];
    },
    setUpdatedCompany: (state, { payload: { id, updatedCompany } }) => {
      state.list = state.list.map((item) => {
        if (item.id === id) {
          return item = updatedCompany
        }
        return item
      })
    },
    removeCompany: (state, action) => {
      state.list = state.list.filter(item => item.id !== action.payload)
    },
    setSort: (state, action) => {
      state.sort = action.payload;
    },
  },
  extraReducers: (builder) => builder.addCase(resetStore, () => initialState),
});

export const {
  setCompaniesList,
  setSort,
  setCreatedCompany,
  setUpdatedCompany,
  removeCompany
} = companiesSlice.actions;

export default companiesSlice.reducer;