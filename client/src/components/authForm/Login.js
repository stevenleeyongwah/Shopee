import React, { Component } from 'react'
import './auth.css';
import { Link, NavLink } from 'react-router-dom'

function Login() {
  return (
    <>
      <div class="d-flex flex-column align-items-center">
        <input type="image" src="images/amazon.png" alt="Amazon" class="image img-responsive text-center"/>
        <div class="card" style={{width: "25rem"}}>
          <div class="card-body">
            {/* Title */}
            <h5 class="card-title">Login</h5>

            {/* Email or mobile phone number */}
            <span class="card-text" style={{fontWeight: "bold"}}>Email or mobile phone number</span>
            <input type="text" class="form-control mb-3" style={{borderColor: "grey"}} autofocus="autofocus" />

            {/* Continue */}
            <button type="button" class="btn btn-block LoginButton mb-3" >Continue</button>
            <span style={{fontSize: "12px"}}>By continuing, you agree to Amazon's <Link to="/cou">Conditions of Use</Link> and <Link to="/pn">Privacy Notice</Link></span>
            <div class="mt-4">
              <i class="fas fa-caret-right"><Link to="/Login" class="ml-2" style={{ color: "cornflowerblue" }}>Need help?</Link></i>
            </div>
          </div>
        </div>
        <div class="separator mt-3" style={{width: "25rem"}}>New to Amazon?</div>
        <NavLink to="/CreateAccount"><button type="button" class="btn btn-secondary createAccount btn-block mt-2" style={{width: "25rem"}}>Create your Amazon account</button></NavLink>
      </div>
    </>
  )
}

export default Login
