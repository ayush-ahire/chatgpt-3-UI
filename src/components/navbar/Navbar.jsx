import React from 'react'
import { useState } from 'react';
import { RiCloseLine, RiMenuLine } from "react-icons/ri";
import './navbar.css'
import logo from '../../assets/logo.svg'

const Navbar = () => {
  const [toggleMenu, settoggleMenu] = useState('')
  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="gpt3__navbar-links_container">
          <p><a href="#home">Home</a></p>
          <p><a href="#gpt3">GPT?</a></p>
          <p><a href="#casestudies">Case Studies</a></p>
          <p><a href="#possibility">Open AI</a></p>
          <p><a href="#blog">Library</a></p>
        </div>
      </div>
      <div className="gpt3__navbar-sign">
        <p>Sign In</p>
        <button type='button'>Sign Up</button>
      </div>
      <div className="gpt3__navbar-menu">
        {toggleMenu ? <RiCloseLine color='#fff' size={25} onClick={() => settoggleMenu(false)} />
          : <RiMenuLine color='#fff' size={25} onClick={() => settoggleMenu(true)} />}
        {toggleMenu && (
          <div className="gpt3__navbar-menu_container scale-up-center">
            <div className="gpt3__navbar-menu_container-links">
              <p><a href="#home">Home</a></p>
              <p><a href="#gpt3">GPT?</a></p>
              <p><a href="#casestudies">Case Studies</a></p>
              <p><a href="#possibility">Open AI</a></p>
              <p><a href="#blog">Library</a></p>
              <div className="gpt3__navbar-menu_container-links-sign">
              <p>Sign In</p>
              <button type='button'>Sign Up</button>
            </div>
            </div>
           
          </div>
        )

        }
      </div>
    </div>
  )
}

export default Navbar