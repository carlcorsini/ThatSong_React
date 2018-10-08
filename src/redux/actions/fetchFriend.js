import getUser from '../../api/getUser'
export const FETCH_FRIEND_SUCCESS = 'FETCH_FRIEND_SUCCESS'
export const FETCH_FRIEND_FAILED = 'FETCH_FRIEND_FAILED'

export const fetchFriend = (id, history) => {
  return async dispatch => {
    try {
      let user = await getUser(id)

      localStorage.setItem('friend', JSON.stringify(user))
      dispatch({
        type: FETCH_FRIEND_SUCCESS,
        payload: user
      })
      history.push(`/users/${id}`, user)
    } catch (err) {
      dispatch({
        type: FETCH_FRIEND_FAILED,
        payload: err
      })
    }
  }
}
