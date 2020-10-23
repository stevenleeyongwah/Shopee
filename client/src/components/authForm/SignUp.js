import React, { Component } from 'react'
import './auth.css';
import Footer from './footer'
import { Link, NavLink } from 'react-router-dom'

function SignUp() {
  return (
    <>
      <header class="header">
          <div>
            <img type="image" src="images/shopee1.png" alt="Amazon" class="shopeeLogo" />
            <span class="headerText">Sign Up</span>
          </div>
          <h3 class="headerText"><a href="#" class="needHelp">Need help?</a></h3>
      </header>
      <div class="d-flex flex-column align-items-center body">
        <div class="card" style={{width: "40rem"}}>
          <div class="card-body">
            {/* Title */}
            <h5 class="card-title title">Sign Up</h5>

            {/* Username */}
            <input type="text" class="form-control mb-4" style={{borderColor: "grey"}} autofocus="autofocus" placeholder="Username" />

            {/* Email */}
            <input type="text" class="form-control mb-4" style={{borderColor: "grey"}} placeholder="Email" />

            {/* Password */}
            <input type="text" class="form-control mb-4" style={{borderColor: "grey"}} placeholder="Password" />

            {/* Sign Up */}
            <button type="button" class="btn btn-block signUpButton mb-1 mt-3" >Sign Up</button>

            {/* Divider */}
            <div class="separator">OR</div>

            {/* Sign Up with facebook, google, apple */}
            <div class="signUpWith">
              <button class="facebook"><i class="fab fa-facebook-f mr-4"></i>Facebook</button>
              <button class="google"><i class="fab fa-google mr-4"></i>Google</button>
              <button class="apple"><i class="fab fa-apple mr-4"></i>Apple</button>
            </div>

            {/* Sign Up Policy & Terms of Service */}
            <div class="signUpText">By signing up, you agree to Shopee's <a href="#">Terms of Service</a> & <a href="#">Privacy Policy</a></div>

            {/* Have an account? Log In */}
            <div class="haveAnAccount">Have an account?<a href="#"> Log In</a></div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default SignUp
