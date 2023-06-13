import React from 'react'
import Header from '../../../components/header/Header'
import * as AiIcons from 'react-icons/ai'
import './OpenedAssignment.css'
import Timer from '../components/Timer'

const OpenedAssignment = () => {

    const assignments = [
        {
            title: "Assignment 1",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Laoreet suspendisse interdum consectetur libero id faucibus nisl. Dolor purus non enim praesent elementum facilisis leo vel fringilla. Id interdum velit laoreet id. Maecenas sed enim ut sem viverra. Ante metus dictum at tempor commodo ullamcorper a. Tempus imperdiet nulla malesuada pellentesque elit. Aenean sed adipiscing diam donec adipiscing tristique risus. At consectetur lorem donec massa sapien faucibus et molestie. Sed vulputate mi sit amet mauris commodo quis imperdiet massa.",
            id: 1
        }
    ]
    
  return (
    <div>
        <Header/>
        <div className = "openedAssignmentContainer">
            <div className = "prevAndNextBtn">
                <div className = "prevContainer">
                    <AiIcons.AiOutlineArrowLeft/> <h3 className = "prev">Previous Assignment</h3>   
                </div>
                <div className = "nextContainer">
                    <h3 className = "next">Next Assignment</h3> <AiIcons.AiOutlineArrowRight/>
                </div>
            </div>
            <div className = "assignmentText">
                <h2 className = "assignmentTitle">{assignments[0].title}</h2>
                <div className = "assignmentText">
                    <p>{assignments[0].text}</p>
                    <p>You are expected to finish this assignment in <b>1:30 hours.</b> Good luck and happy coding!</p>
                </div>
            </div>
            <div className = "timerContainer">
                <Timer />
                <div className = "assignmentBtnsContainer">

                </div>
            </div>
        </div>
    </div>
  )
}

export default OpenedAssignment