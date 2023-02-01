import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export function ProtectedRoute({ children }) {
  const { access_token } = useSelector(store => store.auth);

  if (!access_token) {
    return <Navigate to="/" />
  }
  return children
};