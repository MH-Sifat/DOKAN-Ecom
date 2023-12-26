import React from 'react';
import './Hero.css';
import hand_icon from '../../../../../src/assets/images/hand_icon.png';
import arrow_icon from '../../../../../src/assets/images/arrow.png';
import hero_img from '../../../../../src/assets/images/hero_image.png';




const Hero = () => {
    return (
        <div className='hero'>
            <div className="hero-left">
                <h2>New ARRIVALS ONLY</h2>
                <div>
                    <div className="hero-hand-icon">
                        <p>new</p>
                        <img src={hand_icon} alt="" />
                    </div>
                    <p>collection</p>
                    <p>for everyone</p>
                </div>
                <div className="hero-latest-btn">
                    <div>Latest Collection</div>
                    <img src={arrow_icon} alt="" />
                </div>
            </div>
            <div className="hero-right">
                <img src={hero_img} alt="" />
            </div>
        </div>
    );
};

export default Hero;