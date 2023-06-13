import React from 'react'
import * as AiIcons from 'react-icons/ai';
import "./logout.css";


function Logout() {
  return (
    <>
        <div className = "logOutBtn">
            <button><AiIcons.AiOutlinePoweroff/> Log out</button>
        </div> 
    </>
  )
}

export default Logout