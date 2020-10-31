import axios from 'axios'
import { returnErrors } from './errorActions'
import {
  USER_LOADED,
  USER_LOADING,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  REGISTER_SUCCESS,
  REGISTER_FAIL
} from './types'

export const loadUser = () => (dispatch, getState) => {
  // User loading
  dispatch({ type: USER_LOADING })

  axios.get('/auth/user', tokenConfig(getState))
    .then(res => {
      dispatch({
        type: USER_LOADED,
        payload: res.data
      })
    })
    .catch(err => {
      dispatch(returnErrors(err.response.data, err.response.status))
      dispatch({
        type: AUTH_ERROR
      })
    })
}

// Register User
export const register = ({ name, email, password }) => dispatch => {
    // Send POST request to backend
    axios
      .post('/auth/signup', JSON.stringify({ name, email, password }), { headers: { 'Content-Type': 'application/json' } } )
      .then(res => {
          dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data
          })
        }
      )
      .catch(err => {
        dispatch(
          returnErrors(err.response.data, err.response.status, 'REGISTER_FAIL')
        );
        dispatch({
          type: REGISTER_FAIL
        });
      });
}

// Login User
export const login = ({ email, password }) => dispatch => {
    // Send POST request to backend
    axios
      .post('/auth/login', JSON.stringify({ email, password }), { headers: { 'Content-Type': 'application/json' } } )
      .then(res => {
          console.log("hey")
          dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
          })
        }
      )
      .catch(err => {
        dispatch(
          returnErrors(err.response.data, err.response.status, 'LOGIN_FAIL')
        );
        dispatch({
          type: LOGIN_FAIL
        });
      });
}

// Logout User
export const logout = () => {
  return {
    type: LOGOUT_SUCCESS
  };
};

export const tokenConfig = getState => {
  // Get token from localstorage
  const token = getState().auth.token

  // Headers
  const config = {
    headers: {
      "Content-type": "application/json"
    }
  }

  // If token, add to headers
  if (token) {
    config.headers['x-auth-token'] = token
  }

  return config
}
