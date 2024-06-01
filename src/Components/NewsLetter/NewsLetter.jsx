import React from 'react'
import './NewsLetter.css';

const NewsLetter = () => {
  return (
    <div className="newsletter">
        <h1>Get Exclusive Offers On Your Email</h1>
        <p>Subscribe to our newsletter and stay updated</p>
        <div className='details'>
            <input type='email'name='email' placeholder='Enter your Email' required></input>
            <button>Subscribe</button>
        </div>
    </div>
  )
}

export default NewsLetter