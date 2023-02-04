import { createAsyncThunk } from "@reduxjs/toolkit";
import { companyUpdate } from "api";
import { setUpdatedCompany } from "../companies";
import { setEditStatus, setLoading, setOk } from "../loading";

export const updateCompany = createAsyncThunk(
  'companies/updateCompany',
  async ({ id, ...data }, { dispatch, getState }) => {
    dispatch(setLoading());
    const { access_token: token } = getState().auth;
    try {
      const response = await companyUpdate({ id, token, body: data });
      if (response.ok) {
        const updatedCompany = await response.json();
        dispatch(setUpdatedCompany({ id, updatedCompany }))
        dispatch(setEditStatus(false))
        dispatch(setOk());
      } else {
        console.log(await response.json());
        dispatch(setOk());
      }
    } catch (error) {
      console.log("Redux: company: update fail", error);
      dispatch(setOk());
    }
  }
)