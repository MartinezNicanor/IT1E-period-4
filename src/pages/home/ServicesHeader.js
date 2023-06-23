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
                <p>We provide a wide range of services to help students study for their exams. Whether it's coding or simply Information Management, we can help with it all!</p>
        </MovingText>
    )
}

export default ServicesHeader
