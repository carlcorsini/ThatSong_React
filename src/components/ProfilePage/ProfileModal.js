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
  TextArea,
  Confirm
} from 'semantic-ui-react'

class ProfileModal extends Component {
  state = {
    confirm_open: false,
    open: false,
    first_name: '',
    last_name: '',
    username: '',
    location: '',
    bio: ''
  }

  handleConfirm = () =>
    this.setState({ result: 'confirmed', confirm_open: false })
  handleCancel = () =>
    this.setState({ result: 'cancelled', confirm_open: false })
  showConfirm = () => this.setState({ cofirm_open: true })

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

    const { confirm_open, open, dimmer } = this.state
    return (
      <div>
        <Button size="mini" basic secondary onClick={this.show('blurring')}>
          Edit Profile
        </Button>

        <Modal
          basic
          centered={true}
          dimmer={dimmer}
          open={open}
          onClose={this.close}>
          <Modal.Content image>
            <Form style={{ width: '45%' }} basic onSubmit={this.handleSubmit}>
              <Image centered rounded wrapped size="small" src={profile_pic} />
              <br />
              <br />
              <Form.Group>
                <Form.Field
                  onChange={e => {
                    this.setState({ first_name: e.target.value })
                  }}
                  defaultValue={first_name}
                  control={Input}
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
                  placeholder="Location"
                />
              </Form.Group>
              <Form.Group>
                <Form.Field
                  onChange={e => {
                    this.setState({ bio: e.target.value })
                  }}
                  defaultValue={bio}
                  control={Input}
                  placeholder="Bio"
                />
              </Form.Group>
              <Form.Field positive type="submit" control={Button}>
                Save Changes
              </Form.Field>
              <Button.Group basic vertical>
                <Button
                  negative
                  icon="x"
                  content="Close"
                  onClick={this.close}
                />
              </Button.Group>
            </Form>
          </Modal.Content>
          <Button onClick={this.showConfirm}>Delete Profile</Button>
          <Confirm
            open={confirm_open}
            onCancel={this.handleCancel}
            onConfirm={this.handleDelete}
          />
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
