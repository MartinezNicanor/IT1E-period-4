import React from 'react'
import { Link } from 'react-router-dom'

const AssignmentsList = ({ assignments }) => {
  return (
    <div className='assignmentsList'>
        {assignments.map(assignment => (
            <Link to={`/assignments/${assignment.id}`}>
                <div className='assignmentsSummary'>
                    <div className='assignmentBox'>
                        <h3 className='assignmentTitle'>{ assignment.title }</h3>
                    </div>
                </div>
            </Link>
        ))}
    </div>
  );
}

export default Assignment