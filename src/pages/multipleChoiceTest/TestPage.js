import React from 'react';
import Header from "../../components/header/Header";
import SubHeader from "./components/SubHeader";
import Question from "./components/Question";
import './css/testPage.css';

function TestPage() {
    return (
        <div className="test-container">
            <Header title={"Practice test"} />
            <SubHeader label={"Test 1"} />
            <div className="questionContainer">
                <Question question={"What is the capital of the Netherlands?"} />
            </div>
            <div className="buttonContainer">
                <button className="submitTestButton"><strong>Submit</strong></button>
            </div>
        </div>
    )
}

export default TestPage;