import React from 'react'
import MovingText from 'react-moving-text';
/* run npm i react-moving-text for this to work */ 


const ServicesHeader = () => {
    return (
        <MovingText type="fadeIn"
            duration="1000ms"
            delay="0s"
            direction="normal"
            timing="ease-in"
            iteration="1"
            fillMode="none">
                <h2 className='ourServices'>Our Services</h2>
                <h1>Check out some of the cool services we provide</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </MovingText>
    )
}

export default ServicesHeader
