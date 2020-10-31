import React, { Component } from 'react'
import Navbar from 'components/navbar/navbar'
import ShoppingList from 'components/shoppingList'
import { Link, NavLink } from 'react-router-dom'
import { Route, BrowserRouter } from 'react-router-dom'

class Main extends Component {
    render() {
      return (
          <>
              <Navbar />
              <ShoppingList history={this.props.history} />
          </>
      )
    }
}


export default Main
