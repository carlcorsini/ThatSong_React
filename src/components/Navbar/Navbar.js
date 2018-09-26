import React, { Component } from 'react'
import { Menu, Icon } from 'semantic-ui-react'
import { userLogout } from '../../redux/actions/auth_actions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import './Navbar.css'
class NavbarComponent extends Component {
  handleLogout = e => {
    e.preventDefault()
    this.props.userLogout(this.props.history)
  }
  render() {
    return (
      <Menu
        size="large"
        id="tippy-top"
        style={{
          boxShadow: '1px 1px 10px 0.5px rgba(30, 31, 38, 0.58)'
        }}
        className="nav-bar"
        stackable
        inverted>
        <Menu.Menu position="left">
          <Menu.Item header>
            <Icon name="music" />
            ThatSong
          </Menu.Item>
          <Menu.Item link name="home" href="/">
            <Icon name="home" />
            Home
          </Menu.Item>
          <Menu.Item href="/about">
            <Icon name="question" />
            About
          </Menu.Item>
        </Menu.Menu>
        {this.props.auth.isLoggedIn ? (
          <Menu.Menu position="right">
            <Menu.Item as="a" href="/profile">
              <Icon name="user" />
              {this.props.auth.user.username}
            </Menu.Item>
            <Menu.Item
              style={{ textDecoration: 'none' }}
              onClick={this.handleLogout}>
              <Icon name="log out" />
              Logout
            </Menu.Item>
          </Menu.Menu>
        ) : (
          <Menu.Menu position="right">
            <Menu.Item href="/signup">
              <Icon name="signup" />Sign Up
            </Menu.Item>
            <Menu.Item href="/login">
              <Icon name="sign in" />Login
            </Menu.Item>
          </Menu.Menu>
        )}
        {this.props.auth.user.is_admin ? (
          <Menu.Item
            style={{ textDecoration: 'none', color: '#ff7700' }}
            href="/admin">
            <Icon name="user secret" />
            Admin
          </Menu.Item>
        ) : (
          <div />
        )}
      </Menu>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    userLogout: bindActionCreators(userLogout, dispatch)
  }
}

function mapStateToProps(state, props) {
  const { auth } = state
  return { auth }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavbarComponent)
