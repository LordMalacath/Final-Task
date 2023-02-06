import jwtDecode from "jwt-decode";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { profileById } from "api";
import { setAuth, setToken } from "redux/slices/auth";
import { setLoading } from "redux/slices/app";
import { setInfo } from "redux/slices/user";

export const getUserById = createAsyncThunk(
  'user/getUserById',
  async (token, { dispatch }) => {
    dispatch(setLoading(true));
    const { sub: id } = jwtDecode(token);

    try {
      const response = await profileById({ id, token });
      const user = await response.json();
      if (response.ok) {
        dispatch(setToken(token));
        dispatch(setAuth(true));
        dispatch(setInfo(user));
      } else {
        const { message } = await response.json()
        throw new Error(message)
      }
    } catch (error) {
      console.log("Redux: get user by id", error);
      return error
    }
    
    dispatch(setLoading(false));
  }
)