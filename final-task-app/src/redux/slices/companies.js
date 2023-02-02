import { createSlice } from "@reduxjs/toolkit";


export const companiesSlice = createSlice({
  name: "companies",
  initialState: {
    list: [
    ],
    sort: "",
    companyErrorMessage: "",
  },

  reducers: {
    setCompaniesList: (state, action) => {
      state.list = action.payload;
      console.log("Redux: Companies list set")
    },
    setSort: (state, action) => {
      state.sort = action.payload;
      console.log("Redux: Companies list sorted by", action.payload)
    },
    setCreatedCompany: (state, action) => {
      state.list = [action.payload, ...state.list];
    },
    setCompanyErrorMessage: (state, action) => {
      state.companyErrorMessage = action.payload;
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
    }
  },
});

export const {
  setCompaniesList,
  setSort,
  setCreatedCompany,
  setCompanyErrorMessage,
  setUpdatedCompany,
  removeCompany
} = companiesSlice.actions;

export default companiesSlice.reducer;