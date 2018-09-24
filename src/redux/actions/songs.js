import deleteSong from '../../api/deleteSong'

export const FETCH_SONGS_SUCCESS = 'FETCH_SONGS_SUCCESS'
export const FETCH_SONGS_FAILED = 'FETCH_SONGS_FAILED'
export const FILTER_SONG = 'FILTER_SONG'
export const DELETE_SONG_SUCCESS = 'DELETE_SONG_SUCCESS'

const BASE_URL = 'http://that-song-back-end.herokuapp.com'

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

export const destroySong = id => {
  return async dispatch => {
    try {
      const songs = await deleteSong(id)
      console.log(songs)
      dispatch({ type: DELETE_SONG_SUCCESS, payload: songs })
    } catch (error) {}
  }
}
