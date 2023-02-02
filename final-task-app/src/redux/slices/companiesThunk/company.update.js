import { createAsyncThunk } from "@reduxjs/toolkit";
import { companyUpdate } from "api";
import { setCompanyErrorMessage, setUpdatedCompany } from "../companies";
import { setEditStatus, setFail, setOk } from "../loading";

export const updateCompany = createAsyncThunk(
  'companies/updateCompany',
  async ({ id, ...data }, { dispatch, getState }) => {
    const { access_token: token } = getState().auth;
    try {
      const response = await companyUpdate({ id, token, body:data });
      if (response.ok) {
        const updatedCompany = await response.json();
        dispatch(setUpdatedCompany({ id, updatedCompany }))
        dispatch(setEditStatus(false))
        dispatch(setOk());
        dispatch(setCompanyErrorMessage(""));
      } else {
        console.log(await response.json());
        dispatch(setFail());
        dispatch(setOk());
      }
    } catch (error) {
      dispatch(setFail());
      console.log("Redux: company: update fail", error);
      dispatch(setOk());
    }
  }
)