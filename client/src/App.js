// Import library
import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { Route, BrowserRouter } from 'react-router-dom'

// Import css
import "bootstrap/dist/css/bootstrap.min.css"
import 'css/app.css';

// Import components
import Main from 'components/main'
import Login from 'components/authForm/login'
import SignUp from 'components/authForm/signUp'
import ForgotPassword from 'components/authForm/forgotPassword'
import ShoppingList from 'components/shoppingList'
import Product from 'components/product'
import store from 'components/store/store'
import { loadUser } from 'actions/authActions'

class App extends Component {
  componentDidMount(){
    store.dispatch(loadUser())
  }
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <Route exact path='/' component={Main}/>
            <Route exact path='/signUp' component={SignUp}/>
            <Route exact path='/login' component={Login}/>
            <Route exact path='/forgotPassword' component={ForgotPassword}/>
            <Route exact path='/shoppingList' component={ShoppingList}/>
            <Route exact path='/product/:Id' component={Product}/>
          </div>
        </BrowserRouter>
      </Provider>

    );
  }
}

export default App;
