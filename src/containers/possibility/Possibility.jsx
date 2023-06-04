import React from 'react'
import possibilityImg from '../../assets/possibility.png'

import './possibility.scss'

const Possibility = () => {
  return (
    <div className='possibility section__padding' id="possibility">
      <div className="possibility__image">
        <img src={possibilityImg} alt="Possibility" />
      </div>

      <div className="possibility__content">
        <h4>Request Early Access to Get Started</h4>
        <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia nihil quas explicabo ex, maiores corporis.</p>
        <h4>Request Early Access to Get Started</h4>
      </div>
    </div>
  )
}

export default Possibility