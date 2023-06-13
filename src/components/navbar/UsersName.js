import React from 'react'
import * as BsIcons from 'react-icons/bs';
import "./usersName.css";

function UsersName() {
    return (
        <>
            <div className="usersName">
                {/* will insert users name dynamically, using placeholder for now*/}
                <BsIcons.BsFillPersonFill /> Random User
            </div>
        </>
    )
}

export default UsersName