import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'

export default function Nav() {
    const { role } = useSelector(state => state.user.info);

    return (
        <nav>
            {role === "admin" ?
                <Link to="/admin">Admin</Link>
                :
                <Link to="/profile">User</Link>
            }
            <Link to="/company/all">Companies</Link>
        </nav>
    )
}
