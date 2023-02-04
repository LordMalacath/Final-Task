import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { getUserById } from "redux/thunk/user/user.getById";
import Cookies from "universal-cookie";

export function ProtectedRoute({ children }) {
  const { auth } = useSelector(store => store.auth);
  const dispatch = useDispatch();
  const cookie = new Cookies();
  const token = cookie.get('jwt_token');
  if (!token) {
    return <Navigate to="/" />
  } else if (token && auth) {
    return children
  } else {
    dispatch(getUserById(token))
  }
};