import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Redirect } from 'react-router-dom'

import {
  Container,
  Item,
  Header,
  Segment,
  Icon,
  Button
} from 'semantic-ui-react'
import './TopSection.css'

import { followUser } from '../../../redux/actions/auth_actions'
import { unfollowUser } from '../../../redux/actions/auth_actions'

class TopSection extends Component {
  handleFollow = (user_id, friend_id) => {
    this.props.followUser(user_id, friend_id)
  }

  handleUnfollow = (user_id, friend_id) => {
    this.props.unfollowUser(user_id, friend_id)
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
    } = this.props.friend

    let { friends } = this.props
    let { id: user_id } = this.props.user

    let followers =
      friends.length < 2 && friends.length !== 0
        ? `${friends.length} Follower`
        : `${friends.length} Followers`

    return !this.props.friend ? (
      <Redirect to="/" />
    ) : (
      <Container className="top-section" fluid>
        <Item.Group>
          <Item>
            <Segment.Group horizontal raised>
              <Segment inverted>
                <Item.Image
                  rounded
                  centered
                  style={{
                    boxShadow: '1px 1px 10px 1px rgba(30, 31, 38, 0.58)'
                  }}
                  size="small"
                  src={profile_pic}
                />
                <br />
                <br />
                <div>
                  {this.props.friends.find(f => {
                    return f.id === id
                  }) ? (
                    <Button
                      disabled={user_id === id ? true : false}
                      onClick={e => {
                        this.handleUnfollow(user_id, id)
                      }}
                      basic>
                      Unfollow
                    </Button>
                  ) : (
                    <Button
                      disabled={user_id === id ? true : false}
                      onClick={e => {
                        this.handleFollow(user_id, id)
                      }}
                      basic>
                      Follow
                    </Button>
                  )}
                </div>
              </Segment>
              <Segment inverted>
                <Item.Content>
                  <Header size="large">{username}</Header>
                  <Item.Extra>{`${first_name} ${last_name}`}</Item.Extra>
                  <Item.Meta>{location}</Item.Meta>
                  <Item.Meta>{bio}</Item.Meta>
                  <Item.Meta>{followers}</Item.Meta>
                  <Item.Meta>
                    <a target="_blank" href={soundcloud_url}>
                      <Icon size="huge" name="soundcloud" link={true} />
                    </a>
                  </Item.Meta>
                </Item.Content>
              </Segment>
            </Segment.Group>
          </Item>
        </Item.Group>
      </Container>
    )
  }
}

const mapStateToProps = (state, props) => ({
  user: state.auth.user,
  friend: state.fetchFriend.friend,
  friends: state.auth.friends
})

const mapDispatchToProps = dispatch =>
  bindActionCreators({ followUser, unfollowUser }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TopSection)
