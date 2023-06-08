import React from "react";
import "./Input.css"

const Input = ({label}) => {
    return (
        <div className="enterTitleBox">
            <h2>Enter a title</h2>
            <input className="input"
                type={"text"}
                placeholder={label}
            />
        </div>
    );
}

export default Input;

