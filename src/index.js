import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import 'semantic-ui-css/semantic.min.css'
import registerServiceWorker from './registerServiceWorker'
import { Provider } from 'react-redux'
import store from './redux/store'
import { fetchSongs } from './redux/actions/songs'

const newStore = store()

newStore.dispatch(fetchSongs())

ReactDOM.render(
  <Provider store={newStore}>
    <App />
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()
