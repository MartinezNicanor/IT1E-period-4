import React from 'react';
import './css/Login.css';
import Input from './components/Input.js';
import Logo from './components/FullLogo.js';
import Link from "./components/Link";
import Button from "./components/Button";

    function Login() {
        return (
            <>
                <Logo />
                <LoginBox />
            </>
        )
    }

    const LoginBox = () => {

        return (
            <div className = {"loginBox"}>
                <form className={"loginBox"} /*onSubmit={handleLogin}*/ >
                    <div className = {"emailBox"}>
                        <Input label={"Email:"} photo={"email"}/>
                    </div>

                    <div className = {"passwBox"}>
                        <Input label={"Password:"} photo={"lock"} />
                    </div>

                    <div className={"links"}>
                        <Link route={"#"} label={"Forgot your password?"}/>
                        <Link route={"#"} label={"New user? Sign up"}/>
                    </div>

                    <Button label={"Login"}/>
                </form>
            </div>
        );
    }

    export default Login;