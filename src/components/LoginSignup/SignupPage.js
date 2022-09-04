import React, { Component } from 'react'
import FadeIn from 'react-fade-in'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { userSignup } from '../../redux/actions/auth_actions'

import { Grid, Segment, Button, Header, Form, Message } from 'semantic-ui-react'

// the signup page uses redux to send a log in request to the that-song-back-end and updates the authentication state of the app depending on success/failure
class SignupPage extends Component {
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
      this.props.userSignup(newUser, this.props.history)
    }
  }

  render() {
    return (
      <Grid
        textAlign="center"
        style={{ height: '94.5vh', margin: 0 }}
        verticalAlign="middle">
        <Grid.Column style={{ maxWidth: 450 }}>
          <Segment
            style={{
              boxShadow: '1px 1px 10px 2px rgba(30, 31, 38, 0.58)'
            }}
            inverted>
            <Header as="h2" textAlign="center">
              Sign-up For ThatSong
            </Header>
            <Form success warning onSubmit={this.userSignup}>
              <Form.Input
                required
                type="text"
                name="first_name"
                placeholder="First Name"
                onChange={e => this.setState({ first_name: e.target.value })}
              />

              <Form.Input
                required
                type="last_name"
                name="last_name"
                placeholder="Last Name"
                onChange={e => this.setState({ last_name: e.target.value })}
              />

              <Form.Input
                type="email"
                name="email"
                placeholder="Email"
                onChange={e => this.setState({ email: e.target.value })}
              />

              <Form.Input
                required
                type="text"
                name="username"
                placeholder="Username"
                onChange={e => this.setState({ username: e.target.value })}
              />

              <div
                style={{ borderColor: 'red', color: 'red' }}
                className="ui pointing below basic label">
                Password must contain at least one number, one uppercase letter,
                one lowercase letter, and at least 8 or more characters.
              </div>

              <Form.Input
                required
                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                onInvalid={e => this.setState({ isPasswordStrong: false })}
                type="password"
                name="password"
                placeholder="Password"
                onChange={e => this.setState({ password: e.target.value })}
              />

              <Form.Input
                required
                type="password"
                name="password"
                placeholder="Verify Password"
                onChange={e =>
                  this.setState({ verify_password: e.target.value })
                }
              />

              <Form.Field
                fluid
                disabled={this.state.save_disabled}
                inverted
                primary
                type="submit"
                control={Button}>
                Sign Up
              </Form.Field>

              {!this.state.isPasswordStrong ? (
                <FadeIn>
                  <Message
                    color="red"
                    inverted
                    warning
                    header="Password must contain at least one number, one uppercase letter, one lowercase letter, and at least 8 or more characters."
                  />
                </FadeIn>
              ) : null}
              {!this.state.isValid ? (
                <FadeIn>
                  <Message
                    color="red"
                    inverted
                    warning
                    header="passwords do not match"
                  />
                </FadeIn>
              ) : null}
              {this.props.showSignupSuccess ? (
                <Message color="green" success header="signup successful!" />
              ) : null}
            </Form>
            <Message color="black">
              Already have an account? <a href="/login">Log In</a>
            </Message>
          </Segment>
        </Grid.Column>
      </Grid>
    )
  }
}

function mapStateToProps(state) {
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

export default connect(mapStateToProps, mapDispatchToProps)(SignupPage)
