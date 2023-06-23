import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../assignmentsList/AssignmentView.css';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { useLocation } from 'react-router-dom';
import { useAuthContext } from '../../../components/hooks/useAuthContext';

const AssignmentList = () => {
    const location = useLocation();
    const [topic, setTopic] = useState('');
    const [topicLink, setTopicLink] = useState('');
    const [assignments, setAssignments] = useState([]);
    const { user } = useAuthContext();
    const [isLoading, setIsLoading] = useState(null)
    const navigate = useNavigate();

    useEffect(() => {
        setIsLoading(true)
        if (location.pathname === '/assignments/html') {
            setTopic('HTML/CSS');
            setTopicLink('html');
        }
        else if (location.pathname === '/assignments/php') {
            setTopic('PHP');
            setTopicLink('php');
        }
        else if (location.pathname === '/assignments/java') {
            setTopic('JAVA');
            setTopicLink('java');
        } else {
            navigate('/assignments')
        }

        const fetchAssignments = async () => {
            const response = await fetch(
                `https://projectinnovate-it1e-backend-production.up.railway.app/assignments?topic=${topic}`,
                {
                    method: 'GET',
                    headers: { Authorization: `Bearer ${user.token}` },
                }
            );
            const json = await response.json();

            if (response.ok) {
                setAssignments(json.assignments);
                setIsLoading(false)
            }
        };

        if (user) {
            fetchAssignments();
        }
    }, [location.pathname, topic, user]);


    return (
        <div className="assignmentsList">
            {isLoading && <div className="loadingSpinnerContainer"><div className="loadingSpinner loadingQuestion"></div></div>}
            {!isLoading && assignments.map((assignment) => (
                <Link to={`/assignments/${topicLink}/${assignment.questionNum}`} key={assignment.id}>
                    <div className="assignmentBox">
                        {assignment.title}
                        <AiOutlineArrowRight />
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default AssignmentList;
