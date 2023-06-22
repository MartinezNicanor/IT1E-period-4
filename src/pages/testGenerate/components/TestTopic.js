import React, { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import PopUpMenu from './PopUpMenu.js';
import { useAuthContext } from '../../../components/hooks/useAuthContext';
import { useNavigate } from 'react-router-dom';

const TestTopic = ({ label }) => {
    const navigate = useNavigate();
    const { user } = useAuthContext();
    const [showPopUp, setShowPopUp] = useState(false);
    const [numQuestions, setNumQuestions] = useState(10);
    const [difficulty, setDifficulty] = useState('easy');
    const [loading, setLoading] = useState(false);

    const openPopUp = () => {
        setShowPopUp(true);
    };

    const closePopUp = () => {
        setShowPopUp(false);
    };

    const handleGenerateTest = async () => {
        const data = {
            topic: label,
            difficulty,
            numberOfQuestions: numQuestions,
        };

        setLoading(true);

        try {
            const response = await sendDataToAPI(data);
            // Process the response here, if needed
            console.log(response);
        } catch (error) {
            console.error('Error:', error.message);
        } finally {
            setLoading(false);
            localStorage.setItem('testData', JSON.stringify(data));
            navigate('/test');
        }
    };

    const sendDataToAPI = async (data) => {
        return new Promise((resolve, reject) => {
            setTimeout(async () => {
                try {
                    const encodedLabel = encodeURIComponent(data.topic);
                    const encodedDifficulty = encodeURIComponent(data.difficulty);
                    const encodedNumQuestions = encodeURIComponent(data.numberOfQuestions);
                    const url = `https://projectinnovate-it1e-backend-production.up.railway.app/testGeneration?topic=${encodedLabel}&difficulty=${encodedDifficulty}&numberOfQuestions=${encodedNumQuestions}`;

                    const response = await fetch(url, {
                        method: 'GET',
                        headers: {
                            'Content-Type': 'application/json',
                            Authorization: `Bearer ${user.token}`,
                        },
                    });

                    if (!response.ok) {
                        throw new Error('Request failed' + response.status);
                    }

                    const responseData = await response.json();
                    resolve(responseData);
                    localStorage.setItem('questions', JSON.stringify(responseData));
                } catch (error) {
                    console.error('Error:', error.message);
                    reject(error);
                }
            }, 75000);
        });
    };

    const handleNumQuestionsChange = (value) => {
        setNumQuestions(value);
    };

    const handleDifficultyChange = (value) => {
        setDifficulty(value);
    };

    return (
        <>
            <div className="topicButton" onClick={openPopUp}>
                <p className="topicLabel">{label}</p>
                <FaArrowRight />
            </div>
            {showPopUp && (
                <PopUpMenu
                    onClose={closePopUp}
                    numQuestions={numQuestions}
                    setNumQuestions={handleNumQuestionsChange}
                    difficulty={difficulty}
                    setDifficulty={handleDifficultyChange}
                    handleGenerateTest={handleGenerateTest}
                />
            )}
            {loading && <p>Our AI is generating the test. This could take up to a minute.</p>}
        </>
    );
};

export default TestTopic;
