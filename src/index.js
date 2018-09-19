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

ReactDOM.render(
  <Provider store={newStore}>
    <App />
  </Provider>,
  document.getElementById('root')
)

// if (module.hot) {
//   module.hot.accept('./App', () => {
//     const NextApp = require('./App').default
//     ReactDOM.render(<NextApp />, document.getElementById('root'))
//   })
// }
registerServiceWorker()
