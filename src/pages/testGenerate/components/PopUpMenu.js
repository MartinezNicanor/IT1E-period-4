import React from 'react';
import Select from './Select';
import { AiOutlineClose } from 'react-icons/ai';

const PopUpMenu = ({ onClose, numQuestions, setNumQuestions, difficulty, setDifficulty, handleGenerateTest }) => {
    const handleTestGeneration = () => {
        handleGenerateTest();
        onClose();
    };

    return (
        <div className="popup">
            <div className="popup-content">
                <AiOutlineClose
                    onClick={onClose}
                    style={{ color: '#3E76D5', scale: '1.3', cursor: 'pointer', margin: '0 0 0 13.5vw' }}
                />
                <div className="popUpFlex">
                    <Select label="Choose difficulty:" element={difficultyOptions} value={difficulty} onChange={setDifficulty} />
                    <Select label="Number of questions:" element={questionsCount} value={numQuestions} onChange={setNumQuestions} />
                    <button className="generateButton" onClick={handleTestGeneration}>
                        Generate test
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PopUpMenu;

const difficultyOptions = [
    { value: 'easy', label: 'Easy' },
    { value: 'medium', label: 'Medium' },
    { value: 'hard', label: 'Hard' },
];

const questionsCount = [
    { value: '5', label: '5' },
    { value: '6', label: '6' },
    { value: '7', label: '7' },
    { value: '8', label: '8' },
    { value: '9', label: '9' },
    { value: '10', label: '10' },
];
