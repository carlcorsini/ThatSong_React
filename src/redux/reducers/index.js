import { combineReducers } from 'redux'
import songs from '../reducers/songs'
import auth from '../reducers/auth_reducers'
import filterSongs from '../reducers/filterSongs'

export default combineReducers({ auth, songs, filterSongs })
