import React from 'react'

import svgLogo from '../../assets/logo.svg'
import './footer.scss'

const Footer = () => {
  return (
    <div className='footer section__padding'>
      <div className="footer__heading">
        <h1 className="gradient__text">Do you want to step in to the future before others</h1>
      </div>

      <div className="footer__button">
        <p>Request Early Access</p>
      </div>

      <div className="footer__links">
        <div className="footer__links-logo">
          <img src={svgLogo} alt="logo" />
          <p>Lorem ipsum dolor sit amet.</p>
        </div>

        <div className="footer__links-container">
          <h2>Links</h2>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>

        <div className="footer__links-container">
          <h2>Company</h2>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>

        <div className="footer__links-container">
          <h2>Get in touch</h2>
          <p>Lorem ipsum dolor sit amet.</p>
          <p>8-800-555-35-35</p>
          <p>kuzminworks@gmail.com</p>
        </div>
      </div>

      <div className="footer__copy">
        <p>&copy; 2023 GPT-3. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer