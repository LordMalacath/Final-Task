import { createAsyncThunk } from "@reduxjs/toolkit";
import { companyAll } from "api";
import { setCompaniesList } from "../companies";
import { setLoading, setOk } from "../loading";

export const userCompanies = createAsyncThunk(
  'companies/userCompanies',
  async (_, { dispatch, getState }) => {
    dispatch(setLoading());
    let { access_token } = getState().auth;
    try {
      const response = await companyAll(access_token);
      const userCompanies = await response.json();
      dispatch(setCompaniesList(userCompanies));
      dispatch(setOk());
    } catch (error) {
      dispatch(setOk());
      console.log("Redux: company: user companies fail", error);
    }
  }
)