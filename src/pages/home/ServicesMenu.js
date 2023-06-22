import React from 'react'
import "./ServicesMenu.css"
import ServicesHeader from './ServicesHeader'


const ServicesMenu = () => {
    return (
        <>
            <div className="mainContentContainer">
                <div className="menuText">
                    <ServicesHeader />
                </div>

                <div className="servicesContainer">
                    <div className="testGenContainer">
                        <h3>AI Test Generator</h3>
                        <p>Generate tests that test your knowledge for upcoming exams!</p>
                    </div>
                    <div className="assignmentsContainer">
                        <h3>Assignments</h3>
                        <p>Practice for your exams with our assignments system. Gain a deep understanding of the subject matter and boost your confidence.</p>
                    </div>
                    <div className="flashCardsContainer">
                        <h3>Flashcards</h3>
                        <p>Our system allows you to make your own flashcards and even make them private or public for others to study.</p>
                    </div>
                    <div className="progressContainer">
                        <h3>Progress overview</h3>
                        <p>Stay on top of your studies with SmartAssign's progress overview page - track your assignments and progress in real-time.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ServicesMenu