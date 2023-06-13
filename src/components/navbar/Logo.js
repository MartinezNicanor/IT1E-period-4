import React from 'react'
import logo from '../../assets/images/logo.png';
import "./logo.css";
import { Link } from 'react-router-dom';

function Logo() {
    return (
        <>
            <div className="logoNavContainer">
                <Link to="/">
                <img src={logo} alt="Logo" className="logoNavbar" />
                </Link>
            </div>
        </>
    )
}

export default Logo