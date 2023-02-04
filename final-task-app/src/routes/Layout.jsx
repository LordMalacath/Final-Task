import { Outlet } from "react-router-dom"
import Header from "components/header/Header"
import SideBar from "components/side/SideBar"

const style = {
  display: "flex",
  position: "relative",
  height: "100%",
  width: "100%",
  paddingTop: "72px",
  paddingRight: "40px",
  overflow: "hidden",
  overflowY: "scroll",
};

export function Layout() {
  return (
    <div className="App">
      <Header />
      <div style={style}>
        <SideBar />
        <Outlet />
      </div>
    </div>
  )
}