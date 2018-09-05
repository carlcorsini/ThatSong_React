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
  userBeers: [],
  showLoginError: false,
  showSignupError: false,
  showSignupSuccess: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN_PENDING:
      return { ...state, isLoading: true }
    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        userBeers: action.payload.userBeers,
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
        isLoading: false,
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
      return { ...state }
    case ADD_FAVORITE_SUCCESS:
      return {
        ...state,
        user: {
          ...state.user,
          beers: [...state.user.beers, { ...action.payload }]
        }
      }
    default:
      return state
  }
}
