import React from "react";
import "./Set.css";
import flashcardsImg from "../../../assets/images/flashcards.png";

const Set2 = () => {
    return (
        <div className="set">
            <img src={flashcardsImg} alt={"FlashcardsImg"}/>
            <p>Set 2</p>
        </div>
    );
}

export default Set2;