import React from 'react'
import Header from '../../../components/header/Header'
import * as AiIcons from 'react-icons/ai'
import './OpenedAssignment.css'

const OpenedAssignment = () => {
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
                
            </div>
        </div>
    </div>
  )
}

export default OpenedAssignment