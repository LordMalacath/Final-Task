import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setSort } from "redux/slices/companies";
import "./Companies.scss"

export default function Companies() {
    const { list, sort } = useSelector(state => state.companies);
    const dispatch = useDispatch();
    const handleClick = (select) => {
        dispatch(setSort(select))
    };
    return (
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
                    className={sort === "service" ?
                        "companiesList__sort__service active"
                        :
                        "companiesList__sort__service"}
                    onClick={() => handleClick("service")}
                >
                    Service
                </button>
            </li>
            {
                list.map(({ name, service }, index) => (
                    <li className="companiesList__company"
                        key={index}
                    >
                        <div className="companiesList__company__name">{name}</div>
                        <div className="companiesLIst__company__service">{service}</div>
                        <Link className="detail" to={"/company/detail"}>Details</Link>
                    </li>
                ))
            }
        </ul>
    )
}
