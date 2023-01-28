import { Link } from "react-router-dom"
import "./SideBar.scss"

export default function SideBar() {
    return (
        <aside>
            <Link to="/company/create">Create company1</Link>
            <Link to="/company/create">Create company2</Link>
            <Link to="/company/create">Create company3</Link>
            <Link to="/company/create">Create company4</Link>
            <Link to="/company/create">Create company5</Link>
            <Link to="/company/create">Create company6</Link>
            <Link to="/company/create">Create company7</Link>
            <Link to="/company/create">Create company8</Link>
            <Link to="/company/create">Create company9</Link>
        </aside>
    )
}
