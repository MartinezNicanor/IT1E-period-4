import React from 'react'
import * as BsIcons from 'react-icons/bs';
import "./usersName.css";
import { Link } from 'react-router-dom';


function UsersName() {
    return (
        <>
            <div className="usersName">
                {/* will insert users name dynamically, using placeholder for now*/}
                <BsIcons.BsFillPersonFill /> <Link to="/profile">Random User</Link>
            </div>
        </>
    )
}

export default UsersName