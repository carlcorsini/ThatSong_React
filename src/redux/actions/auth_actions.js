import decode from 'jwt-decode'
import authenticate from '../../api/token'
import getUser from '../../api/getUser'
import createUser from '../../api/createUser'
import checkAuthentication from '../../utils/checkAuthentication'
import env from '../../env'
import addFavoriteBeer from '../../api/addFavoriteBeer'

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
      const { token } = await authenticate(credentials)

      localStorage.setItem('token', token)
      const { identity: user_id } = decode(token)
      const user = await getUser(user_id, { token })
      dispatch({ type: USER_LOGIN_PENDING })
      dispatch({
        type: USER_LOGIN_SUCCESS,
        payload: { user, token }
      })
      return { token, user }
    } catch (err) {
      dispatch({
        type: USER_LOGIN_FAILED,
        payload: err
      })
    }
  }
}

export const userLogout = () => {
  return async dispatch => {
    try {
      localStorage.removeItem('token')
      dispatch({ type: 'USER_LOGOUT' })
    } catch (error) {}
  }
}

export const userSignup = (attributes, history) => {
  return async (dispatch, getState) => {
    try {
      const user = await createUser(attributes)
      dispatch({ type: 'USER_SIGNUP_SUCCESS', user })
      return user
    } catch (error) {}
  }
}

export const getAuth = () => {
  return async dispatch => {
    try {
      const authentication = async () => {
        return await checkAuthentication({
          baseUrl: env.default
        })
      }
      const auth = authentication()
      let { token, user } = await auth

      let friendsArray = user.friends

      user.friends = []
      friendsArray.forEach(async friend => {
        let userResponse = await getUser(friend)

        user.friends.push(userResponse)
        friendsArray.push(userResponse)
      })

      const userBeers = user.beers
      dispatch({
        type: 'GET_AUTH_SUCCESS',
        payload: {
          user,
          userBeers,
          isLoggedIn: true,
          token: token,
          authenticatedUserId: user.id
        }
      })
    } catch (error) {
      dispatch({ type: GET_AUTH_FAILED, payload: error })
    }
  }
}

export const addFavorite = (user_id, beer_id, history) => {
  return async dispatch => {
    try {
      let response = await addFavoriteBeer(user_id, beer_id)
      let addBeer = await response.json()
      dispatch({
        type: ADD_FAVORITE_SUCCESS,
        payload: addBeer
      })
      history.push(`/beers`, addBeer)
    } catch (err) {
      dispatch({
        type: ADD_FAVORITE_FAILED,
        payload: err
      })
    }
  }
}

export default userLogin
