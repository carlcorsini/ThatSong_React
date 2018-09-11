export const FETCH_SONGS_SUCCESS = 'FETCH_SONGS_SUCCESS'
export const FETCH_SONGS_FAILED = 'FETCH_SONGS_FAILED'
export const FILTER_SONG = 'FILTER_SONG'
const BASE_URL = 'http://localhost:3000'
export const fetchSongs = () => {
  return async dispatch => {
    try {
      let response = await fetch(`${BASE_URL}/songs`)
      let posts = await response.json()
      dispatch({
        type: FETCH_SONGS_SUCCESS,
        payload: posts
      })
    } catch (err) {
      dispatch({
        type: FETCH_SONGS_FAILED,
        payload: err
      })
    }
  }
}

export const filterSongs = (str, type) => {
  return dispatch => {
    dispatch({
      type: FILTER_SONG,
      payload: { filterSongs: str, type }
    })
  }
}
