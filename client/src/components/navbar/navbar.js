// Import library
import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { connect } from 'react-redux'

// Import components
import { logout } from 'actions/authActions';

class Navbar extends Component {
  render() {
    return (
      <div class="">
        {/* Top navbar */}
        <div className="">
          <div className="">
            {/* Top left navbar */}
            <div className="top-left-navbar">
              {/* Seller center */}
              <NavLink to="#">Seller Center</NavLink>
              {/* Sell on Shopee */}
              <NavLink to="#">Sell on Shopee</NavLink>
              {/* Download */}
              <div>Download</div>
              {/* Follow us on */}
              <div>
                Follow us on
                <i class="ml-2 fab fa-facebook"></i>
                <i class="ml-2 fab fa-instagram"></i>
              </div>
            </div>
            {/* Spacer */}
            <div className="">
            
            </div>
            {/* Top right navbar */}
            <div className="">
            
            </div>
          </div>
        </div>

        {/* Bottom navbar */}
        <div className="">

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
