// Import library
import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'

// Import components
import Header from 'components/common/header'
import Footer from 'components/common/footer'
import { connect } from 'react-redux'
import { login } from 'actions/authActions'

class Login extends Component {
  state = {
    email: '',
    password: '',
    msg: []
  }

  componentDidUpdate(prevProps) {
    const { error, isAuthenticated } = this.props

    if(error != prevProps.error){
      if (error.id === 'LOGIN_FAIL') {
        this.setState({
          msg: error.msg.errors
        })
      } else {
        this.setState({
          msg: []
        })
      }
    }

    if ( isAuthenticated ) {
      this.props.history.push("/")
    }
  }

  render () {
    const onChange = (e) => {

      this.setState({
        [e.target.name]: e.target.value
      })
    }

    const handleSubmit = (e) => {
      // Prevent page from refreshing when submit form
      e.preventDefault()

      const { email, password } = this.state

      const newUser = {
        email, password
      }

      // Attempt to register
      this.props.login(newUser)
    }

    const displayAlert = () => {
      if (this.state.msg.hasOwnProperty("generalError") && this.state.msg.generalError != "") {
        document.getElementsByClassName("alert")[0].style.display = "block";
        return this.state.msg.generalError
      } else {
        const alert = document.getElementsByClassName("alert")
        if ( alert[0] !== undefined ) {
          alert[0].style.display = "none";
        }

        return null
      }
    }

    return (
      <>
        <Header headerText="Sign Up" />
        <div className="sign-up-body">
          <div className="image-body">
            <form>
              <div class="_1t9Dup _7p8xth _1W4V3v">
                <div class="F6pUq_">
                  <div class="_1x1Hdu">
                    <div class="_38VpOh">Log In</div>
                    <div class="_18uQkT">
                      <div class="sHVwF9">Log in with QR</div>
                      <a class="_158uwD" href="/buyer/login/qr?next=https%3A%2F%2Fshopee.sg%2F">
                        <svg width="40" height="40" fill="none" class="MFODJA"><g clip-path="url(#clip0)"><path fill-rule="evenodd" clip-rule="evenodd" d="M18 0H0v18h18V0zM3 15V3h12v12H3zM18 22H0v18h18V22zm-3 15H3V25h12v12zM40 0H22v18h18V0zm-3 15H25V3h12v12z" fill="#EE4D2D"></path><path d="M37 37H22.5v3H40V22.5h-3V37z" fill="#EE4D2D"></path><path d="M27.5 32v-8h-3v8h3zM33.5 32v-8h-3v8h3zM6 6h6v6H6zM6 28h6v6H6zM28 6h6v6h-6z" fill="#EE4D2D"></path><path fill="#fff" d="M-4.3 4l44 43.9-22.8 22.7-43.9-44z"></path></g><defs><clipPath id="clip0"><path fill="#fff" d="M0 0h40v40H0z"></path></clipPath></defs></svg>
                      </a>
                    </div>
                  </div>
                </div>
                <div class="_1B7mke"><div>
              </div>
              <div class="_1HkukX">
                <div class="FcG1bN">
                  <input class="_56AraZ" type="text" placeholder="Phone number / Username / Email" autocomplete="on" name="loginKey" maxlength="128" value="(+65) 81678954" />
                </div>
                <div class="_1pHauM"></div>
              </div>
              <div class="_3Uo2e7">
                <div class="FcG1bN">
                  <input class="_56AraZ" type="password" placeholder="Password" autocomplete="current-password" name="password" maxlength="16" value="71sw9688lee" />
                  <button class="_3ZXx_s">
                    <svg fill="none" viewBox="0 0 20 10" class="stardust-icon stardust-icon-eye-shut _2ZB_MH"><path stroke="none" fill="#000" fill-opacity=".54" d="M19.834 1.15a.768.768 0 00-.142-1c-.322-.25-.75-.178-1 .143-.035.036-3.997 4.712-8.709 4.712-4.569 0-8.71-4.712-8.745-4.748a.724.724 0 00-1-.071.724.724 0 00-.07 1c.07.106.927 1.07 2.283 2.141L.631 5.219a.69.69 0 00.036 1c.071.142.25.213.428.213a.705.705 0 00.5-.214l1.963-2.034A13.91 13.91 0 006.806 5.86l-.75 2.535a.714.714 0 00.5.892h.214a.688.688 0 00.679-.535l.75-2.535a9.758 9.758 0 001.784.179c.607 0 1.213-.072 1.785-.179l.75 2.499c.07.321.392.535.677.535.072 0 .143 0 .179-.035a.714.714 0 00.5-.893l-.75-2.498a13.914 13.914 0 003.248-1.678L18.3 6.147a.705.705 0 00.5.214.705.705 0 00.499-.214.723.723 0 00.036-1l-1.82-1.891c1.463-1.071 2.32-2.106 2.32-2.106z"></path></svg>
                  </button>
                </div>
                <div class="_1pHauM"></div>
              </div>
              <button class="_35rr5y _32qX4k _1ShBrl _3z3XZ9 _2iOIqx _2h_2_Y">Log In</button>
              <div class="QnCMt9">
                <a class="O64rDC" href="/buyer/login/reset">Forgot Password</a>
                <a class="O64rDC" href="/buyer/login/otp?next=https%3A%2F%2Fshopee.sg%2F">Log in with SMS</a>
              </div>
              <div>
                <div class="_1H97P4">
                  <div class="_1-lZms"></div>
                  <span class="_2vzJrV">OR</span>
                  <div class="_1-lZms"></div>
                </div>
                <div class="_1p6-r9">
                  <button class="_35rr5y _32qX4k _3Bn0WQ WEKQ8O _1lANZ5">
                    <div class="_2RF1Ts">
                      <div class="_3ToC_U social-white-background social-white-fb-png"></div>
                    </div>
                    <div class="_3JJsrr _1trMER">Facebook</div>
                  </button>
                  <button class="_35rr5y _32qX4k _3Bn0WQ WEKQ8O a6g9DN">
                    <div class="_2RF1Ts _1-atte">
                      <div class="_3X-VvE social-white-background social-white-google-png"></div>
                    </div>
                    <div class="_3JJsrr">Google</div>
                  </button>
                  <button class="_35rr5y _32qX4k _3Bn0WQ WEKQ8O _3t9SSB">
                    <div class="_2RF1Ts">
                      <div class="_3ToC_U social-white-background social-white-apple-png"></div>
                    </div>
                    <div class="_3JJsrr">Apple</div>
                  </button>
                </div>
              </div>
              </div>
              <div class="_1EcXrn">
                <div class="_3SZqDE">
                  <span class="_39jZa0">New to Shopee?</span>
                  <a class="_1gLe-h" href="/buyer/login/signup?next=https%3A%2F%2Fshopee.sg%2F">Sign Up</a>
                </div>
              </div>
                  </div>
            </form>
          </div>
        </div>
      </>
    )
  }

}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.error
})

export default connect(
  mapStateToProps,
  { login }
)(Login)

// {/* <Header header="Login" />
//         <div className="d-flex flex-column align-items-center body">
//           <div className="card" style={{width: "40rem"}}>
//             <div className="card-body">
//               {/* Title */}
//               <h5 className="card-title title">Login</h5>

//               {/* General error */}
//               <div className="alert-warning alert-dismissible alert" role="alert" id="alert">
//                 { displayAlert() }
//               </div>

//               {/* sign up form */}
//               <form onSubmit={handleSubmit}>
//                 {/* Email */}
//                 <div className="mb-3">
//                   <input type="text" name="email" className="form-control" style={{borderColor: "grey"}} placeholder="Email" onChange={onChange} />
//                   <div className="email-error invalid">{ this.state.msg ? this.state.msg.email : null }</div>
//                 </div>

//                 {/* Password */}
//                 <div className="mb-3">
//                   <input type="password" name="password" className="form-control" style={{borderColor: "grey"}} placeholder="Password" onChange={onChange} />
//                   <div className="password-error invalid">{ this.state.msg ? this.state.msg.password : null }</div>
//                 </div>

//                 {/* Sign Up */}
//                 <button type="submit" className="btn btn-block signUpButton mb-1 mt-3" >Login</button>
//               </form>

//               {/* Forgot Password, Login with SMS */}
//               <div className="d-flex justify-content-between mt-3">
//                 <NavLink to="/forgotPassword" style={{textDecoration: "none"}}>Forgot Password</NavLink>
//                 <NavLink to="/" style={{textDecoration: "none"}}>Log in with SMS</NavLink>
//               </div>

//               {/* Divider */}
//               <div className="separator">OR</div>

//               {/* Sign Up with facebook, google, apple */}
//               <div className="signUpWith">
//                 <button className="facebook"><i className="fab fa-facebook-f mr-4"></i>Facebook</button>
//                 <button className="google"><i className="fab fa-google mr-4"></i>Google</button>
//                 <button className="apple"><i className="fab fa-apple mr-4"></i>Apple</button>
//               </div>

//               {/* Have an account? Log In */}
//               <div className="haveAnAccount">New to Shopee?<NavLink to="/signUp"> Sign Up</NavLink></div>
//             </div>
//           </div>
//         </div> */}