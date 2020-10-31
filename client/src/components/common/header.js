// Import library
import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'

// Import css
import 'css/header.css';

function Header({ header }) {
  return (
    <>
      <header className="header">
          <div>
            <img type="image" src="images/shopee1.png" alt="Shopee" className="shopeeLogo" />
            <span className="headerText">{header}</span>
          </div>
          <h3 className="headerText"><a href="#" className="needHelp">Need help?</a></h3>
      </header>
    </>
  )
}

export default Header
