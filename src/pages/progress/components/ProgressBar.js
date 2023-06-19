import React from 'react';
import './../css/components.css'

const ProgressBar = ({label, completed, total}) => {

    const percentage = Math.floor((completed / total) * 100);

    const progressWidth = {
        width: `${percentage}%`
    }

    return (
        <div className="progressBar">
            <div className="progressBarLabels">
                <h4 className="progressLabel">{label}</h4>
                <h4 className="progressLabel">{`${completed}/${total}`}</h4>
            </div>
            <div className="containerStyles">
                <div className="fillerStyles" style={progressWidth}>
                    <span className="labelStyles">{`${percentage}%`}</span>
                </div>
            </div>
        </div>
    );
};

export default ProgressBar;