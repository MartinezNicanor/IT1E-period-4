import React from 'react'
import './Herobanner.css';
import BannerText from './BannerText';

const Herobanner = () => {
    return (
        <div className="heroBannerContainer">
            <div className="heroText">
                <BannerText />
            </div>
        </div>
    )
}

export default Herobanner