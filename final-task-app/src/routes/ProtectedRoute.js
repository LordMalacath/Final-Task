import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export function ProtectedRoute({ children }) {
  const { auth } = useSelector(store => store.auth);

  if (!auth) {
    return <Navigate to="/" />
  }
  return children
};