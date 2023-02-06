import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { getInitialData } from "redux/thunk/auth/auth.initial";
import Cookies from "universal-cookie";


export function ProtectedRoute({ children }) {
  const { auth } = useSelector(store => store.auth);
  const dispatch = useDispatch();
  const cookies = new Cookies();
  const token = cookies.get('jwt_token');
  useEffect(() => {
    if (token && !auth) {
      dispatch(getInitialData(token));
    }
  }, [])


  if (!auth) {
    return <Navigate to="/" replace/>
  } else if (auth) {
    return children
  }
};