import React from 'react'
import MovingText from 'react-moving-text';
/* run npm i react-moving-text for this to work */ 


const BannerText = () => {
    return (
        <MovingText type="fadeInFromTop"
            duration="1500ms"
            delay="0s"
            direction="normal"
            timing="ease"
            iteration="1"
            fillMode="none">
            <h1 className='welcome'>Welcome to <p className = "quizzed">QUIZZED!</p></h1>
            <p className="subText">Your favorite study support</p>
        </MovingText>
    )
}

export default BannerText