import { Link } from "react-router-dom"
import "./SideBar.scss"

export default function SideBar() {
  return (
    <aside>
      <Link to="/company/create">Create company</Link>
    </aside>
  )
}
