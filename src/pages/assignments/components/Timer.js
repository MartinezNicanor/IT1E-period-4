import React, { useState, useEffect, useRef } from 'react';
import { useParams, useLocation } from 'react-router-dom'
import './Timer.css'
import { useAuthContext } from '../../../components/hooks/useAuthContext';

const Timer = ({ title }) => {
    const [timeRemaining, setTimeRemaining] = useState(5400); //1h30m in sec
    const [timerOn, setTimerOn] = useState(false); //default state of timer is not running
    const timerRef = useRef();
    const { user } = useAuthContext()
    const { id } = useParams()
    const location = useLocation()
    const [completedMessage, setCompletedMessage] = useState('')
    const [error, setError] = useState('')

    useEffect(() => { //hook to start/stop timer
        //checking if timer is running, if running an interval is set to count down 1000ms 
        if (timerOn) {
        timerRef.current = setInterval(() => {
            setTimeRemaining((prevTime) => {
            if (prevTime === 0) {
                clearInterval(timerRef.current); //clears interval once 0 is reached
                return prevTime;
            }
            return prevTime - 1; //decrements the time by 1 if time remaining > 0
            });
        }, 1000);
        } else {
        clearInterval(timerRef.current);
        }
        return () => clearInterval(timerRef.current);
    }, [timerOn]);

    const formatTime = (time) => { //time = total time in seconds
        const hours = Math.floor(time / 3600); //converting seconds to hours (floor = rounding)
        const minutes = Math.floor((time % 3600) / 60); //converting to minutes
        const seconds = time % 60; // displaying remaining seconds that dont fit into the minute
        return `${hours.toString().padStart(2, '0')}:${minutes
        .toString()
        .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`; //padStart sets value to 2 digits
    }; //convert to HH:MM:SS format

    const handleStart = () => {
        setTimerOn(true);
    }; //start button to change useState of timerOn to true

    const handlePause = () => {
        setTimerOn(false);
    }; //pause button to change useState of timerOn to false

    const handleEnd = async (e) => {
        e.preventDefault()
        const completed = true
        let topicToUpdate = '';
        
        if (location.pathname === `/assignments/html/${id}`) {
            topicToUpdate = 'HTML/CSS';
        } else if (location.pathname === `/assignments/php/${id}`) {
            topicToUpdate = 'PHP';
        } else if (location.pathname === `/assignments/java/${id}`) {
            topicToUpdate = 'JAVA';
        }
        

        const response = await fetch(`https://projectinnovate-it1e-backend-production.up.railway.app/assignments/specificAssignement`, {
            method: 'PATCH',
            headers: {'Content-Type': 'application/json; charset=UTF-8', 'Authorization': `Bearer ${user.token}`},
            body: JSON.stringify({ topic: topicToUpdate, title, completed })
        })

        const json = await response.json()

        if (response.ok) {
            setCompletedMessage(json.message)
        } else {
            setError(json.message)
        }
  }; //end button to change useState of timerOn to false and changed timeremaining to 0

  return (
    <div className='timerDiv'>
        <div className='remainingTime'>{formatTime(timeRemaining)}</div>
        <div className="timerBtnContainer">
            {!timerOn ? (
                <button className = "timerBtn" onClick={handleStart}>Start timer</button>
            ) : (
                <button className = "timerBtn" onClick={handlePause}>Pause timer</button>
            )}
            <button className = "timerBtn" onClick={handleEnd}>End assignment</button> 
        </div>  
        {completedMessage && <div className='successMessage'>{ completedMessage }</div>}
    </div>
  );
};

export default Timer;
