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
  UPDATE_USER_SUCCESS,
  FOLLOW_SUCCESS,
  UNFOLLOW_SUCCESS,
  FETCH_FRIEND_SUCCESS
} from '../actions/auth_actions'

let initialState = {
  isLoggedIn: false,
  isLoading: false,
  user: {},
  fetchFollowers: [],
  fetchFollowing: [],
  showLoginError: false,
  showSignupError: false,
  showSignupSuccess: false,
  open: true,
  fetchFriend: ''
}

export default (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN_PENDING:
      return { ...state, isLoading: true }
    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload.user,
        followers: action.payload.user.followers,
        following: action.payload.user.following,
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
        followers: action.payload.user.followers,
        following: action.payload.user.following,
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
      return {
        ...state,
        isLoggedIn: true,
        user: action.payload.user,
        followers: action.payload.user.followers,
        following: action.payload.user.following
      }
    case GET_AUTH_FAILED:
      return { ...state }
    case UPDATE_USER_SUCCESS:
      return { ...state, isLoggedIn: true, user: action.payload }
    case FOLLOW_SUCCESS:
      return { ...state, fetchFollowers: action.payload }
    case UNFOLLOW_SUCCESS:
      return { ...state, fetchFollowers: action.payload }
    case FETCH_FRIEND_SUCCESS:
      return {
        ...state,
        fetchFriend: action.payload,
        fetchFollowers: action.payload.followers,
        fetchFollowing: action.payload.following
      }
    default:
      return state
  }
}
