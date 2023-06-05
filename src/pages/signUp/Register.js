import React from "react";
import { useNavigate } from 'react-router-dom';
import './css/register.css';
import Logo from "./components/FullLogo.js";
import Input from "./components/Input.js";
import Button from './components/Button';
import Link from './components/Link.js';

function Register() {
    return (
        <>
            <div className = {"container"}>
                <div className = "logoBox">
                   <Logo />
                </div>

                <RegisterBox />
            </div>
        </>
    )
}

const RegisterBox = () => {
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        navigate('/login');
    }
    return (
        <form className = {"registerBox"} onSubmit={handleSubmit}>
            <div className = {"topFlex"}>
                <div className = {"leftFlex"}>
                    <Input label={"First Name:"} photo={"person"} />
                    <Input label={"Email:"} photo={"email"} />
                    <Input label={"Password:"} photo={"lock"} />
                </div>

                <div className = {"rightFlex"}>
                    <Input label={"Last Name:"} photo={"person"} />
                    <Input label={"Confirm email:"} photo={"email"} />
                    <Input label={"Confirm password:"} photo={"lock"} />
                </div>
            </div>

            <div className = {"bottomFlex"}>
                <Button type={"signUp"} />
                <Link />
            </div>
        </form>
    );
}

export default Register;