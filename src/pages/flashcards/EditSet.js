import React, { useState } from "react";
import "./EditSet.css"
import Header from "../../components/header/Header";

const FlashcardSet = () => {
    const [flashcards, setFlashcards] = useState([
        { term: '', definition: '', id: 1 },
        { term: '', definition: '', id: 2 },
        { term: '', definition: '', id: 3 },
        { term: '', definition: '', id: 4 },
        { term: '', definition: '', id: 5 }
    ]);

    const [title, setTitle] = useState('');
    const [savedSets, setSavedSets] = useState([]);

    const addCard = () => {
        const newCard = { term: '', definition: '', id: flashcards.length + 1 };
        setFlashcards([...flashcards, newCard]);
    };

    const updateCard = (index, field, value) => {
        const updatedCards = [...flashcards];
        updatedCards[index][field] = value;
        setFlashcards(updatedCards);
    };

    const saveSet = () => {
        const newSet = { title, flashcards };
        setSavedSets([...savedSets, newSet]);
        setTitle('');
        setFlashcards([
            { term: '', definition: '', id: 1 },
            { term: '', definition: '', id: 2 },
            { term: '', definition: '', id: 3 },
            { term: '', definition: '', id: 4 },
            { term: '', definition: '', id: 5 }
        ]);
    };

    const updateFlashcardSet = (index, field, value) => {
        const updatedSet = [...savedSets];
        updatedSet[index][field] = value;
        setSavedSets(updatedSet);
    };

    return (
        <div className="editSetContainer">
            <Header title={"Edit set"} />
            <div className="titleContainer">
                <input
                    className="titleInput"
                    type="text"
                    placeholder="Enter a title, e.g. Information Management"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </div>

            {
                flashcards.map((card, index) => (
                    <div className="cardContainer" key={card.id}>
                        <div className="termContainer">
                            <input
                                className='termInput'
                                type="text"
                                placeholder="Term"
                                value={card.term}
                                onChange={(e) => updateCard(index, 'term', e.target.value)}
                            />
                        </div>
                        <div className="definitionContainer">
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
            <div className="btnContainer">
                <button className='addBtn' onClick={addCard}>Add Card</button>
                <button className='saveBtn' onClick={saveSet}>Save Set</button>
            </div>

            <div>
                {savedSets.map((set, index) => (
                    <div key={index}>
                        <input
                            type="text"
                            placeholder="Set Title"
                            value={set.title}
                            onChange={(e) => updateFlashcardSet(index, 'title', e.target.value)}
                        />
                        {set.flashcards.map((card, cardIndex) => (
                            <div key={cardIndex}>
                                <input
                                    type="text"
                                    placeholder="Term"
                                    value={card.term}
                                    onChange={(e) => updateFlashcardSet(index, `flashcards[${cardIndex}].term`, e.target.value)}
                                />
                                <textarea
                                    placeholder="Definition"
                                    value={card.definition}
                                    onChange={(e) => updateFlashcardSet(index, `flashcards[${cardIndex}].definition`, e.target.value)}
                                />
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FlashcardSet;