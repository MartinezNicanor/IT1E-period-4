import React from "react";
import "./Set.css";
import flashcardsImg from "../../../assets/images/flashcards.png";

const Set3 = () => {
    return (
        <div className="set">
            <img src={flashcardsImg} alt={"FlashcardsImg"}/>
            <p>Set 3</p>
        </div>
    );
}

export default Set3;