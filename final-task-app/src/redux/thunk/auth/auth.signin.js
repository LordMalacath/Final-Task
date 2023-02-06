import { createAsyncThunk } from "@reduxjs/toolkit";
import { authSignin } from "api";
import { setAuth, setToken } from "redux/slices/auth";
import { setCompaniesList } from "redux/slices/companies";
import { setErrorMessage, setLoading } from "redux/slices/app";
import { setInfo } from "redux/slices/user";
import { autoLogOut } from "./auth.logout";


export const signin = createAsyncThunk(
  'auth/signin',
  async (data, { dispatch }) => {
    dispatch(setLoading(true));

    try {
      const response = await authSignin(data)
      if (response.ok) {
        const { userProfile, companies, access_token } = await response.json();
        dispatch(setInfo(userProfile));
        dispatch(setCompaniesList(companies));
        dispatch(setToken(access_token));
        dispatch(setAuth(true));
        dispatch(autoLogOut());
        dispatch(setErrorMessage(''));
      } else {
        const { message } = await response.json()
        dispatch(setErrorMessage(message));
        throw new Error(message)
      }
    } catch (error) {
      console.log("Redux: signin", error);
    }

    dispatch(setLoading(false));
  }
)