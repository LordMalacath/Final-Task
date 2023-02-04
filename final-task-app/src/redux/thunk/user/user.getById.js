import { createAsyncThunk } from "@reduxjs/toolkit";
import { profileById } from "api";
import jwtDecode from "jwt-decode";
import { setAuth, setErrorMessage, setToken } from "redux/slices/auth";
import { setLoading, setOk } from "redux/slices/loading";
import { setInfo } from "redux/slices/user";

export const getUserById = createAsyncThunk(
  'user/getUserById',
  async (token, { dispatch }) => {
    dispatch(setLoading());
    const { sub: id } = jwtDecode(token);
    try {
      const response = await profileById({ id, token });
      const user = await response.json();
      if (response.ok) {
        dispatch(setToken(token));
        dispatch(setAuth(true));
        dispatch(setInfo(user));
        dispatch(setOk());
      } else {
        const { message } = await response.json()
        dispatch(setErrorMessage(message));
        throw new Error(message)
      }
    } catch (error) {
      dispatch(setOk());
      console.log("Redux: get user by id =>", error)
    }
  }
)