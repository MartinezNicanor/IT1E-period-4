import React from 'react'
import { Link } from 'react-router-dom'
import '../assignmentsList/AssignmentView.css'
import { AiOutlineArrowRight } from "react-icons/ai";



const AssignmentList = ({ assignments }) => {
    return (
        <div className='assignmentsList'>
            {assignments.map(assignment => (
                <Link to={`/assignments/:topics/${assignment.id}`} key={assignment.id}>
                    <div className='assignmentBox'>
                        {assignment.title}
                        <AiOutlineArrowRight />
                    </div>
                </Link>
            ))}
        </div>
    );
}

export default AssignmentList;

