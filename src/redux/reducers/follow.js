import { FOLLOW_SUCCESS } from '../actions/follow'

const initialState = {}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FOLLOW_SUCCESS:
      return { ...state, payload }
    default:
      return state
  }
}
