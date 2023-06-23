import React, { useState } from 'react';
import './NewSet.css'
import Header from '../../components/header/Header'
import jwt_decode from "jwt-decode";
import { useAuthContext } from "../../components/hooks/useAuthContext";

const FlashcardSet = () => {
    const { user } = useAuthContext();
    const [flashcards, setFlashcards] = useState([
        // defining default state of the cards of the set which is empty
        { term: '', definition: '', id: 1 },
        { term: '', definition: '', id: 2 },
        { term: '', definition: '', id: 3 },
        { term: '', definition: '', id: 4 },
        { term: '', definition: '', id: 5 },
    ]);
    const handleSubmit = async(e) => {
        e.preventDefault();
        const token = jwt_decode(user.token)


        const response = await fetch('https://projectinnovate-it1e-backend-production.up.railway.app/flashcards/newDeck', {
            mode:"cors",
            method: 'POST',
            headers: {'Content-Type':'application/json; charset=UTF-8', 'Authorization': `Bearer ${user.token}`},
            body: JSON.stringify(convert(flashcards))
        })
        const json = await response.json()

        if (!response.ok) {
            setTitle('')
        }

        if (response.ok) {
            alert(json.message)
            //navigate('/forum')
        }
    }
    //empty state of the title
    const [title, setTitle] = useState('');
    const [savedSets, setSavedSets] = useState([]);
    const convert = (original) => {
        let jsonStr = `{"title": "${title}"`
        for (const entry of original) {
            let id = entry["id"];
            if (entry["term"] && entry["definition"]) {
                id *= 2;
                jsonStr += `,"side-${id - 1}": "${entry["term"]}"`;
                jsonStr += `,"side-${id}": "${entry["definition"]}"`;
            }
        }
        jsonStr += "}";
        console.log(jsonStr);
        return JSON.parse(jsonStr);
    }
    //this adds a new empty card to the array
    const addCard = () => {
        const newCard = { term: '', definition: '', id: flashcards.length + 1 };
        setFlashcards([...flashcards, newCard]);
    };
    //update the card with the input info
    const updateCard = (index, field, value) => {
        const updatedCards = [...flashcards];
        updatedCards[index][field] = value;
        setFlashcards(updatedCards);
    };
    //saves input to a new set
    const saveSet = () => {
        const newSet = { title, flashcards };
        setSavedSets([...savedSets, newSet]);
        setTitle('');
        setFlashcards([
            { term: '', definition: '', id: 1 },
            { term: '', definition: '', id: 2 },
            { term: '', definition: '', id: 3 },
            { term: '', definition: '', id: 4 },
            { term: '', definition: '', id: 5 },
        ]);
    };

    return (
        < div className='newSetContainer' >
            <Header title={"Create new set"} />
            <div className='titleContainer'>
                <input
                    className='titleInput'
                    type="text"
                    placeholder="Enter a title, e.g. Information management"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </div>

            {
                flashcards.map((card, index) => (
                    <div className='cardContainer' key={card.id}>
                        <div className='termContainer'>
                            <input
                                className='termInput'
                                type="text"
                                placeholder="Term"
                                value={card.term}
                                onChange={(e) => updateCard(index, 'term', e.target.value)}
                            />
                        </div>
                        <div className='definitionContainer'>
                            <textarea
                                className='definitionInput'
                                placeholder="Definition"
                                value={card.definition}
                                onChange={(e) => updateCard(index, 'definition', e.target.value)}
                            />
                        </div>
                    </div>
                ))
            }
            <div className='btnContainer'>
                <button className='addBtn' onClick={addCard}>Add Card</button>
                <button className='saveBtn' onClick={handleSubmit}>Save Set</button>
            </div>
        </div >
    );
};

export default FlashcardSet;