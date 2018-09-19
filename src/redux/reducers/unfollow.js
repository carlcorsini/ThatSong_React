import { UNFOLLOW_SUCCESS } from '../actions/unfollow'

const initialState = {}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case UNFOLLOW_SUCCESS:
      return { ...state, payload }
    default:
      return state
  }
}
