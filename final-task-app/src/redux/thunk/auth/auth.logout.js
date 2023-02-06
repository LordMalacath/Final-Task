import { createAsyncThunk } from "@reduxjs/toolkit";
import jwtDecode from "jwt-decode";
import Cookies from "universal-cookie";
import { whileDatePromise } from "scripts/whileDatePromise";
import { resetStore, setLoading } from "redux/slices/app";


const cookies = new Cookies();

export const autoLogOut = createAsyncThunk(
  'auth/autoLogout',
  async (_, { dispatch }) => {
    const tokenDecoded = jwtDecode(cookies.get('jwt_token'));
    const tokenExpDate = tokenDecoded.exp * 1000;
    await whileDatePromise(tokenExpDate, 2000, () => { dispatch(logOut()) })
  }
)

export const logOut = createAsyncThunk(
  'auth/logOut',
  async (_, { dispatch }) => {
    dispatch(setLoading(true))
    cookies.remove('jwt_token');
    dispatch(resetStore());
  }
)