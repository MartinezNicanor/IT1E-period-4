import React from "react";
import "./Add.css";
import addButton from "../../../assets/images/Add.png"

const Add = () => {
    return (
        <div className="add">
            <img src={addButton} alt={"Add"} />
            <p>Add</p>
        </div>
    );
}

export default Add;