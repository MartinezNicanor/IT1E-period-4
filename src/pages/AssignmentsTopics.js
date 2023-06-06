import React from 'react'
import './AssignmentsTopics.css'
import Header from '../components/header/Header'

const AssignmentsTopics = () => {
  return (
    <div>
        <Header title = "Assignments"/>
        <div className = "assignmentsHeader">
            <h3 className = "selectATopic">Select a topic to study!</h3>
            <p className = "assignmentTopicDesc">Select one of the topics down below to see the assignments provided by faculty for you!</p>
        </div>
        <div className = "assignmentsTopicsContainer">
            <div className = "htmlCssContainer">
                <h4 className = "htmlCss">HTML/CSS</h4>
                <p className = "assignmentsNumber">placeholder</p>
            </div>
            <div className = "htmlCssDesc">
                <p>Practice HTML and CSS using the provided assignments to ace your tests!</p>
            </div>
            <div className = "phpContainer">
                <h4 className = "php">PHP</h4>
                <p className = "assignmentsNumber">placeholder</p>
            </div>
            <div className = "phpDesc">
                <p>Use these PHP assignments to practice and expand your PHP knowledge!</p>
            </div>
            <div className = "javaContainer">
                <h4 className = "java">JAVA</h4>
                <p className = "assignmentsNumber">placeholder</p>
            </div>
            <div className = "javaDesc">
                <p>With our JAVA assignments you can practice JAVA just in time for your next exam!</p>
            </div>
        </div>
    </div>
  )
}

export default AssignmentsTopics