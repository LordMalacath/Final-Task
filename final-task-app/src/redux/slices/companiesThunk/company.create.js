import { createAsyncThunk } from "@reduxjs/toolkit";
import { companyCreate } from "api";
import { setCreatedCompany } from "../companies";
import { setFail, setOk } from "../loading";

export const createCompany = createAsyncThunk(

  'companies/createCompany',
  async (body, { dispatch, getState }) => {
    const { access_token: token } = getState().auth;
    try {
      const response = await companyCreate({ body, token });
      const createdCompany = await response.json();
      dispatch(setCreatedCompany(createdCompany));
      dispatch(setOk());
    } catch (error) {
      dispatch(setFail());
      console.log("Redux: company: create fail", error);
      dispatch(setOk());
    }
  }
)