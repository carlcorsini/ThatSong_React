import { applyMiddleware, createStore, compose } from 'redux'
import combineReducers from './reducers/index'
import logger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const enhancers = composeEnhancers(applyMiddleware(thunkMiddleware, logger))

export default function setupStore(initialState) {
  return createStore(combineReducers, initialState, enhancers)
}

// import { applyMiddleware, createStore, compose } from 'redux'
// import combineReducers from './reducers/index'
// import logger from 'redux-logger'
// import thunkMiddleware from 'redux-thunk'
// import { persistStore, persistCombineReducers } from 'redux-persist'
// import storage from 'redux-persist/lib/storage'
//
// const config = {
//   key: 'root',
//   storage
// }
//
// const reducers = persistCombineReducers(config, {
//   combineReducers
// })
//
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
// const enhancers = composeEnhancers(applyMiddleware(thunkMiddleware, logger))
//
// export default function setupStore(initialState) {
//   let store = createStore(reducers, initialState, enhancers)
//   persistStore(store)
//   return store
// }
