import { useDispatch } from "react-redux"
import { redirect } from "react-router-dom";
import { setAuth } from "redux/slices/auth";

export default function LogOutBtn() {
    const dispatch = useDispatch();
    const logOut = () => {
        dispatch(setAuth(false));
        return redirect("/signin")
    }
    return (
        <button onClick={logOut}>
            Log Out
        </button>
    )
}
