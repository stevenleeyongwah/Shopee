// Import library
import React, { useState, useEffect } from 'react'
import { Link, NavLink, useHistory } from 'react-router-dom'
import { connect } from 'react-redux'
import axios from 'axios'

// Import components
import Header from 'components/common/header'
import Footer from 'components/common/footer'
import { register } from 'actions/authActions'


function SignUp() {
  function changeInputDisplay(
    greenTick, 
    errorMessage,
    borderColour,
    backgroundColour,
    buttonDisabled,
    buttonCursor,
    buttonOpacity
    ) {
      document.getElementsByClassName("correct-green-tick")[0].style.display = greenTick;
      document.getElementsByClassName("phone-number-input-text-error")[0].innerHTML = errorMessage;
      document.getElementsByClassName("phone-number-input-box")[0].style.border = borderColour;
      document.getElementsByClassName("phone-number-input")[0].style.background = backgroundColour;
      document.getElementsByClassName("submit-form-button")[0].disabled = buttonDisabled;
      document.getElementsByClassName("submit-form-button")[0].style.cursor = buttonCursor;
      document.getElementsByClassName("submit-form-button")[0].style.opacity = buttonOpacity;
  }

  const handleSubmit = (e) => {
    // Prevent page from refreshing when submit form
    e.preventDefault()
    
    
  }

  const handleChange = (e) => {
    // Remove all spaces from input
    var tempPhoneNumber = e.target.value.replace(/\s/g,'')
    
    // If phone number is empty, perform the following
    if (tempPhoneNumber === ""){
      changeInputDisplay("none","","1px solid rgba(0,0,0,.25)","#fff",true,"not-allowed","0.7")
    }
    
    // If phone number is not empty, perform the following 
    else {
      
      // If phone number matches (8|9)*** ****
      if (tempPhoneNumber.match(/(8|9)\d{7}$/g) !== null) {
        
        // Extract phone number prefix
        var prefixPhoneNumber = tempPhoneNumber.split(/(8|9)\d{7}$/)[0].trim()

        // Define correct phone number prefix in an array
        var correctPrefix = ["65", "(65)", "(+65)", "+65", ""]

        // If user enters correct phone number prefix, perform the following
        if (correctPrefix.includes(prefixPhoneNumber) == true){
          changeInputDisplay("flex","","1px solid rgba(0,0,0,.25)","#fff",false,"pointer","1")

          // Change text of input box with standard singapore prefix (+65)
          document.getElementsByClassName("phone-number-input")[0].value = "(+65) " + tempPhoneNumber.match(/(8|9)\d{7}$/g);
        } else if (correctPrefix.includes(prefixPhoneNumber) == false){
          changeInputDisplay("none","Invalid Phone","1px solid #ee4d2d","#fff6f7",true,"not-allowed","0.7")
        }
      } else {
        changeInputDisplay("none","Invalid Phone","1px solid #ee4d2d","#fff6f7",true,"not-allowed","0.7")
      }
    }
  }

  return (
    <div className="sign-up-page">
      {/* Header */}
      <Header headerText="Sign Up" />
      
      {/* Body */}
      <div className="sign-up-body">
        <div className="image-body">
          <form>
            <div className="form-wrapper">
              
              {/* form title */}
              <div className="form-title">
                <span>Sign Up</span>
              </div>

              {/* form body */}
              <div className="form-body">

                {/* Phone number input */}
                <div className="phone-number-section">
                  <div className="phone-number-input-box" >
                    <input className="phone-number-input" type="text" name="phoneNumber" placeholder="Phone Number" onChange={handleChange} />
                    <div className="correct-green-tick">
                      <svg fill="none" viewBox="0 0 16 16" class="stardust-icon stardust-icon-success-with-circle _1a0pcZ"><path fill="none" stroke="#6C0" d="M8 15A7 7 0 108 1a7 7 0 000 14z" clip-rule="evenodd"></path><path stroke="none" fill="#6C0" fill-rule="evenodd" d="M11.621 6.406l-3.98 4.059c-.266.266-.719.244-1.012-.049-.293-.293-.314-.746-.048-1.012l3.98-4.059c.266-.266.719-.245 1.012.048.293.293.314.747.048 1.013z" clip-rule="evenodd"></path><path stroke="none" fill="#6C0" fill-rule="evenodd" d="M3.803 7.997l2.81 2.532c.267.267.72.245 1.013-.048.293-.293.315-.746.048-1.012l-2.81-2.532c-.267-.267-.72-.245-1.013.048-.293.293-.314.746-.048 1.012z" clip-rule="evenodd"></path></svg>
                    </div>
                  </div>
                  <div className="phone-number-input-text-error"></div>
                </div>

                {/* Submit form button */}
                <button className="submit-form-button">Next</button>
                
                {/* Seperator */}
                <div className="seperator">
                  <div className="left"></div>
                  <span className="middle">OR</span>
                  <div className="right"></div>
                </div>
                
                {/* Others sign up method */}
                <div className="others-sign-up-method">
                  <button className="facebook-button">
                    <div className="logo-wrapper">
                      <div className="facebook-logo"></div>
                    </div>
                    <div className="button-text">Facebook</div>
                  </button>
                  <button className="google-button">
                    <div className="logo-wrapper">
                      <div className="google-logo"></div>
                    </div>
                    <div>Google</div>
                  </button>
                  <button className="apple-button">
                    <div className="logo-wrapper">
                      <div className="apple-logo"></div>
                    </div>
                    <div>Apple</div>
                  </button>                    
                </div>
                
                {/* Sign up policy text */}
                <div className="sign-up-policy">
                  <span>By signing up, you agree to Shopee's </span>
                  <NavLink to="">Terms of Service </NavLink>
                  <span>& </span>
                  <NavLink to="">Privacy Policy</NavLink>
                </div>
              </div>
              
              {/* Log in if already have an account */}
              <div className="form-footer">
                <span>Have an account?</span>
                <NavLink to="">  Log In</NavLink>
              </div>
            </div>
          </form>
        </div>
      </div>
      {/* Footer */}
      <Footer />
    </div>
  )
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.error
})

export default connect(
  mapStateToProps,
  { register }
)(SignUp)
