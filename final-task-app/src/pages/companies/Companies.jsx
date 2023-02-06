import { useDispatch, useSelector } from "react-redux";
import { Link, } from "react-router-dom";
import { getSortedList } from "redux/thunk/company/company.list.sorted";
import "./Companies.scss"

export default function Companies() {
  const { list, sort } = useSelector(state => state.companies);
  const dispatch = useDispatch();
  const handleClick = (sortBy) => {
    if (sort !== sortBy) {
      dispatch(getSortedList(sortBy));
    }
  };

  return (
    <div className="page">
      <ul className="companiesList">
        <li className="companiesList__tittle">Companies</li>
        <li className="companiesList__sort">
          <button
            className={sort === "name" ?
              "companiesList__sort__name active"
              :
              "companiesList__sort__name"}
            onClick={() => handleClick("name")}
          >
            Name
          </button>
          <button
            className={sort === "serviceOfActivity" ?
              "companiesList__sort__service active"
              :
              "companiesList__sort__service"}
            onClick={() => handleClick("serviceOfActivity")}
          >
            Service
          </button>
        </li>
        {
          list.map(({ name, serviceOfActivity, id }, index) => (
            <li className="companiesList__company"
              key={index}
            >
              <div className="companiesList__company__name">{name}</div>
              <div className="companiesLIst__company__service">{serviceOfActivity}</div>
              <Link className="detail" to={`/company/detail/${id}`}>Details</Link>
            </li>
          ))
        }
      </ul>
    </div>
  )
}
