import React, {useEffect, useState} from 'react'
import Header from "../../components/header/Header";
import "./Flashcard.css"
import arrowLeft from "./../../assets/images/arrow-left.png"
import arrowRight from "./../../assets/images/arrow-right.png"
import Flashcard from "./components/Flashcard";
import {useAuthContext} from "../../components/hooks/useAuthContext";
import { useParams, Link } from "react-router-dom";

function Card({}) {
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const { user } = useAuthContext()
    const { id } = useParams();
    const [flashcards, setFlashcards] = useState([]);


    useEffect(() => {
        const fetchDecks = async () => {
            setIsLoading(true)

            const response = await fetch(
                `https://projectinnovate-it1e-backend-production.up.railway.app/flashcards/getDeck?deckId=${id}`,
                {
                    method: 'GET',
                    headers: { Authorization: `Bearer ${user.token}`},
                }
            );
            const json = await response.json();

            if(!response.ok) {
                setError(json.message)
                setIsLoading(false)
            }
            if (response.ok) {
                setIsLoading(false)
                setFlashcards(json.flashcards)
            }
        };

        if (user) {
            fetchDecks()
        }
    }, [user]);

    const log = JSON.stringify(flashcards);
    console.log(log);

    const [targetId, setTargetId] = useState(0);

    const buttonPrev = () => {
        if (targetId === 0) {return;}
        setTargetId(targetId - 1);
    }
    const buttonNext = () => {
        if (targetId === flashcards.length-1) {return;}
        setTargetId(targetId + 1);
    }

    let targetCard = flashcards[targetId];
    if(!targetCard) {
        return (<h1>No cards</h1>);
    }

    return (
        <div className="set-overview-container">
            <Header title={`Set`} />
            <div className="flashcards-container">
                <div className="card-grid">
                    <Flashcard flashcard={targetCard} key={targetCard.id} />
                </div>
                <div className="arrow-button">
                    <button className="arrow-left"><img src={arrowLeft} onClick={buttonPrev} alt="Left"/></button>
                    <button className="arrow-right"><img src={arrowRight} onClick={buttonNext} alt="Right"/></button>
                </div>
                <div className="close-set">
                    <Link to="/flashcards"><button className="close-btn">Close set</button></Link>
                </div>
            </div>
        </div>
    );
}

export default Card;
// TODO: local save of deck id, complete fetching function, implement data from a response.