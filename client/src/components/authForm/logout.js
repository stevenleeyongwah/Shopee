// Import library
import React, { Component } from 'react';
import { connect } from 'react-redux';

// Import components
import { logout } from 'actions/authActions';

class Logout extends Component {
  render() {
    return (
      <>
        <div onClick={this.props.logout} href="#">
          Logout
        </div>
      </>
    )
  }
};

export default connect(null, { logout })(Logout);
