import { applyMiddleware, createStore, compose } from 'redux'
import combineReducers from './reducers/index'
import logger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const enhancers = composeEnhancers(applyMiddleware(thunkMiddleware, logger))

export default function setupStore(initialState) {
  return createStore(combineReducers, initialState, enhancers)
}
