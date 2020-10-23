// Import library
import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import { Route, BrowserRouter } from 'react-router-dom'
import './App.css';
import { Provider } from 'react-redux'
import store from './store'

// Import components
import Main from './components/Main'
import Login from './components/authForm/Login'
import SignUp from './components/authForm/SignUp'
import ShoppingList from './components/ShoppingList'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Route exact path='/' component={Main}/>
          <Route exact path='/signUp' component={SignUp}/>
          <Route exact path='/login' component={Login}/>
          <Route exact path='/electronics' component={ShoppingList}/>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
