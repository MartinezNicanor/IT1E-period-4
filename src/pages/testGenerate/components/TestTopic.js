import React, { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import PopUpMenu from './PopUpMenu.js';

const TestTopic = ({ label }) => {
    const [showPopUp, setShowPopUp] = useState(false);

    const openPopUp = () => {
        setShowPopUp(true);
    };

    const closePopUp = () => {
        setShowPopUp(false);
    };

    return (
        <>
            <div className="topicButton" onClick={openPopUp}>
                <p className="topicLabel">{label}</p>
                <FaArrowRight />
            </div>
            {showPopUp && <PopUpMenu onClose={closePopUp} /> }

        </>
    );
};

export default TestTopic;
