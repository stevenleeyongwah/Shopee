// Import library
import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { connect } from 'react-redux'

// Import components
import { logout } from 'actions/authActions';

class Navbar extends Component {
  render() {
    return (
      <div class="navbar">
        {/* Top navbar */}
        <div className="top-navbar">
            {/* Top left navbar */}
            <div className="top-left-navbar">
              {/* Seller center */}
              <NavLink className="seller-center" to="#">Seller Center</NavLink>
              {/* Sell on Shopee */}
              <NavLink className="sell-on-shopee" to="#">Sell on Shopee</NavLink>
              {/* Download */}
              <div className="download">Download</div>
              {/* Follow us on */}
              <div className="follow-us-on">Follow us on</div>
              {/* Logo */}
              <div className="logo">
                <i className="ml-2 fab fa-facebook"></i>
                <i className="ml-2 fab fa-instagram"></i>
              </div>

            </div>
            {/* Spacer */}
            <div className="top-navbar-spacer"></div>
            {/* Top right navbar */}
            <div className="top-right-navbar">
              <ul>
                <li className="">
                  <NavLink className="notifications" to="#">
                    <i className="far fa-bell"></i>
                    <span>Notifications</span>
                  </NavLink>
                </li>
                <li className="">
                  <NavLink className="help" to="#">
                    <i className="far fa-question-circle"></i>
                    <span>Help</span>
                  </NavLink>
                </li>
                <li className="">
                  <NavLink className="user" to="#">
                    <i class="fas fa-user-circle text-light"></i>
                    <span>stevenleeyongwah96</span>
                  </NavLink>
                </li>
              </ul>
            </div>
        </div>

        {/* Bottom navbar */}
        <div className="bottom-navbar">
          {/* Shopee logo */}
          <NavLink className="" to="#">

          </NavLink>
          {/* Search bar section */}
          <div className="bottom-middle-navbar">
            <div className="search-bar">
              <div>
                <form>
                  <input />
                </form>
              </div>
              <button></button>
            </div>
            <div className="items"></div>
          </div>
          {/* Shopping cart */}
          <div className="bottom-right-navbar">
            <div className="shopping-cart"></div>
          </div>
        </div>
      </div>
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
