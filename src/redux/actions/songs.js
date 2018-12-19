import API_BASE_URL from '../../env'
import deleteSong from '../../api/deleteSong'

export const FETCH_SONGS_SUCCESS = 'FETCH_SONGS_SUCCESS'
export const FETCH_SONGS_FAILED = 'FETCH_SONGS_FAILED'
export const FILTER_SONG = 'FILTER_SONG'
export const DELETE_SONG_SUCCESS = 'DELETE_SONG_SUCCESS'

export const fetchSongs = () => {
  return async dispatch => {
    try {
      console.log(API_BASE_URL)
      let response = await fetch(`${API_BASE_URL}/songs`)

      let songs = await response.json()
      dispatch({
        type: FETCH_SONGS_SUCCESS,
        payload: songs,
      })
    } catch (err) {
      dispatch({
        type: FETCH_SONGS_FAILED,
        payload: err,
      })
    }
  }
}

export const filterSongs = (str, type) => {
  return dispatch => {
    dispatch({
      type: FILTER_SONG,
      payload: { filterSongs: str, type },
    })
  }
}

export const destroySong = id => {
  return async dispatch => {
    try {
      const songs = await deleteSong(id)

      dispatch({ type: DELETE_SONG_SUCCESS, payload: songs })
    } catch (error) {}
  }
}
