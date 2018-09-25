import authenticate from '../../api/token'
import createUser from '../../api/createUser'
import checkAuthentication from '../../utils/checkAuthentication'
import updateUser from '../../api/updateUser'
import follow from '../../api/follow'
import unfollow from '../../api/unfollow'

export const FOLLOW_SUCCESS = 'FOLLOW_SUCCESS'
export const FOLLOW_FAILED = 'FOLLOW_FAILED'

export const UNFOLLOW_SUCCESS = 'UNFOLLOW_SUCCESS'
export const UNFOLLOW_FAILED = 'UNFOLLOW_FAILED'

export const USER_LOGIN_PENDING = 'USER_LOGIN_PENDING'
export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS'
export const USER_LOGIN_FAILED = 'USER_LOGIN_FAILED'

export const USER_SIGNUP_PENDING = 'USER_SIGNUP_PENDING'
export const USER_SIGNUP_SUCCESS = 'USER_SIGNUP_SUCCESS'
export const USER_SIGNUP_FAILED = 'USER_SIGNUP_FAILED'

export const UPDATE_USER_SUCCESS = 'UPDATE_USER_SUCCESS'

export const USER_LOGOUT = 'USER_LOGOUT'

export const GET_AUTH_SUCCESS = 'GET_AUTH_SUCCESS'
export const GET_AUTH_FAILED = 'GET_AUTH_FAILED'

export const userLogin = (credentials, history) => {
  return async dispatch => {
    try {
      const user = await authenticate(credentials)

      const { token, friends } = await user
      localStorage.setItem('token', token)
      localStorage.setItem('isLoggedIn', true)
      localStorage.setItem('friends', JSON.stringify(friends))

      dispatch({ type: USER_LOGIN_PENDING })
      dispatch({
        type: USER_LOGIN_SUCCESS,
        payload: { user, token }
      })
      history.push(`/profile`, user)
      return { token, user }
    } catch (err) {
      dispatch({
        type: USER_LOGIN_FAILED,
        payload: err
      })
    }
  }
}

export const userLogout = history => {
  return async dispatch => {
    try {
      localStorage.removeItem('token')
      localStorage.removeItem('isLoggedIn')
      localStorage.removeItem('friends')
      dispatch({ type: 'USER_LOGOUT' })
      history.push(`/that`)
    } catch (error) {}
  }
}

export const userSignup = (attributes, history) => {
  return async (dispatch, getState) => {
    try {
      let [user] = await createUser(attributes)

      let { username } = await user
      let { password } = attributes
      const userWithToken = await authenticate({
        username,
        password
      })

      const { token, friends } = await userWithToken
      localStorage.setItem('token', token)
      localStorage.setItem('isLoggedIn', true)

      localStorage.setItem('friends', JSON.stringify(friends))
      dispatch({
        type: USER_SIGNUP_SUCCESS,
        payload: {
          token,
          user
        }
      })
      history.push(`/profile`, user)
      return user
    } catch (err) {
      dispatch({
        type: USER_SIGNUP_FAILED,
        payload: {}
      })
    }
  }
}

export const getAuth = () => {
  return async dispatch => {
    try {
      const authentication = async () => {
        return await checkAuthentication()
      }
      const auth = await authentication()

      let { user } = await auth

      dispatch({
        type: GET_AUTH_SUCCESS,
        payload: {
          user: user,
          authenticatedUserId: user.id
        }
      })
    } catch (error) {
      dispatch({
        type: GET_AUTH_FAILED,
        payload: { error, isLoggedIn: false, user: {} }
      })
    }
  }
}

export const updateProfile = (id, attributes) => {
  return async (dispatch, getState) => {
    try {
      const user = await updateUser(id, attributes)

      dispatch({ type: UPDATE_USER_SUCCESS, payload: user[0] })
    } catch (error) {}
  }
}

export const followUser = (user_id, friend_id) => {
  return async dispatch => {
    try {
      let user = await follow(user_id, friend_id)
      console.log(user)
      dispatch({
        type: FOLLOW_SUCCESS,
        payload: user
      })
    } catch (err) {
      dispatch({
        type: FOLLOW_FAILED,
        payload: err
      })
    }
  }
}

export const unfollowUser = (user_id, friend_id) => {
  return async dispatch => {
    try {
      let user = await unfollow(user_id, friend_id)
      console.log('user')
      dispatch({
        type: UNFOLLOW_SUCCESS,
        payload: user
      })
    } catch (err) {
      dispatch({
        type: UNFOLLOW_FAILED,
        payload: err
      })
    }
  }
}

export default userLogin
