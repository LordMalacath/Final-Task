import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { userCompanies } from 'redux/slices/companies';
import { setLoading } from 'redux/slices/loading';

export default function Nav() {
  const role = "user";
  const { access_token } = useSelector(state => state.auth);
  const { list } = useSelector(state => state.companies);
  const dispatch = useDispatch();
  const handleClick = () => {
    if (list.length === 0) {
      dispatch(setLoading());
      dispatch(userCompanies(access_token));
    }
  }

  return (
    <nav>
      {role && role === "admin" ?
        <Link to={'/admin'}>Admin</Link>
        :
        <Link to={'/profile'}>Admin</Link>
      }
      <Link to={'/company'} onClick={handleClick}>Company</Link>
    </nav>
  )
}
