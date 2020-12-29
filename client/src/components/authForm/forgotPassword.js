// Import library
import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'

// Import components
import Header from 'components/common/header'
import Footer from 'components/common/footer'
import { connect } from 'react-redux'
import { login } from 'actions/authActions'

class Login extends Component {
  render () {

    return (
      <>
        <Header header="Reset Password" />
        
        <Footer />
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
