import { useDispatch, useSelector } from "react-redux";
import { setEditStatus } from "redux/slices/user"
import UserUpdateForm from "./components/UserUpdateForm";
import "./Profile.scss"

export default function Profile() {
  const { info: userInfo, editStatus: edit } = useSelector(state => state.user);
  const dispatch = useDispatch()
  const handleClick = () => {
    dispatch(setEditStatus(true))
  }

  return (
      <div className="profile">
        {!edit ? <div className="user">
          <div className="user__credentials">
            <span className="user__credentials--name">{userInfo.name}</span>
            <span className="user__credentials--lastName">{userInfo.lastName}</span>
            <span className="user__credentials--nickName">"{userInfo.nickName}"</span>
          </div>
          <div className="user__position">{userInfo.position}</div>
          <div className="user__contacts">
            <div className="user__contacts--phone">{userInfo.phone}</div>
            <div className="user__contacts--email">{userInfo.email}</div>
          </div>
          <div className="user__description">{userInfo.description}</div>
        </div>
          :
          <UserUpdateForm userInfo={userInfo} />}
        {!edit ? <button onClick={handleClick}>Edit</button> : ""}
      </div>
  )
}
