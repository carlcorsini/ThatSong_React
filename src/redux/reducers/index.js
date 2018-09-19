import { combineReducers } from 'redux'
import songs from '../reducers/songs'
import auth from '../reducers/auth_reducers'
import filterSongs from '../reducers/filterSongs'
import fetchFriend from '../reducers/fetchFriend'
import follow from '../reducers/follow'
import unfollow from '../reducers/unfollow'

export default combineReducers({
  auth,
  songs,
  filterSongs,
  fetchFriend,
  follow,
  unfollow
})
