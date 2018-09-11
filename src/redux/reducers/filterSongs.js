import { FILTER_SONG } from '../actions/songs'

const initialState = { filterSongs: '' }

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FILTER_SONG:
      return { ...state, ...payload }
    default:
      return state
  }
}
