import React from 'react';
import './../css/components.css';


const Question = ({question}) => {
    return (
        <div className="question">
            <h3>1. {question}</h3>
            <div className="answersContainer">
                <div className="test-radio-answer">
                    <input type="radio" id="option1" name="radio-group" />
                    <label htmlFor="option1"></label>
                    <h4>Answer 1</h4>
                </div>
                <div className="test-radio-answer">
                    <input type="radio" id="option2" name="radio-group" />
                    <label htmlFor="option2"></label>
                    <h4>Answer 2</h4>
                </div>
                <div className="test-radio-answer">
                    <input type="radio" id="option3" name="radio-group" />
                    <label htmlFor="option3"></label>
                    <h4>Answer 3</h4>
                </div>
                <div className="test-radio-answer">
                    <input type="radio" id="option4" name="radio-group" />
                    <label htmlFor="option4"></label>
                    <h4>Answer 4</h4>
                </div>
            </div>
        </div>
    )
}

export default Question;