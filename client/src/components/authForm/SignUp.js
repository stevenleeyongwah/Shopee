// Import library
import React, { Component } from 'react'
import { Link, NavLink, useHistory } from 'react-router-dom'
import { connect } from 'react-redux'
import axios from 'axios'

// Import components
import Header from 'components/common/header'
import Footer from 'components/common/footer'
import { register } from 'actions/authActions'

class SignUp extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    msg: null
  }

  componentDidUpdate(prevProps) {

    const { error, isAuthenticated } = this.props
    if(error != prevProps.error){
      if (error.id === 'REGISTER_FAIL') {
        this.setState({
          msg: error.msg.errors
        })
      } else {
        this.setState({
          msg: null
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

      const { name, email, password } = this.state

      const newUser = {
        name, email, password
      }

      // Attempt to register
      this.props.register(newUser)
    }

    return (
      <>
        <Header header="Sign Up" />
        <div className="d-flex flex-column align-items-center body">
          <div className="card" style={{width: "40rem"}}>
            <div className="card-body">
              {/* Title */}
              <h5 className="card-title title">Sign Up</h5>

              {/* sign up form */}
              <form onSubmit={handleSubmit}>
                {/* Username */}
                <div class="mb-3">
                  <input type="text" name="name" className="form-control" style={{borderColor: "grey"}} autoFocus="autofocus" placeholder="Username" onChange={onChange} />
                  <div class="name-error invalid">{ this.state.msg ? this.state.msg.name : null }</div>
                </div>

                {/* Email */}
                <div class="mb-3">
                  <input type="text" name="email" className="form-control" style={{borderColor: "grey"}} placeholder="Email" onChange={onChange} />
                  <div class="email-error invalid">{ this.state.msg ? this.state.msg.email : null }</div>
                </div>

                {/* Password */}
                <div class="mb-3">
                  <input type="password" name="password" className="form-control" style={{borderColor: "grey"}} placeholder="Password" onChange={onChange} />
                  <div class="password-error invalid">{ this.state.msg ? this.state.msg.password : null }</div>
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
              <div className="haveAnAccount">Have an account?<NavLink to="/login"> Log In</NavLink></div>
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
  { register }
)(SignUp)
