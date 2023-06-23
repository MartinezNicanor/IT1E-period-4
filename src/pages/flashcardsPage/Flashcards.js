import React from "react";
import "./Flashcards.css";
import Header from "../../components/header/Header";
import Add from "./components/Add";
import SetList from "./components/Set";
import { useAuthContext } from "../../components/hooks/useAuthContext";
import { useState, useEffect } from "react";

const Flashcards = () => { 
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const [sets, setSets] = useState([])
    const { user } = useAuthContext()

    useEffect(() => {
        const fetchSets = async () => {
            setIsLoading(true)

            const response = await fetch(
                'https://projectinnovate-it1e-backend-production.up.railway.app/flashcards',
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
                setSets(json)
            }
        };

        if (user) {
            fetchSets()
        }
    }, [user]);

    return (
        <div className="container">
            <Header title={"Flashcards"} />
            <div className="setContainer">
                <div className = "setsBox">
                    {isLoading && <div className="loadingSpinnerContainer"><div className="loadingSpinner"></div></div>}
                    <SetList sets = { sets } />
                    {error && <div className="authError">{ error }</div>}
                </div>
                <Add />
            </div>
        </div>
    );
}

export default Flashcards;