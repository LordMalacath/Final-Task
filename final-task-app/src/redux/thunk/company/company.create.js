import { createAsyncThunk } from "@reduxjs/toolkit";
import { companyCreate } from "api";
import { setCreatedCompany } from "redux/slices/companies";
import { setErrorMessage, setLoading } from "redux/slices/app";

export const createCompany = createAsyncThunk(
  'companies/createCompany',
  async (body, { dispatch, getState }) => {
    dispatch(setLoading(true));

    const { access_token: token } = getState().auth;
    try {
      const response = await companyCreate(body, token);
      if (response.ok) {
        const createdCompany = await response.json();
        dispatch(setCreatedCompany(createdCompany));
        dispatch(setErrorMessage(''));
      } else {
        const { message } = await response.json();
        dispatch(setErrorMessage(message));
        throw new Error(message)
      }
    } catch (error) {
      console.log("Redux: company: create ", error);
    }

    dispatch(setLoading(false));
  }
)