import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Reviews (122)</div>
        </div>
        <div className="descriptionbox-description">
            <p>An e-commerce website is an online platform that facilitate buying
                and selling products or services over the internet serves as a virtual
                marketplace where businesses and individuals showcase their products,intercat with costomers,
                and conduct transactions without the need for a physical presence.E-commerce website have gained immense 
                popularity due to their convenience accessibility,and global reach they offer.
                <p>
                    E-commerce websites typically display products or services and detailed descriptions,images,prices,
                    and any available variety.
                </p>

            </p>
        </div>
    </div>
  )
}

export default DescriptionBox