import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { updateProfile } from '../../redux/actions/auth_actions'
import { destroyUser } from '../../redux/actions/deleteUser'
import { Button, Image, Modal, Form, Input, Icon } from 'semantic-ui-react'

class ProfileModal extends Component {
  state = {
    open: false,
    save_disabled: true,
    delete_disabled: true
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.user !== this.props.user) {
      let {
        id,
        first_name,
        last_name,
        location,
        profile_pic,
        username,
        bio,
        soundcloud_url
      } = this.props.user

      this.setState({
        id,
        first_name,
        last_name,
        location,
        profile_pic,
        username,
        bio,
        soundcloud_url
      })
    }
  }

  show = dimmer => () => this.setState({ dimmer, open: true })

  close = () => this.setState({ open: false })

  handleSubmit = id => {
    let {
      profile_pic,
      first_name,
      last_name,
      username,
      location,
      bio,
      soundcloud_url
    } = this.state
    let attributes = {
      profile_pic,
      first_name,
      last_name,
      username,
      location,
      bio,
      soundcloud_url
    }

    this.props.updateProfile(id, attributes)
    this.close()
  }

  handleSaveButton = e => {
    this.setState({ save_disabled: false })
  }

  handleDelete = e => {
    e.preventDefault()
    this.props.destroyUser(1)
    this.close()
  }

  render() {
    let {
      id,
      first_name,
      last_name,
      location,
      profile_pic,
      username,
      bio,
      soundcloud_url
    } = this.props.user

    const { open, dimmer } = this.state
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
            <Form
              style={{ width: '45%' }}
              onSubmit={e => {
                this.handleSubmit(id)
              }}>
              <Image centered rounded wrapped size="small" src={profile_pic} />
              <br />
              <br />
              <Form.Group>
                <Form.Field
                  onChange={e => {
                    this.setState({
                      profile_pic: e.target.value,
                      save_disabled: false
                    })
                  }}
                  defaultValue={profile_pic}
                  control={Input}
                  placeholder="Profile Pic URL"
                />
              </Form.Group>
              <Form.Group>
                <Form.Field
                  onChange={e => {
                    this.setState({
                      first_name: e.target.value,
                      save_disabled: false
                    })
                  }}
                  defaultValue={first_name}
                  control={Input}
                  placeholder="First name"
                />
              </Form.Group>
              <Form.Group>
                <Form.Field
                  onChange={e => {
                    this.setState({
                      last_name: e.target.value,
                      save_disabled: false
                    })
                  }}
                  control={Input}
                  defaultValue={last_name}
                  placeholder="Last name"
                />
              </Form.Group>
              <Form.Group>
                <Form.Field
                  onChange={e => {
                    this.setState({
                      username: e.target.value,
                      save_disabled: false
                    })
                  }}
                  control={Input}
                  defaultValue={username}
                  placeholder="Username"
                />
              </Form.Group>
              <Form.Group>
                <Form.Field
                  onChange={e => {
                    this.setState({
                      location: e.target.value,
                      save_disabled: false
                    })
                  }}
                  defaultValue={location}
                  control={Input}
                  placeholder="Location"
                />
              </Form.Group>
              <Form.Group>
                <Form.Field
                  onChange={e => {
                    this.setState({
                      bio: e.target.value,
                      save_disabled: false
                    })
                  }}
                  defaultValue={bio}
                  control={Input}
                  placeholder="Bio"
                />
              </Form.Group>
              <Form.Group>
                <Form.Field
                  onChange={e => {
                    this.setState({
                      soundcloud_url: e.target.value,
                      save_disabled: false
                    })
                  }}
                  defaultValue={soundcloud_url}
                  control={Input}
                  placeholder="Soundcloud URL"
                />
              </Form.Group>
              <Form.Field
                disabled={this.state.save_disabled}
                positive
                type="submit"
                control={Button}>
                <Icon name="save" />
                Save Changes
              </Form.Field>

              <Button
                primary
                icon="x"
                content="Cancel Changes"
                onClick={this.close}
              />
            </Form>

            <Button.Group
              style={{ width: '35%' }}
              floated="left"
              compact
              widths={16}
              vertical>
              <Button
                animated
                negative
                onClick={e => {
                  this.setState({ delete_disabled: false })
                }}>
                <Button.Content visible>Delete Profile</Button.Content>
                <Button.Content hidden>
                  Are You Sure? <br /> <br /> This action cannot be undone.
                </Button.Content>
              </Button>
              <Button
                disabled={this.state.delete_disabled}
                negative
                onClick={this.handleDelete}>
                Confirm Delete Profile
              </Button>
            </Button.Group>
          </Modal.Content>
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
