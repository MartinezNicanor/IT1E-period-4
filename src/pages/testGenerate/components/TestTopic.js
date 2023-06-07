import React, { useEffect, useState, useRef } from 'react';
import { FaArrowRight } from 'react-icons/fa';

const TestTopic = ({label}) => {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef(null);

    const handleClick = () => {
        setMenuOpen(!isMenuOpen);
    };

    const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
            setMenuOpen(false);
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
            <div className={"topicButton"} ref={menuRef} onClick={handleClick}>
                <p className={"topicLabel"}>{label}</p>
                <FaArrowRight />
            </div>
            {isMenuOpen && (
                <div className={"topicMenu"}>
                    This is the menu
                </div>
            )}
        </>
    );
}

export default TestTopic;