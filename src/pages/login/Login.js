import React from 'react';
import './Login.css';
import { useState } from "react";
import { Link } from 'react-router-dom'
import emailIcon from './../../assets/images/letterPhoto.png';
import lockIcon from './../../assets/images/lockPhoto.png';
import Logo from "../../components/FullLogo/FullLogo.js";
import { useLogin } from '../../components/hooks/useLogin';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login, error, isLoading } = useLogin()

    

    const handleSubmit = async (e) => {
        e.preventDefault()

        await login(email, password)
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
                <button className="loginButton" disabled={ isLoading }><strong>Log in</strong></button>
                {error && <div className="authError">{ error }</div>}
            </form>
        </div>
    );
}
 
export default Login;