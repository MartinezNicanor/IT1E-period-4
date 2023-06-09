import React from 'react'
import Header from '../../../components/header/Header'
import AssignmentList from '../components/Assignment'

const AssignmentView = () => {

    const assignments = [
        {
            title: "Assignment 1",
            question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Laoreet suspendisse interdum consectetur libero id faucibus nisl. Dolor purus non enim praesent elementum facilisis leo vel fringilla. Id interdum velit laoreet id. Maecenas sed enim ut sem viverra. Ante metus dictum at tempor commodo ullamcorper a. Tempus imperdiet nulla malesuada pellentesque elit. Aenean sed adipiscing diam donec adipiscing tristique risus. At consectetur lorem donec massa sapien faucibus et molestie. Sed vulputate mi sit amet mauris commodo quis imperdiet massa.",
            id: 1
        },{
            title: "Assignment 2",
            question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Laoreet suspendisse interdum consectetur libero id faucibus nisl. Dolor purus non enim praesent elementum facilisis leo vel fringilla. Id interdum velit laoreet id. Maecenas sed enim ut sem viverra. Ante metus dictum at tempor commodo ullamcorper a. Tempus imperdiet nulla malesuada pellentesque elit. Aenean sed adipiscing diam donec adipiscing tristique risus. At consectetur lorem donec massa sapien faucibus et molestie. Sed vulputate mi sit amet mauris commodo quis imperdiet massa.",
            id: 2
        },{
            title: "Assignment 3",
            question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Laoreet suspendisse interdum consectetur libero id faucibus nisl. Dolor purus non enim praesent elementum facilisis leo vel fringilla. Id interdum velit laoreet id. Maecenas sed enim ut sem viverra. Ante metus dictum at tempor commodo ullamcorper a. Tempus imperdiet nulla malesuada pellentesque elit. Aenean sed adipiscing diam donec adipiscing tristique risus. At consectetur lorem donec massa sapien faucibus et molestie. Sed vulputate mi sit amet mauris commodo quis imperdiet massa.",
            id: 3
        }
    ]

  return (
    <div>
        <Header />
        <div className='descHeader'>
            <h1 className='assignmentsProvided'>Assignments provided by faculty</h1>
            <p className='selectAssignment'>Select an assignment and start practicing your coding skills now!</p>
        </div>
        <div className='assignmentListContainer'>
            {assignments && <AssignmentList assignments = { assignments } />}
        </div>
        
    </div>
  )
}

export default AssignmentView