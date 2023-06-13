import React from "react";
import "./Definition.css"

const Definition = ({label}) => {
    return (
        <div className="definitionBox">
            <h2>Definition</h2>
            <input className="inputDefinition"
                   type={"textarea"}
                   placeholder={label}
            />
        </div>
    );
}

export default Definition;
