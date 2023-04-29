import React from 'react'

import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import logo from '../../assets/logo.svg'

import './navbar.scss'

const Menu = () => (
  <>
    <p><a href="#home">Home</a></p>
    <p><a href="#wpgt3">What is GPT?</a></p>
    <p><a href="#possibility">Open AI</a></p>
    <p><a href="#features">Case Studies</a></p>
    <p><a href="#blog">Library</a></p>
  </>
)

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false)

  return (
    <div className='gpt3__navbar'>
      <div className="gpt3__navbar-links">

        <div className="gpt3__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>

        <div className="gpt3__navbar-links_container">
          <Menu />
        </div>

      </div>

      <div className='flex items-center'>

        <div className="gpt3__navbar-sign">
          <p>Sign in</p>
          <button>Sign up</button>
        </div>

        <div className="gpt3__navbar-menu">
          {
            toggleMenu 
            ? <RiCloseLine className='fill-white' size={27} onClick={() => setToggleMenu(false) } />
            : <RiMenu3Line className='fill-white' size={27} onClick={() => setToggleMenu(true) }/>
          }
          {
            toggleMenu && 
              <div className="gpt3__navbar-menu_container scale-up-center">
                  <div className="gpt3__navbar-menu_container-links">
                    <Menu />
                    <div className="gpt3__navbar-menu_container-links-sign">
                      <p>Sign in</p>
                      <button>Sign up</button>
                  </div>
                  </div>
              </div>
          }
        </div>
      </div>

      
    </div>
  )
}

export default Navbar