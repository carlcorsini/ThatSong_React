import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import Main from './components/Main/Main'
import Navbar from './components/Navbar/Navbar'
import ProfilePage from './components/ProfilePage/ProfilePage'
import AdminPage from './components/AdminPage/AdminPage'
import FriendPage from './components/FriendPage/FriendPage'
import Footer from './components/Footer/Footer'
import LoginPage from './components/LoginSignup/LoginPage'
import SignupPage from './components/LoginSignup/SignupPage'
import AboutPage from './components/AboutPage/AboutPage'
import './App.css'

// this app uses

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Route path="/" component={Navbar} />
            <Route exact path="/" component={() => <Redirect to="/that" />} />
            <Route exact path="/that" component={Main} />
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/signup" component={SignupPage} />
            <Route exact path="/profile" component={ProfilePage} />
            <Route exact path="/about" component={AboutPage} />
            <Route exact path="/admin" component={AdminPage} />
            <Route exact path="/users/:id" component={FriendPage} />
            <Route path="/" component={Footer} />
          </div>
        </Router>
      </div>
    )
  }
}

export default App
