import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { userCompanies } from 'redux/slices/companiesThunk/company.list';
import { setLoading } from 'redux/slices/loading';

export default function Nav() {
  const role = "user";
  const { list } = useSelector(state => state.companies);
  const dispatch = useDispatch();
  const handleClick = () => {
    if (list.length === 0) {
      dispatch(setLoading());
      dispatch(userCompanies());
    }
  }

  return (
    <nav>
      {role && role === "admin" ?
        <Link to={'/admin'}>Admin</Link>
        :
        <Link to={'/profile'}>User</Link>
      }
      <Link to={'/company'} onClick={handleClick}>Company</Link>
    </nav>
  )
}
