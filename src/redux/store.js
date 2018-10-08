import { applyMiddleware, createStore, compose } from 'redux'
import combineReducers from './reducers/index'
import logger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const enhancers =
  process.env.NODE_ENV !== 'production'
    ? composeEnhancers(applyMiddleware(thunkMiddleware, logger))
    : composeEnhancers(applyMiddleware(thunkMiddleware))

export default function setupStore(initialState) {
  return createStore(combineReducers, initialState, enhancers)
}
