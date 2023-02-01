import { useDispatch, useSelector } from "react-redux"
import { redirect } from "react-router-dom";
import { setToken } from "redux/slices/auth";

export default function LogOutBtn() {
  const { auth } = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const logOut = () => {
    dispatch(setToken(null))
    return redirect("/signin")
  }
  if (auth) {
    return <button onClick={logOut}>
      Log Out
    </button>
  } else {
    return <div></div>
  }

}
