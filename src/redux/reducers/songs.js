import { FETCH_SONGS_FAILED, FETCH_SONGS_SUCCESS } from '../actions/songs'

const initialState = {
  column: null,
  data: [],
  direction: null
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_SONGS_SUCCESS:
      console.log(payload)
      return { ...state, data: payload }
    case FETCH_SONGS_FAILED:
      return payload
    default:
      return state
  }
}
