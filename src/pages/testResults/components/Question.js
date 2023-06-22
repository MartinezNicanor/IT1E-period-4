import React from 'react';
import './../css/components.css';

const Question = ({ id, question, correctAnswer, possibleAnswers }) => {
    return (
        <div className="test-question">
            <h3>{id}. {question}</h3>
            <div className="answersContainer">
                {possibleAnswers.map((answer, index) => (
                    <div className={`test-radio-answer ${Object.keys(answer)[0] === correctAnswer ? 'CorrectAnswer' : ''}`} key={index}>
                        <input
                            type="radio"
                            id={`option${id}-${index + 1}`}
                            name={`radio-group-${id}`}
                            value={Object.keys(answer)[0]}
                            disabled // Make the radio button non-clickable
                        />
                        <label htmlFor={`option${id}-${index + 1}`}>
                            {Object.values(answer)[0]}
                        </label>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Question;
