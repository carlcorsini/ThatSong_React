import {
  USER_LOGIN_PENDING,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILED,
  USER_SIGNUP_PENDING,
  USER_SIGNUP_SUCCESS,
  USER_SIGNUP_FAILED,
  USER_LOGOUT,
  GET_AUTH_SUCCESS,
  GET_AUTH_FAILED,
  ADD_FAVORITE_SUCCESS
} from '../actions/auth_actions'

let initialState = {
  isLoggedIn: false,
  isLoading: false,
  user: {},
  showLoginError: false,
  showSignupError: false,
  showSignupSuccess: false,
  open: true
}

export default (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN_PENDING:
      return { ...state, isLoading: true }
    case USER_LOGIN_SUCCESS:
      console.log(action.payload)
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        isLoggedIn: true,
        isLoading: false
      }
    case USER_LOGIN_FAILED:
      return { ...state, isLoading: false, showLoginError: true }
    case USER_SIGNUP_PENDING:
      return { ...state, isLoading: true }
    case USER_SIGNUP_SUCCESS:
      return {
        ...state,
        open: false,
        user: action.payload.user,
        token: action.payload.token,
        isLoading: false,
        isLoggedIn: true,
        showSignupSuccess: true
      }
    case USER_SIGNUP_FAILED:
      return { ...state, isLoading: false, showSignupError: true }
    case USER_LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        isLoading: false,
        user: {},
        showLoginError: false,
        showSignupError: false
      }
    case GET_AUTH_SUCCESS:
      return { ...state, user: action.payload.user, ...action.payload }
    case GET_AUTH_FAILED:
      console.log(action, 'action in auth reducers')
      console.log(state, 'state in auth reducers')
      return { ...state }
    case ADD_FAVORITE_SUCCESS:
      return {
        ...state
      }
    default:
      return state
  }
}
