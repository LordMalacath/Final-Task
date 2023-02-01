import LogOutBtn from "components/logoutBtn/LogOutBtn"
import Nav from "./components/nav/Nav"
import "./Header.scss"

export default function Header() {

  return (
    <header>
      <span>TeamCamp</span>
      <div>
        <Nav />
      </div>
      <LogOutBtn />
    </header>
  )
}
