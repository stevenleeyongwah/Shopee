import React, { Component } from 'react'
import './auth.css';
import './signUp.css';
import axios from 'axios'
import Header from './header'
import Footer from './footer'
import { Link, NavLink, useHistory } from 'react-router-dom'
import { connect } from 'react-redux'
import { register } from '../../actions/authActions'

class SignUp extends Component {
  let history = useHistory()

  const handleSubmit = async (e) => {

    // Get references from html docs
    const nameError = document.querySelector('.name-error');
    const emailError = document.querySelector('.email-error');
    const passwordError = document.querySelector('.password-error');

    // Clear errors in html docs
    nameError.textContent = ''
    emailError.textContent = ''
    passwordError.textContent = ''

    // Prevent page from refreshing when submit form
    e.preventDefault()

    // Extract value from form
    const name = e.target.name.value
    const email = e.target.email.value
    const password = e.target.password.value

    // Send POST request to backend
    const response = await fetch('/authRoutes/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, password })
    });

    const data = await response.json()

    if (data.errors) {
      // Inject error into html docs
      nameError.textContent = data.errors.name
      emailError.textContent = data.errors.email
      passwordError.textContent = data.errors.password
    }

    if (data.user) {
      history.push('/')
    }
  }

  return (
    <>
      <Header />
      <div className="d-flex flex-column align-items-center body">
        <div className="card" style={{width: "40rem"}}>
          <div className="card-body">
            {/* Title */}
            <h5 className="card-title title">Sign Up</h5>

            {/* sign up form */}
            <form onSubmit={handleSubmit}>
              {/* Username */}
              <div class="mb-3">
                <input type="text" name="name" className="form-control" style={{borderColor: "grey"}} autoFocus="autofocus" placeholder="Username" />
                <div class="name-error invalid"></div>
              </div>

              {/* Email */}
              <div class="mb-3">
                <input type="text" name="email" className="form-control" style={{borderColor: "grey"}} placeholder="Email" />
                <div class="email-error invalid"></div>
              </div>

              {/* Password */}
              <div class="mb-3">
                <input type="password" name="password" className="form-control" style={{borderColor: "grey"}} placeholder="Password" />
                <div class="password-error invalid"></div>
              </div>

              {/* Sign Up */}
              <button type="submit" className="btn btn-block signUpButton mb-1 mt-3" >Sign Up</button>
            </form>

            {/* Divider */}
            <div className="separator">OR</div>

            {/* Sign Up with facebook, google, apple */}
            <div className="signUpWith">
              <button className="facebook"><i className="fab fa-facebook-f mr-4"></i>Facebook</button>
              <button className="google"><i className="fab fa-google mr-4"></i>Google</button>
              <button className="apple"><i className="fab fa-apple mr-4"></i>Apple</button>
            </div>

            {/* Sign Up Policy & Terms of Service */}
            <div className="signUpText">By signing up, you agree to Shopee's <a href="#">Terms of Service</a> & <a href="#">Privacy Policy</a></div>

            {/* Have an account? Log In */}
            <div className="haveAnAccount">Have an account?<a href="#"> Log In</a></div>
          </div>
        </div>
      </div>
      <Footer />
    </>
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
