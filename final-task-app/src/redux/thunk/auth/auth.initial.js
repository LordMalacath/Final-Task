import { createAsyncThunk } from "@reduxjs/toolkit";
import { authInitialData } from "api";
import { setAuth, setToken } from "redux/slices/auth";
import { setCompaniesList } from "redux/slices/companies";
import { setLoading } from "redux/slices/app";
import { setInfo } from "redux/slices/user";
import { autoLogOut } from "./auth.logout";

export const getInitialData = createAsyncThunk(
  'auth/initialData',
  async (token, { dispatch }) => {
    dispatch(setLoading(true));

    try {
      const response = await authInitialData(token);
      if (response.ok) {
        const { companies, ...user } = await response.json()
        dispatch(setCompaniesList(companies));
        dispatch(setInfo(user));
        dispatch(setToken(token));
        dispatch(setAuth(true));
        dispatch(autoLogOut());
      } else {
        const { message } = await response.json();
        throw new Error(message);
      }
    } catch (error) {
      console.log("Redux: auth: initial", error);
      return error
    }

    dispatch(setLoading(false));
  }
)