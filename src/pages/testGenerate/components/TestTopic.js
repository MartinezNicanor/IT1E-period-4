import React, { useEffect, useState, useRef } from 'react';
import { FaArrowRight } from 'react-icons/fa';

const TestTopic = ({ label }) => {
    const [openTopic, setOpenTopic] = useState(null);
    const menuRef = useRef(null);

    const handleClick = () => {
        setOpenTopic((prevOpenTopic) => (prevOpenTopic === label ? null : label));
    };

    const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
            setOpenTopic(null);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <>
            <div className="topicButton" ref={menuRef} onClick={handleClick}>
                <p className="topicLabel">{label}</p>
                <FaArrowRight />
            </div>
            {openTopic === label && (
                <div className={`topicMenu active`}>
                    This is the menu
                </div>
            )}
        </>
    );
};

export default TestTopic;
