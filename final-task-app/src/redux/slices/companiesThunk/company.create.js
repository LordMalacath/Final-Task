import { createAsyncThunk } from "@reduxjs/toolkit";
import { companyCreate } from "api";
import { setCreatedCompany } from "../companies";
import { setLoading, setOk } from "../loading";

export const createCompany = createAsyncThunk(

  'companies/createCompany',
  async (body, { dispatch, getState }) => {
    dispatch(setLoading());
    const { access_token: token } = getState().auth;
    try {
      const response = await companyCreate({ body, token });
      const createdCompany = await response.json();
      dispatch(setCreatedCompany(createdCompany));
      dispatch(setOk());
    } catch (error) {
      console.log("Redux: company: create fail", error);
      dispatch(setOk());
    }
  }
)