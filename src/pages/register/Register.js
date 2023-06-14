import React from 'react';
import './Register.css';
import { useState } from "react";
import { Link } from 'react-router-dom'
import emailIcon from './../../assets/images/letterPhoto.png';
// import profile from './../../../assets/images/personPhoto.png';
import lockIcon from './../../assets/images/lockPhoto.png';
import Logo from "../../components/FullLogo/FullLogo.js";

const Login = () => {
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [confirmEmail, setConfirmedEmail] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPass, setconfirmPass] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault()

        console.log(email, password);
    }

    return (
        <div className="registerContainer">
            <Logo />
            <form className="registerForm" onSubmit={handleSubmit}>
                <div className="registerInputs">
                    <div className="leftRegisterInputs">
                        <label>First Name:</label>
                        <div className="registerInputContainer">
                            <img src={emailIcon} alt="" className="inputIcon" />
                            <input 
                                type="text" 
                                onChange={(e) => setFname(e.target.value)} 
                                value={fname} 
                            />
                        </div>
                        <label>Email address:</label>
                        <div className="registerInputContainer">
                            <img src={emailIcon} alt="" className="inputIcon" />
                            <input 
                                type="email" 
                                onChange={(e) => setEmail(e.target.value)} 
                                value={email} 
                            />
                        </div>
                        <label>Password:</label>
                        <div className="registerInputContainer">
                            <img src={lockIcon} alt="" className="inputIcon" />
                            <input
                                type="password" 
                                onChange={(e) => setPassword(e.target.value)} 
                                value={password} 
                            />
                        </div>
                    </div>
                    <div className="rightRegisterInputs">
                        <label>Last Name:</label>
                        <div className="registerInputContainer">
                            <img src={emailIcon} alt="" className="inputIcon" />
                            <input 
                                type="text" 
                                onChange={(e) => setLname(e.target.value)} 
                                value={lname} 
                            />
                        </div>
                        <label>Confirm email address:</label>
                        <div className="registerInputContainer">
                            <img src={emailIcon} alt="" className="inputIcon" />
                            <input 
                                type="email" 
                                onChange={(e) => setConfirmedEmail(e.target.value)} 
                                value={confirmEmail} 
                            />
                        </div>
                        <label>Confirm password:</label>
                        <div className="registerInputContainer">
                            <img src={lockIcon} alt="" className="inputIcon" />
                            <input
                                type="password" 
                                onChange={(e) => setconfirmPass(e.target.value)} 
                                value={confirmPass} 
                            />
                        </div>
                    </div>
                </div>
                <Link to="/login" className="loginLink">Already have an account? <strong>Log in</strong></Link>
                <button className="registerButton"><strong>Sign up</strong></button>
            </form>
        </div>
    );
}
 
export default Login;