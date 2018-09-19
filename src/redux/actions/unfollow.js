import unfollow from '../../api/unfollow'
export const UNFOLLOW_SUCCESS = 'UNFOLLOW_SUCCESS'
export const UNFOLLOW_FAILED = 'UNFOLLOW_FAILED'

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
