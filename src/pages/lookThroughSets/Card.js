import React, { useState } from 'react'
import Header from "../../components/header/Header";
import "./Flashcard.css"
import arrowLeft from "./../../assets/images/arrow-left.png"
import arrowRight from "./../../assets/images/arrow-right.png"
import {Link} from "react-router-dom";
import Flashcard from "./components/Flashcard";

function Card() {
    const [flashcards, setFlashcards] = useState(SAMPLE_FLASHCARDS)
    const [targetId, setTargetId] = useState(1);

    const buttonPrev = () => {
        if (targetId === 1) {return;}
        setTargetId(targetId - 1);
    }
    const buttonNext = () => {
        if (targetId === flashcards.length) {return;}
        setTargetId(targetId + 1);
    }

    let targetCard;
    for (const card of flashcards) {
        if (card["id"] === targetId) {
            targetCard = card;
        }
    }
    return (
        <div className="set-overview-container">
            <Header title={"Set - Random name"} />
            <div className="flashcards-container">
                <div className="card-grid">
                    <Flashcard flashcard={targetCard} key={targetCard.id} />
                </div>
                <div className="arrow-button">
                    <button className="arrow-left"><img src={arrowLeft} onClick={buttonPrev} alt="Left"/></button>
                    <button className="arrow-right"><img src={arrowRight} onClick={buttonNext} alt="Right"/></button>
                </div>
                <div className="close-set">
                    <Link to="/"><button className="close-btn">Close set</button></Link>
                </div>
            </div>
        </div>
    );
}

const SAMPLE_FLASHCARDS = [
    {
        id: 1,
        term: "React",
        definition: "React is a framework of JavaScript",
    },
    {
        id: 2,
        term: "Java",
        definition: "Some random fact",
    },
    {
        id: 3,
        term: "PHP",
        definition: "Some random fact",
    },
    {
        id: 4,
        term: "CSS",
        definition: "Some random fact",
    },
    {
        id: 5,
        term: "HTML",
        definition: "Some random fact",
    }
]

export default Card;