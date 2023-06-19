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
    const [description, setDescription] = useState('');
    const [saveSets, setSavedSets] = useState([]);

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
        setSavedSets([...saveSets, newSet]);
        setTitle('');
        setDescription('');
        setFlashcards([
            { term: '', definition: '', id: 1 },
            { term: '', definition: '', id: 2 },
            { term: '', definition: '', id: 3 },
            { term: '', definition: '', id: 4 },
            { term: '', definition: '', id: 5 }
        ]);
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
            <div className="descriptionContainer">
                <input
                    className='descriptionInput'
                    type="textarea"
                    placeholder="Enter a description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
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
                            <input
                                className='definitionInput'
                                type="text"
                                placeholder="Definition"
                                value={card.definition}
                                onChange={(e) => updateCard(index, 'definition', e.target.value)}
                            />
                        </div>
                    </div>
                ))
            }
            <div className="btnContainer">
                <button className='saveBtn' onClick={saveSet}>Save Set</button>
            </div>
        </div>
    );
};

export default FlashcardSet;