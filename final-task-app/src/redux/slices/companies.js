import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { companyAll, companyCreate, companyDelete, companyUpdate } from "api";
import { setFail, setOk } from "./loading";

export const createCompany = createAsyncThunk(
  'companies/createCompany',
  async ({ body, token }, { dispatch }) => {
    try {
      const response = await companyCreate({ body, token });
      const createdCompany = await response.json();
      dispatch(setCreatedCompany(createdCompany));
      dispatch(setOk());
    } catch (error) {
      dispatch(setFail());
      console.log("Redux: company: create fail", error);
    }
  }
)

export const updateCompany = createAsyncThunk(
  'companies/updateCompany',
  async ({ body, token, id }, { dispatch }) => {
    try {
      const response = await companyUpdate({ id, token, body });
      const updatedCompany = await response.json();
      dispatch(setUpdatedCompany(updatedCompany));
      dispatch(setOk());
    } catch (error) {
      dispatch(setFail());
      console.log("Redux: company: update fail", error)
    }
  }
)

export const deleteCompany = createAsyncThunk(
  'companies/deleteCompany',
  async ({ token, id }, { dispatch }) => {
    try {
      await companyDelete({ id, token });
      dispatch(deleteCompany(id))
      dispatch(setOk());
    } catch (error) {
      dispatch(setFail());
      console.log("Redux: company: delete fail", error);
    }
  }
)

export const userCompanies = createAsyncThunk(
  'companies/userCompanies',
  async (token, { dispatch }) => {
    try {
      const response = await companyAll(token);
      const userCompanies = await response.json();
      dispatch(setCompaniesList(userCompanies));
      dispatch(setOk());
    } catch (error) {
      dispatch(setFail());
      console.log("Redux: company: user companies fail", error);
    }
  }
)

export const companiesSlice = createSlice({
  name: "companies",
  initialState: {
    list: [],
    selectedCompany: "",
    sort: "",
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
    setUpdatedCompany: (state, action) => {
    },
    setCreatedCompany: (state, action) => {
    },
    deleteCompany: (state, action) => {
    }
  },
});

export const { setCompaniesList, setSort, setUpdatedCompany, setCreatedCompany } = companiesSlice.actions;
export default companiesSlice.reducer;