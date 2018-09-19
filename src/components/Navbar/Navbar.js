import React, { Component } from 'react'
import { Menu, Icon } from 'semantic-ui-react'
import { userLogout } from '../../redux/actions/auth_actions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import LoginModal from './LoginModal'
import SignupModal from './SignupModal'
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
        <Menu.Item header>ThatSong</Menu.Item>
        <Menu.Item name="home" href="/">
          <Icon name="home" />
          Home
        </Menu.Item>
        {this.props.auth.isLoggedIn ? (
          <Menu.Menu position="right">
            <Menu.Item href="/profile">
              <Icon name="user" />
              {this.props.auth.user.username}
            </Menu.Item>
            <Menu.Item
              style={{ textDecoration: 'none' }}
              onClick={this.handleLogout}>
              Logout
            </Menu.Item>
          </Menu.Menu>
        ) : (
          <Menu.Menu position="right">
            <SignupModal history={this.props.history} />
            <LoginModal history={this.props.history} />
          </Menu.Menu>
        )}
        {this.props.auth.user.is_admin ? (
          <Menu.Item
            style={{ textDecoration: 'none', color: '#ff7700' }}
            href="/admin">
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
  const { auth, history } = state
  return { auth }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavbarComponent)
