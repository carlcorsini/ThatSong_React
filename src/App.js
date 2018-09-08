import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import { withRouter } from 'react-router'
import './App.css'
import Main from './components/Main/Main'
import Navbar from './components/Navbar/Navbar'
import ProfilePage from './components/ProfilePage/ProfilePage'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Route path="/" component={Navbar} />
            <Route exact path="/" component={() => <Redirect to="/that" />} />
            <Route path="/that" component={Main} />
            <Route path="/profile" component={ProfilePage} />
          </div>
        </Router>
      </div>
    )
  }
}

export default App
