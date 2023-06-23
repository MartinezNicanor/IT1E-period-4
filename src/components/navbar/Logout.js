import React from 'react'
import * as AiIcons from 'react-icons/ai';
import "./logout.css";
import { useLogout } from '../hooks/useLogout';

function Logout() {
    const { logout } = useLogout()
    
    const handleClick = () => {
        logout()
    }

  return (
        <div className = "logOutBtn">
            <button className='btnForLogout' onClick={handleClick}><AiIcons.AiOutlinePoweroff/> Log out</button>
        </div> 
  )
}

export default Logout