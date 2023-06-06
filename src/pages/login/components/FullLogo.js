import React from "react";
import logo from "./../../../assets/images/logo-black.png";
import "./../css/components.css";


function Logo() {
    return (
        <>
            <div className = "logoBox">
                <img src={logo} className="logo" alt="Logo" />
            </div>
        </>
    )
}

export default Logo;