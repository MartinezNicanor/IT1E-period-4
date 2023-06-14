import React from 'react';
import './Login.css';
import { useState } from "react";
import { Link } from 'react-router-dom'
import emailIcon from './../../assets/images/letterPhoto.png';
// import profile from './../../../assets/images/personPhoto.png';
import lockIcon from './../../assets/images/lockPhoto.png';
import Logo from "../../components/FullLogo/FullLogo.js";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault()

        console.log(email, password);
    }

    return (
        <div className="loginContainer">
            <Logo />
            <form className="loginForm" onSubmit={handleSubmit}>
                <label>Email address:</label>
                <div className="loginInputContainer">
                    <img src={emailIcon} alt="" className="inputIcon" />
                    <input 
                        type="email" 
                        onChange={(e) => setEmail(e.target.value)} 
                        value={email} 
                    />
                </div>
                <label>Password:</label>
                <div className="loginInputContainer">
                    <img src={lockIcon} alt="" className="inputIcon" />
                    <input
                        type="password" 
                        onChange={(e) => setPassword(e.target.value)} 
                        value={password} 
                    />
                </div>
                <Link to="/register" className="registerLink">New user? <strong>Sign Up</strong></Link>
                <button className="loginButton"><strong>Log in</strong></button>
            </form>
        </div>
    );
}
 
export default Login;