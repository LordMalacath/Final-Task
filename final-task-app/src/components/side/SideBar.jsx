import LogOutBtn from "components/logoutBtn/LogOutBtn";
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";
import "./SideBar.scss"

export default function SideBar() {
  const { auth } = useSelector(state => state.auth);
  const redirect = useNavigate();
  const handleProfile = () => { redirect('/profile') };
  const handleCompanies = () => { redirect('company/') };
  const handleCreate = () => { redirect('/company/create') };


  return (
    <aside style={auth ? { display: "flex" } : {}}>
      <button onClick={handleProfile}>Profile</button>
      <button onClick={handleCompanies} >My companies</button>
      <button onClick={handleCreate}>Create company</button>
      <LogOutBtn/>
    </aside>
  )
}
