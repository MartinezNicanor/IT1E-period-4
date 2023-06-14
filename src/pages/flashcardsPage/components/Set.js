import React from 'react'
import { Link } from 'react-router-dom'
import './Set.css'
import flashCardIcon from '../../../assets/images/flashcardIcon.svg'

const SetList = ({ sets }) => {
  return (
    <div className='setList'>
        {sets.map(set => (
            <Link to={`/flashcards/${set.id}`} key={set.id}>
                <div className="setBox">
                    <img src={flashCardIcon} alt='flashcard icon'/>
                    <p className='setTitle'>{set.title}</p>
                </div>
            </Link>
        ))}
    </div>
  )
}

export default SetList