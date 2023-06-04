import React from 'react'
import { Feature } from '../../components'

import './features.scss'

const featuresData = [
  {
    title: 'Improving end distrusts instantly',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia libero unde, quidem voluptatibus ab deserunt.'
  },
  {
    title: 'Become the tended active',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia libero unde, quidem voluptatibus ab deserunt.'
  },
  {
    title: 'Message or am nothing',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia libero unde, quidem voluptatibus ab deserunt.'
  },
  {
    title: 'Really boy law country',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia libero unde, quidem voluptatibus ab deserunt.'
  },
]

const Features = () => {
  return (
    <div className='features section__padding' id='features'>
      <div className="features__heading">
        <h1 className="gradient__text">The Future is Now and You Just Need To Realize It. Step into Future Today & Make it Happen.</h1>
        <p>Request Early Access to Get Started</p>
      </div>

      <div className="features__container">
        {featuresData.map((item, index) => (
          <Feature title={item.title} text={item.text} key={item.title + index} />
        ))}
      </div>
    </div>
  )
}

export default Features