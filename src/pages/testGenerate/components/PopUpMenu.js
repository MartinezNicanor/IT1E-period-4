import React from 'react';
import Select from "./Select";
import { useNavigate } from 'react-router-dom';
import { AiOutlineClose } from 'react-icons/ai';

function PopUpMenu({onClose}) {
    const navigate = useNavigate();
    const generateNewTest = () => {
        navigate('/');
    }
    return (
        <div className="popup">
            <div className="popup-content">
                <AiOutlineClose onClick={onClose}
                    style={{color: '#3E76D5', scale: '1.3', cursor: 'pointer', margin: '0 0 0 13.5vw'}}
                />
                <div className="popUpFlex">
                    <Select label={"Choose difficulty:"} element={difficultyOptions}/>
                    <Select label={"Number of questions:"} element={questionsCount} />
                    <input className="generateButton" type="submit" value="Generate test" onClick={generateNewTest} />
                </div>
            </div>
        </div>
    );
}

export default PopUpMenu;

const difficultyOptions = [
    { value: 'easy', label: 'Easy' },
    { value: 'medium', label: 'Medium' },
    { value: 'hard', label: 'Hard' },
];

const questionsCount = [
    { value: '5', label: '5' },
    { value: '10', label: '10' },
];