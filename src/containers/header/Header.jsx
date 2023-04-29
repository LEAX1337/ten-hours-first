import React from 'react'

import People from '../../assets/people.png'
import ai from '../../assets/ai.png'

import './header.scss'

const Header = () => {
  return (
    <header className='header' id='home'>
      <div className="header__content">
        <h1 className="gradient__text">Les's Build Something amazing with GPT-3 OpenAI</h1>
        <p>
          Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence
          way everything joy alteration boisterous the attachment.
          Party we years to order allow asked of.
        </p>

        <div className="content__input">
          <input type="email" placeholder='Your Email Adress' />
          <button type='button'>Get Started</button>
        </div>

        <div className="content__people">
          <img src={People} alt="People" />
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>

      </div>

      <div className="header__image">
        <img src={ai} alt="AI" />
      </div>
    </header>
  )
}

export default Header