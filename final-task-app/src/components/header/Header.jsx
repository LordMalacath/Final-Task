import LogOutBtn from "components/logoutBtn/LogOutBtn"
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { autoLogOut } from "redux/thunk/auth/auth.logout";
import "./Header.scss"

export default function Header() {
  const dispatch = useDispatch();
  const { auth } = useSelector(state => state.auth);
  useEffect(() => {
    if (auth) {
      dispatch(autoLogOut())
    }
  }, [auth])

  return (
    <header>
      <span>TeamCamp</span>
      <LogOutBtn />
    </header>
  )
}
