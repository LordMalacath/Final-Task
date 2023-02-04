import { useDispatch, useSelector } from "react-redux";
import { setEditStatus } from "redux/slices/loading";
import UserUpdateForm from "./components/UserUpdateForm";
import "./Profile.scss"

export default function Profile() {
  const dispatch = useDispatch()
  const { user: { info: userInfo }, loading: { editStatus: edit } } = useSelector(state => state);
  const handleEdit = () => { dispatch(setEditStatus(true)) }

  return (
    <div className="page">
      {!edit ?
        <div className="user">
          <div className="user__name">
            <span>{userInfo.name}</span>
            <span>{userInfo.lastName}</span>
            <span>"{userInfo.nickName}"</span>
          </div>
          <div className="user__position">Position: {userInfo.position}</div>
          <div className="user__email">{userInfo.email}</div>
          <div className="user__phone">{userInfo.phone}</div>
          <div className="user__description">{userInfo.description}</div>
          <button className="user__edit" onClick={handleEdit}>Edit</button>
        </div>
        :
        <UserUpdateForm userInfo={userInfo} />
      }
    </div>
  )
}
