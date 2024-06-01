import React from 'react'
import './Hero.css'
import hand_icon from '../Assets/hand_icon.png';
import arrow_icon from'../Assets/arrow.png';
import hero_img from '../Assets/hero_image.png';

const Hero = () => {
  return (
    <div className="hero">
        <div className="hero-left">
            <h2>NEW ARRIVALS ONLY</h2>
            <div className="hero-hand-icon">
                <p>new</p>
                <img src={hand_icon}></img>
            </div>
            <p>collections</p>
            <p>for everyone</p>
           <div className="hero-latest-btn">
           <div>Latest Collections</div>
           <img src={arrow_icon}></img>

        </div>
        </div>
        
        <div className="hero-right">
          <img src={hero_img}></img>
        </div>
    </div>
  )
}

export default Hero