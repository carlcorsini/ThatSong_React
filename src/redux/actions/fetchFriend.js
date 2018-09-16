import getUser from '../../api/getUser'
export const FETCH_FRIEND_SUCCESS = 'FETCH_FRIEND_SUCCESS'
export const FETCH_FRIEND_FAILED = 'FETCH_FRIEND_FAILED'

export const fetchFriend = (id, history) => {
  console.log(history)
  return async dispatch => {
    try {
      let user = await getUser(id)
      console.log('user')
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
