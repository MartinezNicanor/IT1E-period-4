import React from 'react';

const Question = ({question}) => {
    return (
        <div className="question">
            <p>1. {question}</p>
            <ul>
                <li><input type={"radio"} name={"answer"} value={"answer1"} />Answer 1</li>
                <li><input type={"radio"} name={"answer"} value={"answer2"} />Answer 2</li>
                <li><input type={"radio"} name={"answer"} value={"answer2"} />Answer 3</li>
                <li><input type={"radio"} name={"answer"} value={"answer2"} />Answer 4</li>
            </ul>
        </div>
    )
}

export default Question;