import follow from '../../api/follow'
export const FOLLOW_SUCCESS = 'FOLLOW_SUCCESS'
export const FOLLOW_FAILED = 'FOLLOW_FAILED'

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
