import React from 'react'
import { SideBarData } from './SideBarData';
import SubMenu from './SubMenu';
import Logo from './Logo';
import "./logo.css";
import UsersName from './UsersName';
import "./usersName.css";
import Logout from './Logout';
import "./logout.css";
import "./Navbar.css";


const SideBar = () => {
    return (
            <nav>
                <div className="logoContainer">
                    <Logo />
                </div>
                <UsersName />
                {SideBarData.map((item, index) => {
                    return <SubMenu item={item} key={index} />
                })}
                <Logout />
            </nav>
    );
}

export default SideBar;
