import { Link } from "react-router-dom"
import "./SignIn.scss"

export default function SignIn() {
    return (
        <div>
            <Link to={"/signup"} style={{ background: "white" }}>SignUp</Link>
        </div>
    )
}
