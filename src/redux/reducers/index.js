import { combineReducers } from 'redux'
import songs from '../reducers/songs'
import auth from '../reducers/auth.reducers'

export default combineReducers({ songs, auth })
