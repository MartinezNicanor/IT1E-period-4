import React, { useState } from 'react';
import './../css/components.css';

const Question = ({ id, question, possibleAnswers, onAnswerSelect }) => {
    const [selectedOption, setSelectedOption] = useState('');

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
        onAnswerSelect(event.target.value);
    };

    return (
        <div className="test-question-container">
            <h3>{id}. {question}</h3>
            <div className="answersContainer">
                {possibleAnswers.map((answer, index) => (
                    <div className="test-radio-answer" key={index}>
                        <input
                            type="radio"
                            id={`option${id}-${index + 1}`}
                            name={`radio-group-${id}`}
                            value={Object.keys(answer)[0]}
                            checked={selectedOption === Object.keys(answer)[0]}
                            onChange={handleOptionChange}
                        />
                        <label htmlFor={`option${id}-${index + 1}`}></label>
                        <h4>{Object.values(answer)[0]}</h4>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Question;
