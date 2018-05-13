/*
 * The reducer takes care of state changes in our app through actions
 */

import {
  CHANGE_FORM,
  SET_AUTH,
  SENDING_REQUEST,
  REQUEST_ERROR,
  CLEAR_ERROR
} from '../actions/constants'
import auth from '../auth'

const FAKE_LOGOUT = 'FAKE_LOGOUT';
const FAKE_LOGIN = 'FAKE_LOGIN';
// The initial application state
let initialState = {
  formState: {
    username: '',
    password: ''
  },
  error: '',
  currentlySending: false,
  loggedIn: auth.loggedIn(),
  loggedFlag: false,
}

// Takes care of changing the application state
function authReducer (state = initialState, action) {
  switch (action.type) {
    case CHANGE_FORM:
      return {...state, formState: action.newFormState}
    case SET_AUTH:
      return {...state, loggedIn: action.newAuthState}
    case SENDING_REQUEST:
      return {...state, currentlySending: action.sending}
    case REQUEST_ERROR:
      return {...state, error: action.error}
    case CLEAR_ERROR:
      return {...state, error: ''}
    case FAKE_LOGOUT:
      return {...state, loggedFlag: false}
    case FAKE_LOGIN:
      return {...state, loggedFlag: true}
    default:
      return state
  }
}

export default authReducer