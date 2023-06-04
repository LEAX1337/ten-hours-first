import React from 'react'
import './whatgpt3.scss'
import { Feature } from '../../components'

const WhatGPT3 = () => {
  return (
    <div className='whatgpt3 section__margin' id='whatgpt3'> 
      <div className='whatgpt3__feature'>
        <Feature title="What is GPT-3"  text="Lorem ipsum dolor sit amet consectetur adipisicing elit.
         Et odio recusandae necessitatibus neque minima dignissimos quae, porro expedita delectus blanditiis in sunt, 
         tempora maiores numquam mollitia! Doloremque facilis non, ut omnis incidunt totam quos perspiciatis architecto 
         velit, nostrum, blanditiis quas quia accusantium sapiente rerum molestiae numquam eligendi odit! Sapiente, veniam!"/>
      </div>

      <div className="whatgpt3__heading">
        <h1 className="gradient__text">
          The possibilities are beyond your imagination
        </h1>

        <p>Explore The Library</p>
      </div>

      <div className="whatgpt3__container">
        <Feature title="Chatbots" text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae odio architecto, recusandae earum quas reprehenderit id quidem optio est perspiciatis?" />
        <Feature title="Knowledgebase" text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae odio architecto, recusandae earum quas reprehenderit id quidem optio est perspiciatis?" />
        <Feature title="Education" text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae odio architecto, recusandae earum quas reprehenderit id quidem optio est perspiciatis?" />
      </div>
    </div>
  )
}

export default WhatGPT3