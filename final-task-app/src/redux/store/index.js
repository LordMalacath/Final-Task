import { configureStore } from "@reduxjs/toolkit";
import companiesReducer from "redux/slices/companies"
import userReducer from "redux/slices/user"
import authReducer from "redux/slices/auth"
import loadingReducer from "redux/slices/loading"

export default configureStore({
  reducer: {
    companies: companiesReducer,
    user: userReducer,
    auth: authReducer,
    loading: loadingReducer,
  }
})