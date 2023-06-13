import React from "react";
import "./../css/components.css";
import email from './../../../assets/images/personPhoto.png';
import profile from './../../../assets/images/letterPhoto.png';
import lock from './../../../assets/images/lockPhoto.png';

const Input = ({label, photo}) => {
        if(photo === "email") {
            return(
                <>
                    <label htmlFor={"email"} className={"label"}>{label}</label>
                    <div className={"inputBox"}>
                        <img src={email} className={"inputPhoto"} alt={""}/>
                        <input type={"email"} className={"input"} name={"email"}/>
                    </div>
                </>
            );
        } else if(photo === "person") {
            return(
                <>
                    <label htmlFor={"nameInput"} className={"label"}>{label}</label>
                    <div className={"inputBox"}>
                        <img src={profile} className={"inputPhoto"} alt={""}/>
                        <input type={"text"} className={"input"} name={"nameInput"}/>
                    </div>
                </>
            );
        } else if(photo === "lock") {
            return(
                <>
                    <label htmlFor={"passwordInput"} className={"label"}>{label}</label>
                    <div className={"inputBox"}>
                        <img src={lock} className={"inputPhoto"} alt={""}/>
                        <input type={"text"} className={"input"} name={"passwordInput"}/>
                    </div>
                </>
            );
        }
}

export default Input;