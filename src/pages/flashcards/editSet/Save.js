import React from "react";
import "./Save.css"

const Save = ({label}) => {
    return (
        <div className="divSaveButton">
            <input className="saveButton"
                   type={"button"}
                   value={"Save"}
            />
        </div>
    );
}

export default Save;