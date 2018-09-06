import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { updateProfile } from '../../redux/actions/updateUser'
import { destroyUser } from '../../redux/actions/deleteUser'
import {
  Button,
  Header,
  Image,
  Modal,
  Form,
  Input,
  TextArea
} from 'semantic-ui-react'

class ProfileModal extends Component {
  state = {
    open: false,
    first_name: '',
    last_name: '',
    username: '',
    location: '',
    bio: ''
  }
  show = dimmer => () => this.setState({ dimmer, open: true })
  close = () => this.setState({ open: false })

  handleSubmit = e => {
    let { first_name, last_name, username, location, bio } = this.state
    let attributes = { first_name, last_name, username, location, bio }
    e.preventDefault()
    this.props.updateProfile(1, attributes)
  }

  handleDelete = e => {
    e.preventDefault()
    this.props.destroyUser(1)
  }

  render() {
    let {
      first_name,
      last_name,
      location,
      profile_pic,
      username,
      bio
    } = this.props.user

    const { open, dimmer } = this.state
    return (
      <div style={{ marginRight: '10em' }}>
        <Button secondary onClick={this.show('blurring')}>
          Edit
        </Button>

        <Modal
          style={{ width: '45%' }}
          dimmer={dimmer}
          open={open}
          onClose={this.close}>
          <Modal.Header>Edit Profile</Modal.Header>
          <Modal.Content image>
            <Image wrapped size="medium" src={profile_pic} />
            <Modal.Description>
              <Header>{'   '}</Header>
            </Modal.Description>
            <Form onSubmit={this.handleSubmit}>
              <Form.Group>
                <Form.Field
                  onChange={e => {
                    this.setState({ first_name: e.target.value })
                  }}
                  defaultValue={first_name}
                  control={Input}
                  label="First name"
                  placeholder="First name"
                />
              </Form.Group>
              <Form.Group>
                <Form.Field
                  onChange={e => {
                    this.setState({ last_name: e.target.value })
                  }}
                  control={Input}
                  defaultValue={last_name}
                  label="Last name"
                  placeholder="Last name"
                />
              </Form.Group>
              <Form.Group>
                <Form.Field
                  onChange={e => {
                    this.setState({ username: e.target.value })
                  }}
                  control={Input}
                  defaultValue={username}
                  label="Username"
                  placeholder="Username"
                />
              </Form.Group>
              <Form.Group>
                <Form.Field
                  onChange={e => {
                    this.setState({ location: e.target.value })
                  }}
                  defaultValue={location}
                  control={Input}
                  label="Location"
                  placeholder="Location"
                />
              </Form.Group>
              <Form.Group>
                <Form.Field
                  onChange={e => {
                    this.setState({ bio: e.target.value })
                  }}
                  defaultValue={bio}
                  control={TextArea}
                  label="Bio"
                  placeholder="Bio"
                />
              </Form.Group>
              <Form.Field type="submit" control={Button}>
                Submit
              </Form.Field>
            </Form>
          </Modal.Content>
          <Modal.Actions>
            <Button onClick={this.handleDelete} color="black">
              Delete Profile
            </Button>
            <Button
              positive
              icon="checkmark"
              labelPosition="right"
              content="Confirm Changes"
              onClick={this.close}
            />
          </Modal.Actions>
        </Modal>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    updateProfile: bindActionCreators(updateProfile, dispatch),
    destroyUser: bindActionCreators(destroyUser, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(ProfileModal)
