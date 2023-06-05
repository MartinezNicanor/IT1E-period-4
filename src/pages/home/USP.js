import React from 'react'
import * as TbIcons from 'react-icons/tb'
import * as GiIcons from 'react-icons/gi'
import * as IoIcons from 'react-icons/io5'
import "./USP.css"

const USP = () => {
  return (
    <>
        <div className = "USPContainer">
            <h2 className = "USPheader">Why you should study with us?</h2>
            <div className = "flashCardSystem">
                <TbIcons.TbCards size={60} color='#3E76D5'/>
                <h3 className = "flashHeader"> Flashcard System</h3>
                <p>Our flashcard system allows you to create your own study sets to enhance your learning experience!</p>
            </div>
            <div className = "aiIncorporation">
                <GiIcons.GiArtificialIntelligence size={60} color='#3E76D5'/>
                <h3 className = "aiHeader"> AI incorporation</h3>
                <p>We use ChatGPT to generate new multiple choice tests for you on demand. Choose a topic, difficulty and the amount of questions you would like and receive a new test in seconds!</p>
            </div>
            <div className = "community">
                <IoIcons.IoChatbubblesOutline size={60} color='#3E76D5'/>
                <h3 className = "communityHeader"> Community</h3>
                <p>Our forum allows you to get in contact with other users to ask and answer questions to help each other learn!</p>
            </div>
        </div>
    </>
  )
}

export default USP