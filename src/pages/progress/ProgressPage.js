import React, { useState, useEffect } from 'react';
import Header from "../../components/header/Header";
import './css/progressPage.css'
import SubHeader from "./components/SubHeader";
import ProgressBar from "./components/ProgressBar";

function ProgressPage() {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchProgressData = async () => {
            try {
                // Fetch progress data with JWT token included in the headers
                const progressResponse = await fetch('https://projectinnovate-it1e-backend-production.up.railway.app/progress', {
                    headers: {
                        Authorization: `Bearer` + localStorage.getItem('token'),
                    },
                });

                const progressData = await progressResponse.json();
                setData(progressData);
                setIsLoading(false);
            } catch (error) {
                console.error('Error fetching progress data:', error);
            }
        };

        fetchProgressData();
    }, []);

    return (
        <div className={"progress-container"}>
            <Header title={"Progress"} />
            <SubHeader label={"Tracking your assignments"} />
            <p>Track your progress on our dedicated page.
                See how far you've come and stay motivated to reach even greater heights!
            </p>
            <ProgressBar label={"PHP"} />
            <ProgressBar label={"HTML/CSS"} />
            <ProgressBar label={"Java"} />
        </div>
    );
}

export default ProgressPage;