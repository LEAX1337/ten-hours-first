import React from 'react'
import { Article } from '../../components'
import { blog01, blog02, blog03, blog04, blog05} from './imports'

import './blog.scss'

const Blog = () => {
  return (
    <div className='blog section__padding' id='blog'>
      <div className="blog__heading">
        <h1 className="gradient__text">A lot is hapenning, We are blogging about it.</h1>
      </div>

      <div className="blog__container">
          <div className='blog__container-groupA'>
            <Article imgUrl={blog01} date="Sep 26, 2021" title="A lot is hapenning, We are blogging about it." />
          </div>

          <div className="blog__container-groupB">
            <Article imgUrl={blog02} date="Sep 26, 2021" title="A lot is hapenning, We are blogging about it." />
            <Article imgUrl={blog03} date="Sep 26, 2021" title="A lot is hapenning, We are blogging about it." />
            <Article imgUrl={blog04} date="Sep 26, 2021" title="A lot is hapenning, We are blogging about it." />
            <Article imgUrl={blog05} date="Sep 26, 2021" title="A lot is hapenning, We are blogging about it." />
          </div>
      </div>
              
    </div>
  )
}

export default Blog