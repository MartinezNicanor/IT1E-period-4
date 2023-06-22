import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, useLocation, Link } from 'react-router-dom';
import { useAuthContext } from '../../../components/hooks/useAuthContext';
import Header from '../../../components/header/Header';
import * as AiIcons from 'react-icons/ai';
import './OpenedAssignment.css';
import Timer from '../components/Timer';

const OpenedAssignment = () => {
    const location = useLocation();
    const { id } = useParams();
    const { topic } = useParams();
    const [assignmentId, setAssignmentId] = useState(id);
    const [assignmentTopic, setAssignmentTopic] = useState('');
    const [isLoading, setIsLoading] = useState(null);
    const [error, setError] = useState(null);
    const { user } = useAuthContext();
    const [assignment, setAssignment] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        // Update the assignment topic based on the current location
        if (location.pathname === `/assignments/html/${id}`) {
            setAssignmentTopic('HTML/CSS');
        } else if (location.pathname === `/assignments/php/${id}`) {
            setAssignmentTopic('PHP');
        } else if (location.pathname === `/assignments/java/${id}`) {
            setAssignmentTopic('JAVA');
        } else {
            navigate('/assignments');
            return;
        }

        setIsLoading(true);
        setError(false);

        const fetchAssignment = async () => {
            try {
                const response = await fetch(
                    `https://projectinnovate-it1e-backend-production.up.railway.app/assignments/specificAssignement?topic=${assignmentTopic}&questionNum=${id}`,
                    {
                        method: 'GET',
                        headers: { Authorization: `Bearer ${user.token}` },
                    }
                );

                if (!response.ok) {
                    throw new Error('Failed to fetch assignment');
                }
                const json = await response.json();
                setIsLoading(false);
                setAssignment(json.question);
            } catch (error) {
                setIsLoading(false);
                setError(true);
                console.log(error);
            }
        };

        if (user) {
            fetchAssignment();
        }
    }, [user, id, location.pathname, assignmentTopic, navigate]);

    useEffect(() => {
        // Navigate to the next or previous assignment when assignmentId changes
        navigate(`/assignments/${topic}/${assignmentId}`);
    }, [assignmentId, navigate, topic]);

    const handlePrevAssignment = (e) => {
        e.preventDefault();
        setAssignmentId((prevId) => parseInt(prevId) - 1);
    };

    const handleNextAssignment = (e) => {
        e.preventDefault();
        setAssignmentId((prevId) => parseInt(prevId) + 1);
    };

    return (
        <div className="mainAssignmentContainer">
            {error && <div></div>}
            {isLoading && (
                <div className="loadingSpinnerContainer">
                    <div className="loadingSpinner loadingAssignment"></div>
                </div>
            )}
            {!isLoading && <Header title={assignment.title} />}
            {!isLoading && (
                <div className="openedAssignmentContainer">
                    <div className="prevAndNextBtn">
                        <div className="prevContainer" onClick={handlePrevAssignment}>
                            <AiIcons.AiOutlineArrowLeft />{' '}
                            <button className="prev">Previous Assignment</button>
                        </div>
                        <div className="nextContainer" onClick={handleNextAssignment}>
                            <button className="next">Next Assignment</button>{' '}
                            <AiIcons.AiOutlineArrowRight />
                        </div>
                    </div>
                    <div className="assignmentTextBox">
                        <div className="assignmentText">
                            <p>{assignment.question}</p>
                            <p>
                                You are expected to finish this assignment in <b>1:30 hours.</b>{' '}
                                Good luck and happy coding!
                            </p>
                        </div>
                    </div>
                    <div className="timerContainer">
                        <Timer />
                    </div>
                </div>
            )}
        </div>
    );
};

export default OpenedAssignment;
