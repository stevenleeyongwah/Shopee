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
        <Header header="Login" />
        <div className="d-flex flex-column align-items-center body">
          <div className="card" style={{width: "40rem"}}>
            <div className="card-body">
              {/* Title */}
              <h5 className="card-title title">Login</h5>

              {/* General error */}
              <div className="alert-warning alert-dismissible alert" role="alert" id="alert">
                { displayAlert() }
              </div>

              {/* sign up form */}
              <form onSubmit={handleSubmit}>
                {/* Email */}
                <div className="mb-3">
                  <input type="text" name="email" className="form-control" style={{borderColor: "grey"}} placeholder="Email" onChange={onChange} />
                  <div className="email-error invalid">{ this.state.msg ? this.state.msg.email : null }</div>
                </div>

                {/* Password */}
                <div className="mb-3">
                  <input type="password" name="password" className="form-control" style={{borderColor: "grey"}} placeholder="Password" onChange={onChange} />
                  <div className="password-error invalid">{ this.state.msg ? this.state.msg.password : null }</div>
                </div>

                {/* Sign Up */}
                <button type="submit" className="btn btn-block signUpButton mb-1 mt-3" >Login</button>
              </form>

              {/* Forgot Password, Login with SMS */}
              <div className="d-flex justify-content-between mt-3">
                <NavLink to="/forgotPassword" style={{textDecoration: "none"}}>Forgot Password</NavLink>
                <NavLink to="/" style={{textDecoration: "none"}}>Log in with SMS</NavLink>
              </div>

              {/* Divider */}
              <div className="separator">OR</div>

              {/* Sign Up with facebook, google, apple */}
              <div className="signUpWith">
                <button className="facebook"><i className="fab fa-facebook-f mr-4"></i>Facebook</button>
                <button className="google"><i className="fab fa-google mr-4"></i>Google</button>
                <button className="apple"><i className="fab fa-apple mr-4"></i>Apple</button>
              </div>

              {/* Have an account? Log In */}
              <div className="haveAnAccount">New to Shopee?<NavLink to="/signUp"> Sign Up</NavLink></div>
            </div>
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
