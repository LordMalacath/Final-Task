import { useSelector } from "react-redux"
import { Link} from "react-router-dom";
import "./SideBar.scss"

export default function SideBar() {
  const { auth } = useSelector(state => state.auth);

  return (
    <aside style={auth ? { display: "flex" } : {}}>
      <Link to={'/profile'}>Profile</Link>
      <Link to={'company/'}>My companies</Link>
      <Link to={'/company/create'}>Create company</Link>
    </aside>
  )
}
