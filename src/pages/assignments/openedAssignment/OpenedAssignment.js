import React from 'react'
import Header from '../../../components/header/Header'
import * as AiIcons from 'react-icons/ai'
import './OpenedAssignment.css'
import Timer from '../components/Timer'

const OpenedAssignment = () => {

    const assignments = [
        {
            title: "Assignment 1",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sagittis luctus turpis, a tempus velit cursus nec. Donec quis turpis sodales, tincidunt leo eget, imperdiet eros. Curabitur eu placerat urna. Fusce porttitor sem lacinia sem sagittis porttitor. Pellentesque euismod laoreet finibus. Donec ornare dolor vel libero luctus porttitor. Vestibulum mattis et magna sit amet luctus. Morbi fringilla tellus elit, non gravida nulla euismod et. Sed at tellus ultricies dui lobortis aliquam nec sit amet sem. Vivamus at vulputate ipsum. Duis tristique quis nisi at finibus. Nunc ipsum massa, aliquam sed maximus sit amet, volutpat et dolor. Cras sit amet tristique lectus. Nunc molestie lobortis dignissim. Nam finibus, nulla vel malesuada laoreet, neque sem aliquam diam, in consectetur nisl orci quis metus. Duis tristique quis nisi at finibus. Nunc ipsum massa, aliquam sed maximus sit amet, volutpat et dolor. Cras sit amet tristique lectus. Nunc molestie lobortis dignissim. Nam finibus, nulla vel malesuada laoreet, neque sem aliquam diam, in consectetur nisl orci quis metus. Duis tristique quis nisi at finibus. Nunc ipsum massa, aliquam sed maximus sit amet, volutpat et dolor. Cras sit amet tristique lectus. Nunc molestie lobortis dignissim. Nam finibus, nulla vel malesuada laoreet, neque sem aliquam diam, in consectetur nisl orci quis metus.",
            id: 1
        }
    ]

    return (
        <div className="mainAssignmentContainer">
            <Header title={"Assignments"} />
            <div className="openedAssignmentContainer">
                <div className="prevAndNextBtn">
                    <div className="prevContainer">
                        <AiIcons.AiOutlineArrowLeft /> <h3 className="prev">Previous Assignment</h3>
                    </div>
                    <div className="nextContainer">
                        <h3 className="next">Next Assignment</h3> <AiIcons.AiOutlineArrowRight />
                    </div>
                </div>
                <div className="assignmentTextBox">
                    <h2 className="assignmentTitle">{assignments[0].title}</h2>
                    <div className="assignmentText">
                        <p>{assignments[0].text}</p>
                        <p>You are expected to finish this assignment in <b>1:30 hours.</b> Good luck and happy coding!</p>
                    </div>
                </div>
                <div className="timerContainer">
                    <Timer />
                </div>
            </div>
        </div>
    )
}

export default OpenedAssignment