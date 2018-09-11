import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import selectAuthenticatedUser from '../../redux/selectors/selectAuthenticatedUser'
import { userLogin } from '../../redux/actions/auth_actions'
import { userLogout } from '../../redux/actions/auth_actions'

import {
  Button,
  Header,
  Modal,
  Form,
  Input,
  Message,
  Menu
} from 'semantic-ui-react'

class LoginModal extends Component {
  state = {
    showLoginError: false,
    username: '',
    password: ''
  }

  handleLogin = e => {
    e.preventDefault()
    this.props.userLogin(
      {
        username: this.state.username,
        password: this.state.password
      },
      this.props.history
    )
  }
  show = dimmer => () => this.setState({ dimmer, open: true })
  close = () => this.setState({ open: false })

  render() {
    const { open, dimmer } = this.state
    return (
      <div>
        <Menu.Item
          style={{ textDecoration: 'none' }}
          onClick={this.show('blurring')}>
          Login
        </Menu.Item>

        <Modal
          centered={true}
          basic
          dimmer={dimmer}
          open={open}
          onClose={this.close}>
          <Header>Login</Header>
          <Modal.Content image>
            <Form style={{ width: '50%' }} warning onSubmit={this.handleLogin}>
              <Form.Group widths="equal">
                <Form.Field
                  style={{ textAlign: 'center' }}
                  control={Input}
                  type="username"
                  name="username"
                  placeholder="username"
                  onChange={e => this.setState({ username: e.target.value })}
                />
              </Form.Group>
              <Form.Group widths="equal">
                <Form.Field
                  style={{ textAlign: 'center' }}
                  control={Input}
                  type="password"
                  name="password"
                  placeholder="password"
                  onChange={e => this.setState({ password: e.target.value })}
                />
              </Form.Group>
              <Button
                inverted
                color="red"
                content="Close"
                onClick={this.close}
              />
              <Button inverted color="green" className="mr-3" type="submit">
                Login
              </Button>
              {this.props.showLoginError ? (
                <Message
                  color="red"
                  warning
                  header="username or password is incorrect"
                />
              ) : null}
            </Form>
          </Modal.Content>
        </Modal>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    showLoginError: state.auth.showLoginError,
    authenticatedUser: selectAuthenticatedUser(state)
  }
}

function mapDispatchToProps(dispatch) {
  return {
    userLogin: bindActionCreators(userLogin, dispatch),
    userLogout: bindActionCreators(userLogout, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginModal)
