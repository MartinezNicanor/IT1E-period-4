import React from 'react'
import './AssignmentsTopics.css'
import Header from '../components/header/Header'
import htmlCssVec from '../assets/images/htmlcss.svg'
import phpVec from '../assets/images/php.svg'
import javaVec from '../assets/images/java.svg'


const AssignmentsTopics = () => {
  return (
    <div>
        <Header title = "Assignments"/>
        <h3 className = "selectATopic">Select a topic to study!</h3>
        <p className = "assignmentTopicDesc">Select one of the topics down below to see the assignments provided by faculty for you!</p>

        <div className = "assignmentsTopicsContainer">
            <div className = "htmlCssContainer">
                <img className='htmlvec' src={htmlCssVec} alt='html css logo vector' />
                <h4 className = "htmlCss">HTML/CSS</h4>
                <p className = "assignmentsNumber">placeholder</p>
            </div>
            <div className = "htmlCssDesc">
                <p>Practice HTML and CSS using the provided assignments to ace your tests!</p>
            </div>
            <div className = "phpDesc">
                <p>Use these PHP assignments to practice and expand your PHP knowledge!</p>
            </div>
            <div className = "phpContainer">
                <img className='phpvec' src={phpVec} alt='php logo vector' />
                <h4 className = "php">PHP</h4>
                <p className = "assignmentsNumber">placeholder</p>
            </div>
            <div className = "javaContainer">
                <img className='javavec' src={javaVec} alt='java logo vector' />
                <h4 className = "java">JAVA</h4>
                <p className = "assignmentsNumber">placeholder</p>
            </div>
            <div className = "javaDesc">
                <p>With our JAVA assignments you can practice JAVA just in time for your next exam!</p>
            </div>
            <div className = "svgLine">
            <svg width="835" height="406" viewBox="0 0 835 406" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.00037 2C3.00037 2 50.3026 90.0624 271.803 70.5624C370.082 61.9102 521.794 17.887 667 42C839 70.5624 834 269.5 831.5 269.5C777.5 442 453.5 383 303 349.5C152.5 316 124 307 77.4999 338C30.9999 369 37.4999 405.5 37.4999 405.5" stroke="#3E76D5" stroke-width="5"/>
            </svg>
            </div>
        </div>
    </div>
  )
}

export default AssignmentsTopics