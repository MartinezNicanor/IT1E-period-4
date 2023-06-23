import React, { useState, useEffect } from 'react';
import Header from "../../components/header/Header";
import './css/progressPage.css'
import SubHeader from "./components/SubHeader";
import ProgressBar from "./components/ProgressBar";
import { useAuthContext } from '../../components/hooks/useAuthContext';

function ProgressPage() {
    const [data, setData] = useState([]);
    const { user } = useAuthContext()

    useEffect(() => {
        const fetchProgressData = async () => {
            try {
                const progressResponse = await fetch('https://projectinnovate-it1e-backend-production.up.railway.app/progress', {
                    headers: {
                        Authorization: `Bearer ${user.token}`,
                    },
                });
                const progressData = await progressResponse.json();
                console.log('Progress data:', progressData);
                setData(progressData);
            } catch (error) {
                console.error('Error fetching progress data:', error);
            }
        };

        fetchProgressData();
    }, []);

    return (
        <div className="progress-container">
            <Header title="Progress" />
            <SubHeader label="Tracking your assignments" />
            <p>
                Track your progress on our dedicated page.
                See how far you've come and stay motivated to reach even greater heights!
            </p>
            {Object.keys(data).length > 0 ? (
                <div>
                    <ProgressBar label="PHP" completed={data.PHPComp} total={data.PHPTotal} />
                    <ProgressBar label="Java" completed={data.JAVAComp} total={data.JAVATotal} />
                    <ProgressBar label="HTML/CSS" completed={data.HTMLComp} total={data.HTMLTotal} />
                </div>
            ) : (
                <p>No progress data available.</p>
            )}
        </div>
    );
}

export default ProgressPage;
