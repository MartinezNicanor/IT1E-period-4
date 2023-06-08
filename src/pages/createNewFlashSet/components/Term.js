import React from "react";
import "./Term.css"

const Term = ({label}) => {
    return (
        <div className="termBox">
            <h2>Term</h2>
            <input className="termInput"
                type={"text"}
                placeholder={label}
            />
        </div>
    );
}

export default Term;

