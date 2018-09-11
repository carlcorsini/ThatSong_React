import { combineReducers } from 'redux'
import songs from '../reducers/songs'
import auth from '../reducers/auth.reducers'
import filterSongs from '../reducers/filterSongs'

export default combineReducers({ songs, auth, filterSongs })
