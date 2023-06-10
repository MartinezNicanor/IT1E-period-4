import React from 'react'
import { Link } from 'react-router-dom'
import '../assignmentsList/AssignmentView.css'
import { AiOutlineArrowRight } from "react-icons/ai";



const AssignmentList = ({ assignments }) => {
  return (
    <div className='assignmentsList'>
        {assignments.map(assignment => (
            <Link to={`/assignments/${assignment.id}`} key={assignment.id}>
                <div className='assignmentBox'>
                    <p className='assignmentTitle'>{assignment.title}</p>
                    <AiOutlineArrowRight />
                </div>
            </Link>
        ))}
    </div>
  );
}

export default AssignmentList;

