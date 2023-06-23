import React, { useState } from 'react'
import { useAuthContext } from "../../../components/hooks/useAuthContext";

export default function Flashcard({ flashcard }) {
    const [flip, setFlip] = useState(false)
    const { user } = useAuthContext()

    return (
        <div className={`card ${flip ? 'flip' : ''}`} onClick={() => setFlip(!flip)}>
            <div className="front">
                {flashcard.side1}
            </div>
            <div className="back">
                {flashcard.side2}
            </div>
        </div>
    )
}