import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import { withRouter } from 'react-router'
import logo from './logo.svg'
import './App.css'
import Main from './components/Main/Main'
import Navbar from './components/Navbar/Navbar'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Route path="/" component={Navbar} />
            <Route exact path="/" component={() => <Redirect to="/that" />} />
            <Route path="/that" component={Main} />
          </div>
        </Router>
      </div>
    )
  }
}

export default App
