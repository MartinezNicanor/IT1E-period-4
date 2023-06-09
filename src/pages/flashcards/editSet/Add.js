import React from "react";
import "./Add.css"

const Add = ({label}) => {
    return (
        <div className="divAddButton">
            <input className="addButton"
                   type={"button"}
                   value={"Add new flash card"}
            />
        </div>
    );
}

export default Add;