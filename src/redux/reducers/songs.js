import {
  FETCH_SONGS_FAILED,
  FETCH_SONGS_SUCCESS,
  DELETE_SONG_SUCCESS
} from '../actions/songs'

const initialState = {
  column: null,
  data: [],
  direction: null
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_SONGS_SUCCESS:
      return { ...state, data: payload }
    case FETCH_SONGS_FAILED:
      return payload
    case DELETE_SONG_SUCCESS:
      return { ...state, data: payload }
    default:
      return state
  }
}
