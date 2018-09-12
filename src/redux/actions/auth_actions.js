import authenticate from '../../api/token'
import createUser from '../../api/createUser'
import checkAuthentication from '../../utils/checkAuthentication'

export const ADD_FAVORITE_SUCCESS = 'ADD_FAVORITE_SUCCESS'
export const ADD_FAVORITE_FAILED = 'ADD_FAVORITE_FAILED'

export const USER_LOGIN_PENDING = 'USER_LOGIN_PENDING'
export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS'
export const USER_LOGIN_FAILED = 'USER_LOGIN_FAILED'

export const USER_SIGNUP_PENDING = 'USER_SIGNUP_PENDING'
export const USER_SIGNUP_SUCCESS = 'USER_SIGNUP_SUCCESS'
export const USER_SIGNUP_FAILED = 'USER_SIGNUP_FAILED'

export const USER_LOGOUT = 'USER_LOGOUT'

export const GET_AUTH_SUCCESS = 'GET_AUTH_SUCCESS'
export const GET_AUTH_FAILED = 'GET_AUTH_FAILED'

export const userLogin = (credentials, history) => {
  return async dispatch => {
    try {
      const user = await authenticate(credentials)

      const { token } = await user
      localStorage.setItem('token', token)
      // const { identity: user_id } = decode(token)

      dispatch({ type: USER_LOGIN_PENDING })
      dispatch({
        type: USER_LOGIN_SUCCESS,
        payload: { user, token }
      })
      // history.push(`/profile`, user)
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
      dispatch({ type: 'USER_LOGOUT' })
      history.push(`/that`)
    } catch (error) {}
  }
}

export const userSignup = (attributes, history) => {
  console.log(history)
  return async (dispatch, getState) => {
    try {
      let [user] = await createUser(attributes)

      let { username } = await user
      let { password } = attributes
      const userWithToken = await authenticate({
        username,
        password
      })

      const { token } = await userWithToken
      localStorage.setItem('token', token)

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
      console.log(user)
      dispatch({
        type: 'GET_AUTH_SUCCESS',
        payload: {
          user: user,
          isLoggedIn: true,
          authenticatedUserId: user.id
        }
      })
    } catch (error) {
      dispatch({ type: GET_AUTH_FAILED, payload: { error, isLoggedIn: false } })
    }
  }
}

export default userLogin
