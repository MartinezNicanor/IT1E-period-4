import React from 'react'
import * as AiIcons from 'react-icons/ai';
import "./logout.css";
import {Link} from "react-router-dom";


const linkStyle = {
    textDecoration: "none",
    color: 'black'
    
  };

function Logout() {
  return (
    <>
        <div className = "logOutBtn">
            <button className='btnForLogout'><AiIcons.AiOutlinePoweroff/> <Link to="/signin" style={linkStyle}>Log out</Link></button>
        </div> 
    </>
  )
}

export default Logout