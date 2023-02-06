import { createAsyncThunk } from "@reduxjs/toolkit";
import { companyDelete } from "api";
import { setEditStatus, setLoading } from "redux/slices/app";
import { removeCompany } from "redux/slices/companies";


export const deleteCompany = createAsyncThunk(
  'companies/deleteCompany',
  async (id, { dispatch, getState }) => {
    dispatch(setLoading(true));
    const { access_token: token } = getState().auth;

    try {
      const response = await companyDelete({ id, token });
      if (response.ok) {
        dispatch(removeCompany(id));
        dispatch(setEditStatus(false))
      } else {
        const { message } = await response.json()
        throw new Error(message)
      }
    } catch (error) {
      console.log("Redux: company: delete ", error);
      return error
    }

    dispatch(setLoading(false));
  }
)