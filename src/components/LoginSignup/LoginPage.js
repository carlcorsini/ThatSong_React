import React, { Component } from 'react'
import FadeIn from 'react-fade-in'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import selectAuthenticatedUser from '../../redux/selectors/selectAuthenticatedUser'
import { userLogin } from '../../redux/actions/auth_actions'
import { userLogout } from '../../redux/actions/auth_actions'

import {
  Container,
  Grid,
  Image,
  Segment,
  Button,
  Header,
  Modal,
  Form,
  Input,
  Message,
  Menu
} from 'semantic-ui-react'

class LoginPage extends Component {
  state = {
    showLoginError: false,
    username: '',
    password: ''
  }

  handleLogin = e => {
    this.setState({ showLoginError: false })
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
    return (
      <Grid
        textAlign="center"
        style={{ height: '90vh' }}
        verticalAlign="middle">
        <Grid.Column style={{ maxWidth: 450 }}>
          <Segment
            style={{
              boxShadow: '1px 1px 10px 2px rgba(30, 31, 38, 0.58)'
            }}
            inverted>
            <Header as="h2" textAlign="center">
              Log-in to your account
            </Header>
            {/* <Form size="large">
              <Segment stacked>
                <Form.Input
                  fluid
                  icon="user"
                  iconPosition="left"
                  placeholder="E-mail address"
                />
                <Form.Input
                  fluid
                  icon="lock"
                  iconPosition="left"
                  placeholder="Password"
                  type="password"
                />

                <Button primary fluid size="large">
                  Login
                </Button> */}
            <Form warning onSubmit={this.handleLogin}>
              <Form.Input
                icon="user"
                iconPosition="left"
                style={{ textAlign: 'center' }}
                type="username"
                name="username"
                placeholder="username"
                onChange={e => this.setState({ username: e.target.value })}
              />

              <Form.Input
                icon="lock"
                iconPosition="left"
                style={{ textAlign: 'center' }}
                control={Input}
                type="password"
                name="password"
                placeholder="password"
                onChange={e => this.setState({ password: e.target.value })}
              />

              <Form.Field
                fluid
                size="large"
                disabled={this.state.save_disabled}
                inverted
                primary
                control={Button}>
                Login
              </Form.Field>

              {this.props.showLoginError ? (
                <FadeIn>
                  <Message
                    floating
                    color="red"
                    warning
                    header="username or password is incorrect"
                  />
                </FadeIn>
              ) : null}
            </Form>
            <Message color="black">
              New to us? <a href="/signup"> Sign Up</a>
            </Message>
          </Segment>
        </Grid.Column>
      </Grid>
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

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)
