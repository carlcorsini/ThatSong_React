import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { userSignup } from '../../redux/actions/auth_actions'

import {
  Button,
  Header,
  Modal,
  Form,
  Input,
  Message,
  Menu
} from 'semantic-ui-react'

class SignupModal extends Component {
  state = {
    isValid: true,
    isPasswordStrong: true,
    first_name: '',
    last_name: '',
    email: '',
    username: '',
    password: '',
    verify_password: ''
  }
  userSignup = e => {
    e.preventDefault()

    let {
      first_name,
      last_name,
      username,
      email,
      password,
      verify_password
    } = this.state

    if (!password || password !== verify_password || !verify_password) {
      this.setState({
        isValid: false
      })
    } else {
      let newUser = {
        first_name,
        last_name,
        email,
        username,
        password
      }
      console.log(this.props, 'props in signup modal!!!!!!')
      this.props.userSignup(newUser, this.props.history)
    }
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
          Sign Up
        </Menu.Item>

        <Modal
          basic
          centered={true}
          dimmer={dimmer}
          open={open}
          onClose={this.close}>
          <Header>Sign Up</Header>
          <Modal.Content style={{ paddingTop: '1px' }} image>
            <Form
              style={{ width: '45%' }}
              success
              warning
              onSubmit={this.userSignup}>
              <Form.Group widths="equal">
                <Form.Input
                  control={Input}
                  required
                  type="text"
                  name="first_name"
                  placeholder="First Name"
                  onChange={e => this.setState({ first_name: e.target.value })}
                />
              </Form.Group>
              <Form.Group widths="equal">
                <br />
                <Form.Input
                  control={Input}
                  required
                  type="last_name"
                  name="last_name"
                  placeholder="Last Name"
                  onChange={e => this.setState({ last_name: e.target.value })}
                />
              </Form.Group>
              <Form.Group widths="equal">
                <br />
                <Form.Input
                  control={Input}
                  type="email"
                  name="email"
                  placeholder="Email"
                  onChange={e => this.setState({ email: e.target.value })}
                />
              </Form.Group>
              <Form.Group widths="equal">
                <br />
                <Form.Input
                  control={Input}
                  required
                  type="text"
                  name="username"
                  placeholder="Username"
                  onChange={e => this.setState({ username: e.target.value })}
                />
              </Form.Group>
              <div className="ui pointing below basic label">
                Password must contain at least one number and one uppercase and
                lowercase letter, and at least 8 or more characters.
              </div>
              <Form.Group widths="equal">
                <Form.Input
                  control={Input}
                  required
                  pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                  onInvalid={e => this.setState({ isPasswordStrong: false })}
                  type="password"
                  name="password"
                  placeholder="Password"
                  onChange={e => this.setState({ password: e.target.value })}
                />
              </Form.Group>
              <Form.Group widths="equal">
                <Form.Input
                  control={Input}
                  required
                  type="password"
                  name="password"
                  placeholder="Verify Password"
                  onChange={e =>
                    this.setState({ verify_password: e.target.value })
                  }
                />
              </Form.Group>
              <Button content="Sign Up" inverted color="green" type="submit" />
              <Button
                inverted
                color="red"
                content="Close"
                onClick={this.close}
              />
              {!this.state.isPasswordStrong ? (
                <Message
                  color="red"
                  inverted
                  warning
                  header="Password must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters."
                />
              ) : null}
              {!this.state.isValid ? (
                <Message
                  color="red"
                  inverted
                  warning
                  header="passwords do not match"
                />
              ) : null}
              {this.props.showSignupSuccess ? (
                <Message color="green" success header="signup successful!" />
              ) : null}
            </Form>
          </Modal.Content>
        </Modal>
      </div>
    )
  }
}

function mapStateToProps(state) {
  console.log(state)
  return {
    showSignupSuccess: state.auth.showSignupSuccess,
    open: state.auth.open
  }
}

function mapDispatchToProps(dispatch) {
  return {
    userSignup: bindActionCreators(userSignup, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignupModal)
