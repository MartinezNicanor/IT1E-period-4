import React from 'react'
import logo from '../../assets/images/logo.png';
import "./logo.css";
import { Link } from 'react-router-dom';
import Home from '../../pages/home/Home';

function Logo() {
    return (
        <>
            <div className="logo">
                < Link to ={<Home />}>
                    <img src={logo} alt="Logo" />
                </Link> 
            </div>
        </>
    )
}

export default Logo