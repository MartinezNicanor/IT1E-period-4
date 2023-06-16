import React, { useState } from 'react'
import FlashcardList from "./components/FlashcardList";
import Header from "../../components/header/Header";
import "./Flashcard.css"

function Sample() {
    const [flashcards, setFlashcards] = useState(SAMPLE_FLASHCARDS)
    return (
        <div className="set-overview-container">
            <Header title={"Set - Random name"} />
            <div className="flashcards-container">
                <FlashcardList flashcards={flashcards}/>
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
    }
]

export default Sample;