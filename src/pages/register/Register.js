import React from 'react';
import './Register.css';
import { useState } from "react";
import { Link } from 'react-router-dom'
import emailIcon from './../../assets/images/letterPhoto.png';
import profileIcon from './../../assets/images/personPhoto.png';
import lockIcon from './../../assets/images/lockPhoto.png';
import Logo from "../../components/FullLogo/FullLogo.js";
import { useRegister } from '../../components/hooks/useRegister';

const Login = () => {
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { register, error, isLoading, errField } = useRegister()

    // turn first and last name first letter into caps
    const firstName = fname.charAt(0).toUpperCase() + fname.slice(1)
    const lastName = lname.charAt(0).toUpperCase() + lname.slice(1)
    
    const handleSubmit = async (e) => {
        e.preventDefault()

        await register(email, password, firstName, lastName)
    }

    return (
        <div className="registerContainer">
            <Logo />
            <form className="registerForm" onSubmit={handleSubmit}>
                <div className="registerInputs">
                    <div className="leftRegisterInputs">
                        <label>First Name:</label>
                        <div className="registerInputContainer">
                            <img src={profileIcon} alt="" className="inputIcon" />
                            <input 
                                type="text" 
                                onChange={(e) => setFname(e.target.value)} 
                                value={fname} 
                            />
                        </div>
                        <label>Last Name:</label>
                        <div className="registerInputContainer">
                            <img src={profileIcon} alt="" className="inputIcon" />
                            <input 
                                type="text" 
                                onChange={(e) => setLname(e.target.value)} 
                                value={lname} 
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
                </div>
                <Link to="/login" className="loginLink">Already have an account? <strong>Log in</strong></Link>
                <button disabled={ isLoading } className="registerButton"><strong>Sign up</strong></button>
                {error && <div className="authError">{ errField.charAt(0).toUpperCase() + errField.slice(1) + ": " + error }</div>}
            </form>
        </div>
    );
}
 
export default Login;