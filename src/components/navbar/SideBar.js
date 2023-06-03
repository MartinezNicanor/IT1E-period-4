import React from 'react'
import styled from "styled-components"
import { SideBarData } from './SideBarData';
import SubMenu from './SubMenu';
import Logo from './Logo';
import "./logo.css";
import UsersName from './UsersName';
import "./usersName.css";
import Logout from './Logout';
import "./logout.css";


const Nav = styled.nav`
    font-family: Montserrat;
    width: 15vw;
    height: 98vh;
    padding: 1vh;
    position: fixed;
    margin-left: 3vh;
`;

const SideBar = () => {
    return (
        <>
            <Nav>
                <div className="logoContainer">
                    <Logo />
                </div>
                <UsersName />
                {SideBarData.map((item, index) => {
                    return <SubMenu item={item} key={index} />
                })}
                <Logout />
            </Nav>
        </>
    );
}

export default SideBar;
