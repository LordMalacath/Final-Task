import { createAsyncThunk } from "@reduxjs/toolkit";
import { companyAllSorted } from "api";
import { setCompaniesList, setSort } from "redux/slices/companies";



export const getSortedList = createAsyncThunk(
  'companies/getSortedList',
  async (sortBy, { dispatch, getState }) => {
    const { access_token: token } = getState().auth;
    dispatch(setSort(sortBy));

    try {
      const response = await companyAllSorted(token, sortBy);
      if (response.ok) {
        const sortedList = await response.json();
        dispatch(setCompaniesList(sortedList));
      } else {
        const { message } = await response.json()
        throw new Error(message)
      }
    } catch (error) {
      console.log("Redux: company: sorted list ", error);
      return error
    }
  }
)