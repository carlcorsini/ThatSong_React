import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import 'semantic-ui-css/semantic.min.css'
import registerServiceWorker from './registerServiceWorker'
import { Provider } from 'react-redux'
import store from './redux/store'
import { fetchSongs } from './redux/actions/songs'
import { getAuth } from './redux/actions/auth_actions'

const newStore = store()

newStore.dispatch(getAuth())
newStore.dispatch(fetchSongs())

// const unsubscribe = newStore.subscribe(() => {
// unsubscribe()
// })

ReactDOM.render(
  <Provider store={newStore}>
    <App />
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()
