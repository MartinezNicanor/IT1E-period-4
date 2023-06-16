import React, { useState } from 'react';
import './NewSet.css'
import Header from '../../components/header/Header'

const FlashcardSet = () => {
    const [flashcards, setFlashcards] = useState([
        // defining default state of the cards of the set which is empty
        { term: '', definition: '', id: 1 },
        { term: '', definition: '', id: 2 },
        { term: '', definition: '', id: 3 },
        { term: '', definition: '', id: 4 },
        { term: '', definition: '', id: 5 },
    ]);
    //empty state of the title
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [savedSets, setSavedSets] = useState([]);
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
        setDescription('');
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
            <div className='descriptionContainer'>
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
            <div className='btnContainer'>
                <button className='addBtn' onClick={addCard}>Add Card</button>
                <button className='saveBtn' onClick={saveSet}>Save Set</button>
            </div>
        </div >
    );
};

export default FlashcardSet;
