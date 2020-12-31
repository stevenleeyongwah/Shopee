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
  const [ phoneNumber, setPhoneNumber ] = useState('')

  const handleSubmit = (e) => {
    // Prevent page from refreshing when submit form
    e.preventDefault()
    
    
  }

  useEffect(() => {
    // 2 Steps in validating phone number
    if (phoneNumber.match(/(8|9)\d{7}$/g) !== null) {
      console.log("regex: ", phoneNumber.match(/(8|9)\d{7}$/g)[0])

      var prefixPhoneNumber = phoneNumber.split(/(8|9)\d{7}$/)[0].trim()
      console.log(prefixPhoneNumber)
      var correctPrefix = ["65", "(65)", "(+65)", "+65", ""]
      console.log(correctPrefix.includes(prefixPhoneNumber))
    } else {
      console.log("Phone num not valid")
    }

    // var string4 = 'one split two splat three splot'
    // var splitString4 = string4.split(/\s+(?:split|splat|splot)\s+/);
    // console.log(splitString4);
    

    // Display success or error message here
  }, [phoneNumber]);

  const validatePhoneNumber = (phoneNumber) => {

  }

  const handleChange = (e) => {

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
              <div className="form-title">
                <span>Sign Up</span>
              </div>
              <div className="form-body">
                <input className="phone-number-input input-error" name="phoneNumber" placeholder="Phone Number" onChange={(e) => setPhoneNumber(e.target.value.replace(/\s/g,''))} />
                <button className="submit-form-button">Next</button>
                <div className="seperator">
                  <div className="left"></div>
                  <span className="middle">OR</span>
                  <div className="right"></div>
                </div>
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
                <div className="sign-up-policy">
                  <span>By signing up, you agree to Shopee's </span>
                  <NavLink to="">Terms of Service </NavLink>
                  <span>& </span>
                  <NavLink to="">Privacy Policy</NavLink>
                </div>
              </div>
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

// {/* <div className="d-flex flex-column align-items-center body">
//           <div className="card" style={{width: "40rem"}}>
//             <div className="card-body">
//               {/* Title */}
//               <h5 className="card-title title">Sign Up</h5>

//               {/* sign up form */}
//               <form onSubmit={handleSubmit}>
//                 {/* Username */}
//                 <div class="mb-3">
//                   <input type="text" name="name" className="form-control" style={{borderColor: "grey"}} autoFocus="autofocus" placeholder="Username" onChange={onChange} />
//                   <div class="name-error invalid">{ this.state.msg ? this.state.msg.name : null }</div>
//                 </div>

//                 {/* Email */}
//                 <div class="mb-3">
//                   <input type="text" name="email" className="form-control" style={{borderColor: "grey"}} placeholder="Email" onChange={onChange} />
//                   <div class="email-error invalid">{ this.state.msg ? this.state.msg.email : null }</div>
//                 </div>

//                 {/* Password */}
//                 <div class="mb-3">
//                   <input type="password" name="password" className="form-control" style={{borderColor: "grey"}} placeholder="Password" onChange={onChange} />
//                   <div class="password-error invalid">{ this.state.msg ? this.state.msg.password : null }</div>
//                 </div>

//                 {/* Sign Up */}
//                 <button type="submit" className="btn btn-block signUpButton mb-1 mt-3" >Sign Up</button>
//               </form>

//               {/* Divider */}
//               <div className="separator">OR</div>

//               {/* Sign Up with facebook, google, apple */}
//               <div className="signUpWith">
//                 <button className="facebook"><i className="fab fa-facebook-f mr-4"></i>Facebook</button>
//                 <button className="google"><i className="fab fa-google mr-4"></i>Google</button>
//                 <button className="apple"><i className="fab fa-apple mr-4"></i>Apple</button>
//               </div>

//               {/* Sign Up Policy & Terms of Service */}
//               <div className="signUpText">By signing up, you agree to Shopee's <a href="#">Terms of Service</a> & <a href="#">Privacy Policy</a></div>

//               {/* Have an account? Log In */}
//               <div className="haveAnAccount">Have an account?<NavLink to="/login"> Log In</NavLink></div>
//             </div>
//           </div>
//         </div> */}