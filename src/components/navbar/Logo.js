import React from 'react'
import logo from '../../assets/images/logo.png';
import "./logo.css";

function Logo() {
    return (
        <>
            <div className="logo">
                <img src={logo} alt="Logo" />
            </div>
        </>
    )
}

export default Logo