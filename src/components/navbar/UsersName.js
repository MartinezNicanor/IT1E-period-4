import React from 'react'
import * as BsIcons from 'react-icons/bs';
import "./usersName.css";
import { Link } from 'react-router-dom';
import { useAuthContext } from '../hooks/useAuthContext';
import jwt_decode from "jwt-decode";


function UsersName() {
    const { user } = useAuthContext()
    if (user) {
        const token = jwt_decode(user.token)

        const firstName = token.firstName.charAt(0).toUpperCase()
        const lastName = token.lastName.charAt(0).toUpperCase() + token.lastName.slice(1)

        return (
            <>
                <div className="usersName">
                    {/* will insert users name dynamically, using placeholder for now*/}
                    <BsIcons.BsFillPersonFill /> <Link to="/profile">{ firstName }. { lastName }</Link>
                </div>
            </>
        )
    }
}

export default UsersName