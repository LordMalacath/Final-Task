import { createAsyncThunk } from "@reduxjs/toolkit";
import { companyDelete } from "api";
import { removeCompany } from "../companies";
import { setEditStatus, setLoading, setOk } from "../loading";

export const deleteCompany = createAsyncThunk(
  'companies/deleteCompany',
  async (id, { dispatch, getState }) => {
    dispatch(setLoading())
    const { access_token: token } = getState().auth;
    try {
      const response = await companyDelete({ id, token });
      if (response.ok) {
        dispatch(removeCompany(id));
        dispatch(setEditStatus(false))
        dispatch(setOk());
      } else {
        throw new Error(response.json())
      }
    } catch (error) {
      console.log("Redux: company: delete fail", error);
      dispatch(setOk());
    }
  }
)