import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from "../../components/header/Header";
import SubHeader from "./components/SubHeader";
import Question from "./components/Question";
import './css/testPage.css';

function TestPage() {
    const [questions, setQuestions] = useState([]);
    const [selectedAnswers, setSelectedAnswers] = useState({});
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

    const handleAnswerSelection = (questionId, selectedOption) => {
        setSelectedAnswers((prevAnswers) => ({
            ...prevAnswers,
            [questionId]: selectedOption,
        }));
    };

    const handleSubmit = () => {
        // Check the selected answers against the correct answers
        const score = questions.reduce((totalScore, question, index) => {
            const questionId = index + 1;
            const selectedOption = selectedAnswers[questionId];
            const correctAnswer = question.correctAnswer;
            if (selectedOption === correctAnswer) {
                return totalScore + 1;
            }
            return totalScore;
        }, 0);
        localStorage.setItem('score', score);
        navigate('/testResults');
    };

    const testData = JSON.parse(localStorage.getItem('testData'));
    const { topic, numberOfQuestions } = testData;

    return (
        <div className="test-container">
            <Header title={"Practice test"} />
            <SubHeader label={` ${topic} Multiple Choice Test`}
            />
            <div className="questionContainer">
                {questions.map((question, index) => (
                    <Question
                        key={index}
                        id={index + 1}
                        question={Object.values(question)[0]}
                        correctAnswer={question.correctAnswer}
                        possibleAnswers={Object.values(question)[1]}
                        onAnswerSelect={(selectedOption) =>
                            handleAnswerSelection(index + 1, selectedOption)
                        }
                    />
                ))}
            </div>
            <div className="buttonContainer">
                <button className="submitTestButton" onClick={handleSubmit}>
                    <strong>Submit</strong>
                </button>
            </div>
        </div>
    );
}

export default TestPage;
