import { useDispatch, useSelector } from "react-redux"
import { logOut } from "redux/thunk/auth/auth.logout";

export default function LogOutBtn() {
  const { auth } = useSelector(store => store.auth)
  const dispatch = useDispatch();
  const handleLogOut = () => {
    dispatch(logOut());
  }

  if (auth) {
    return <button className="btn__logout" onClick={handleLogOut}>
      Log Out
    </button>
  } else {
    return
  }
}
