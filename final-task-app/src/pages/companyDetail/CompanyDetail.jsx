import CreateCompany from "pages/createCompany/CreateCompany";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom"
import { setEditStatus } from "redux/slices/app";
import "./CompanyDetail.scss"

export default function CompanyDetail() {
  const location = useLocation();
  const dispatch = useDispatch();
  const { companies: { list }, app: { editStatus: edit } } = useSelector(state => state);
  const companyId = location.pathname.split('/').at(-1);
  const {
    id,
    name,
    adress,
    description,
    numberOfEmployees,
    serviceOfActivity,
    type
  } = list.find(element => element.id === companyId);
  const handleClick = () => {
    dispatch(setEditStatus(true));
  }

  return (
    <div className="page">
      {!edit ?
        <div className="companyDetail">
          <div className="companyDetail__name">{name}</div>
          <div className="companyDetail__type">Type: {type}</div>
          <div className="companyDetail__service">Service of activity: {serviceOfActivity}</div>
          <div className="companyDetail__adress">Adress: {adress}</div>
          <div className="companyDetail__numberOfEmployee">Number of employee: {numberOfEmployees}</div>
          <div className="companyDetail__description">{description}</div>
          <button className="companyDetail__button" onClick={handleClick}>Edit</button>
        </div>
        :
        <CreateCompany formType={"Edit"} companyData={{ id, name, adress, description, numberOfEmployees, serviceOfActivity, type }} />
      }
    </div>
  )
}