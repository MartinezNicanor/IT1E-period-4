import React from 'react'
import Header from '../../../components/header/Header'
import AssignmentList from '../components/AssignmentList'
import './AssignmentView.css'

const AssignmentView = () => {

    return (
        <div className='assignmentListContainer'>
            <Header title="Assignments" />
            <div className='descHeader'>
                <h2 className='assignmentsProvided'>Assignments provided by faculty</h2>
                <p className='selectAssignment'>Select an assignment and start practicing your coding skills now!</p>
            </div>
            <div className='assignmentList'>
                <AssignmentList />
            </div>

        </div>
    )
}

export default AssignmentView