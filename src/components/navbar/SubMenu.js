import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";
import "./subMenu.css";


const SideBarLink = styled(Link)`
    display: flex;
    color: #3E76D5;
    text-decoration: none;
    justify-content: space-between;
    align-items: center;
    padding: 0.3vh;
    font-size: 1.3vw;

    
    &:hover {
      color: #6aa0fc;
      cursor: pointer;
      font-size: 1.4vw;
    }
`;
const SideBarLabel = styled.span`
    margin-left: 2vh;  
`;

const DropdownLink = styled(Link)`
  display: flex;
  color: #3E76D5;
  text-decoration: none;
  justify-content: space-between;
  align-items: center;
  padding: 0.3vh;
  font-size: 1.1vw;
  margin-left: 2.3vw;

  &:hover {
  color: #6aa0fc;
  cursor: pointer;
  font-size: 1.2vw;
}
`

const SubMenu = ({ item }) => {
    const [subNav, setSubNav] = useState(false)

    const showSubNav = () => setSubNav(!subNav)
    return (
        <>
            <SideBarLink to={item.path} onClick={item.subNav && showSubNav}>
                <div className="navTopics">
                    {item.icon}
                    <SideBarLabel>{item.title}</SideBarLabel>
                </div>
                <div>
                    {item.subNav && subNav
                        ? item.iconOpened
                        : item.subNav
                            ? item.iconClosed
                            : null}
                </div>
            </SideBarLink>
            {subNav && item.subNav.map((item, index) => {
                return (
                    <DropdownLink to={item.path} key={index}>
                        {item.icon}
                        <SideBarLabel>{item.title}</SideBarLabel>
                    </DropdownLink>
                )
            })}
        </>
    )
}

export default SubMenu