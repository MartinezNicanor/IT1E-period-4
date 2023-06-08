import React from "react";
import "./Button.css"

const Button = ({label}) => {
    return (
        <div className="divButton">
            <input className="button"
                   type={"button"}
                   value={"Save"}
            />
        </div>
    );
}

export default Button;