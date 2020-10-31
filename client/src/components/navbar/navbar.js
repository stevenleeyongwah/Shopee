// Import library
import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { connect } from 'react-redux'

// Import css
import 'css/app.css';
import 'css/navbar.css';

// Import components
import { logout } from 'actions/authActions';

class Navbar extends Component {
  render() {
    return (
      <nav class="navbar navbar-expand-lg navbar-light shopee-orange">
        <div class="containers">
          <div class="collapse navbar-collapse" id="navbarNav">

            <ul class="navbar-nav mr-auto first-navbar">
              <li class="nav-item">
                <a class="nav-link" href="#">Seller Centre</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Sell on Shopee</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Download</a>
              </li>
              <li class="nav-item">
                <a class="nav-link follow-us" href="#">Follow us on<i class="ml-2 fab fa-facebook"></i><i class="ml-2 fab fa-instagram"></i></a>
              </li>
            </ul>

            <ul class="navbar-nav second-navbar">
              <li class="nav-item">
                <a class="nav-link" href="#"><i class="far fa-bell mr-2"></i>Notifications</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#"><i class="far fa-question-circle mr-2"></i>Help</a>
              </li>
              {
                this.props.isAuthenticated ?
                  <>
                    <li>
                      <i class="fas fa-user-circle mr-2 text-light"></i>
                      <span class="user-name">{this.props.user.name}</span>
                    </li>
                    <li class="nav-item ml-3" >
                      <NavLink class="nav-link" onClick={this.props.logout} to="/">Log out</NavLink>
                    </li>
                  </>
                  :
                  <>
                    <li class="nav-item ml-3 sign-up">
                      <a class="nav-link" href="/signUp">Sign Up</a>
                    </li>
                    <li class="nav-item login">
                      <a class="nav-link follow-us" href="/login">Login</a>
                    </li>
                  </>
              }
            </ul>
          </div>
          <div class="mt-4">
            <img src="/images/shopee.jpg" alt="image" class="shopeeImage"/>
            <form class="">
              <input class="form-control mr-sm-2 search-bar" type="search" placeholder="Search" aria-label="Search" />
            </form>
          </div>
        </div>
      </nav>
    )
  }

}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  user: state.auth.user
})

export default connect(
  mapStateToProps,
  { logout }
)(Navbar)

// {this.props.user.name}
