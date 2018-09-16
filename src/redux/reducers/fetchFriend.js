import { FETCH_FRIEND_SUCCESS } from '../actions/fetchFriend'

const initialState = { friend: '' }

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_FRIEND_SUCCESS:
      return { ...state, friend: payload }
    default:
      return state
  }
}
