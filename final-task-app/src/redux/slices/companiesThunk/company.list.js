import { createAsyncThunk } from "@reduxjs/toolkit";
import { companyAll } from "api";
import { setCompaniesList } from "../companies";
import { setFail, setOk } from "../loading";

export const userCompanies = createAsyncThunk(
  'companies/userCompanies',
  async (_, { dispatch, getState }) => {
    const { access_token: token } = getState().auth;
    try {
      const response = await companyAll(token);
      const userCompanies = await response.json();
      dispatch(setCompaniesList(userCompanies));
      dispatch(setOk());
    } catch (error) {
      dispatch(setFail());
      console.log("Redux: company: user companies fail", error);
      dispatch(setOk());
    }
  }
)