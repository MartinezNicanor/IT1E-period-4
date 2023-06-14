import React from 'react';
import Header from "../../components/header/Header";
import './css/progressPage.css'
import SubHeader from "./components/SubHeader";
import ProgressBar from "./components/ProgressBar";

function ProgressPage() {
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
    )
}

export default ProgressPage;