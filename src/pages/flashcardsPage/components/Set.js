import React from 'react'
import { Link } from 'react-router-dom'
import './Set.css'
import flashCardIcon from '../../../assets/images/flashcardIcon.svg'

const SetList = ({ sets }) => {
    console.log(sets);
  return (
    <div className='setList'>
        {!Array.isArray(sets) && <div className="noDecksFound">No sets found, create your first set!</div>}
        {Array.isArray(sets) && sets.map(set => (
            <Link to={`/flashcards/${set.deckId}`} key={set.deckId}>
                <div className="setBox">
                    <img src={flashCardIcon} alt='flashcard icon'/>
                    <p className='setTitle'>{set.setTitle}</p>
                </div>
            </Link>
        ))}
    </div>
  )
}

export default SetList