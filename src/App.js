import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import Main from './components/Main/Main'
import Navbar from './components/Navbar/Navbar'
import ProfilePage from './components/ProfilePage/ProfilePage'
import AdminPage from './components/AdminPage/AdminPage'
import Footer from './components/Footer/Footer'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Route path="/" component={Navbar} />
            <Route exact path="/" component={() => <Redirect to="/that" />} />
            <Route path="/that" component={() => <Main />} />
            <Route path="/profile" component={() => <ProfilePage />} />
            <Route path="/admin" component={() => <AdminPage />} />
            <Route path="/" component={Footer} />
          </div>
        </Router>
      </div>
    )
  }
}

export default App
