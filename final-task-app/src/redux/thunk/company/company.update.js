import { createAsyncThunk } from "@reduxjs/toolkit";
import { companyUpdate } from "api";
import { setEditStatus, setLoading } from "redux/slices/app";
import { setUpdatedCompany } from "redux/slices/companies";


export const updateCompany = createAsyncThunk(
  'companies/updateCompany',
  async ({ id, ...data }, { dispatch, getState }) => {
    dispatch(setLoading(true));
    const { access_token: token } = getState().auth;
    
    try {
      const response = await companyUpdate({ id, token, body: data });
      if (response.ok) {
        const updatedCompany = await response.json();
        dispatch(setUpdatedCompany({ id, updatedCompany }))
        dispatch(setEditStatus(false))
      } else {
        const { message } = await response.json()
        throw new Error(message)
      }
    } catch (error) {
      console.log("Redux: company: update ", error);
      return error
    }
    
    dispatch(setLoading(false));
  }
)