import env from '../../env'
import deleteSong from '../../api/deleteSong'

export const FETCH_SONGS_SUCCESS = 'FETCH_SONGS_SUCCESS'
export const FETCH_SONGS_FAILED = 'FETCH_SONGS_FAILED'
export const FILTER_SONG = 'FILTER_SONG'
export const DELETE_SONG_SUCCESS = 'DELETE_SONG_SUCCESS'

export const fetchSongs = () => {
  return async dispatch => {
    try {
      let response = await fetch(`${env.default}/songs`)
<<<<<<< HEAD
      let songs = await response.json()
      dispatch({
        type: FETCH_SONGS_SUCCESS,
        payload: songs
=======
      let posts = await response.json()
      dispatch({
        type: FETCH_SONGS_SUCCESS,
        payload: posts
>>>>>>> 4e0584d7937486c0144b63dc2f469acbea05af62
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

export const destroySong = id => {
  return async dispatch => {
    try {
      const songs = await deleteSong(id)

      dispatch({ type: DELETE_SONG_SUCCESS, payload: songs })
    } catch (error) {}
  }
}
