import React from "react";
import "./Add.css";
import { MdOutlineAddToPhotos } from "react-icons/md"
import { Link } from "react-router-dom";

const Add = () => {
    return (
        <Link to={"/flashcards/new-set"}>
            <div className="add">
                <MdOutlineAddToPhotos color="white" size={90}/>
                <p>Add</p>
            </div>
        </Link>
        
    );
}

export default Add;