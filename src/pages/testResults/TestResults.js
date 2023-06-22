import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from "../../components/header/Header";
import SubHeader from "./components/SubHeader";
import Question from "./components/Question";
import './css/testResults.css';

function TestPage() {
    const [questions, setQuestions] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const data = localStorage.getItem('questions');
        if (!data) {
            navigate('/generateTest');
        } else {
            try {
                const parsedData = JSON.parse(data);
                setQuestions(parsedData.response);
            } catch (error) {
                console.error('Error parsing data from localStorage:', error);
            }
        }
    }, [navigate]);

    const finishedTest = () => {
        localStorage.removeItem('questions');
        localStorage.removeItem('score');
        localStorage.removeItem('testData');
        navigate('/');
    };

    const score = localStorage.getItem('score');
    const totalQuestions = questions.length;

    return (
        <div className="test-container">
            <Header title={"Practice test"} />
            <SubHeader label={"Multiple choice test"} />
            <div className="test-scoreContainer">
                <h2 className="test-scoreTitle">Your got {score} answers correctly out of {totalQuestions}. You can see the correct answers down below.</h2>
            </div>
            <div className="test-questionContainer">
                {questions.map((question, index) => (
                    <Question
                        key={index}
                        id={index + 1}
                        question={Object.values(question)[0]}
                        correctAnswer={Object.values(question)[2]}
                        possibleAnswers={Object.values(question)[1]}
                    />
                ))}
            </div>
            <div className="buttonContainer">
                <button className="submitTestButton" onClick={finishedTest}>
                    <strong>Back to HomePage</strong>
                </button>
            </div>
        </div>
    );
}

export default TestPage;
