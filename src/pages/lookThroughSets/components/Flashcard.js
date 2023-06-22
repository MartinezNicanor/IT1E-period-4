import React, { useState } from 'react'
import { useAuthContext } from "../../../components/hooks/useAuthContext";

export default function Flashcard({ flashcard }) {
    const [flip, setFlip] = useState(false)
    const { user } = useAuthContext()

    // const fetchFlashcards = async () => {
    //     const response = await fetch(
    //         `https://projectinnovate-it1e-backend-production.up.railway.app/flashcards/getDeck?deckId=`,
    //         {
    //             method: 'GET',
    //             headers: { Authorization: `Bearer ${user.token}` },
    //         }
    //     );
    //     const json = await response.json();
    //
    //     if (response.ok) {
    //         fetchFlashcards(json.flashcards);
    //     }
    // };




    return (
        <div className={`card ${flip ? 'flip' : ''}`} onClick={() => setFlip(!flip)}>
            <div className="front">
                {flashcard.term}
            </div>
            <div className="back">
                {flashcard.definition}
            </div>
        </div>
    )
}