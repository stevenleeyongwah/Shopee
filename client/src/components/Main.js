import React, { Component } from 'react'
import Navbar from './Navbar'
import { Link, NavLink } from 'react-router-dom'

function Main() {
    return (
        <>
          <Navbar />
          <div class="card" style={{ width: "30rem" }}>
            <div class="card-body">
              <NavLink to="/electronics"><img class="card-img-top" src="images/HeadPhone.jpg" style={{ width: "60%", height: "60%" }} /></NavLink>
              <p style={{ fontSize: "13px" }}>Electronics</p>
            </div>
          </div>
        </>
    )
}


export default Main
