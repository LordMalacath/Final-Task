import { createAsyncThunk } from "@reduxjs/toolkit";
import { companyAll } from "api";
import { setLoading } from "redux/slices/app";
import { setCompaniesList } from "redux/slices/companies";


export const getUserCompanies = createAsyncThunk(
  'companies/getUserCompanies',
  async (_, { dispatch, getState }) => {
    dispatch(setLoading(true));
    const { access_token } = getState().auth;

    try {
      const response = await companyAll(access_token);
      if (response.ok) {
        const userCompanies = await response.json();
        dispatch(setCompaniesList(userCompanies));
      } else {
        const { message } = await response.json()
        throw new Error(message)
      }
    } catch (error) {
      console.log("Redux: company: user companies", error);
      return error
    }

    dispatch(setLoading(true));
  }
)