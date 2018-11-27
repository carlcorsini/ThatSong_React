import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Redirect } from 'react-router-dom'
import FadeIn from 'react-fade-in'

// the TopSection of the FriendPage display's the information for the user whos profile you are viewing. It also gives the ability to follow and unfollow the viewed user and updates the statistics with redux.
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

    let { fetchFollowers, fetchFollowing } = this.props
    let { id: user_id } = this.props.user

    let followers =
      fetchFollowers.length < 2 && fetchFollowers.length !== 0
        ? `${fetchFollowers.length} Follower`
        : `${fetchFollowers.length} Followers`

    let following =
      fetchFollowing.length < 2 && fetchFollowing.length !== 0
        ? `${fetchFollowing.length} Following`
        : `${fetchFollowing.length} Following`

    return !this.props.friend ? (
      <Redirect to="/" />
    ) : (
      <FadeIn>
        <Container className="top-section" fluid>
          <Item.Group>
            <Item>
              <Segment.Group
                horizontal
                style={{
                  boxShadow: '1px 1px 10px 1px rgba(30, 31, 38, 0.58)'
                }}>
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
                    {fetchFollowers.find(f => {
                      return f.id === user_id
                    }) ? (
                      <Button
                        disabled={user_id === id ? true : false}
                        onClick={e => {
                          this.handleUnfollow(id, user_id)
                        }}
                        basic>
                        Unfollow
                      </Button>
                    ) : (
                      <Button
                        disabled={user_id === id ? true : false}
                        onClick={e => {
                          this.handleFollow(id, user_id)
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
                    <Item.Meta>{following}</Item.Meta>
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
      </FadeIn>
    )
  }
}

const mapStateToProps = (state, props) => ({
  user: state.auth.user,
  friend: state.auth.fetchFriend,
  fetchFollowers: state.auth.fetchFollowers,
  fetchFollowing: state.auth.fetchFollowing
})

const mapDispatchToProps = dispatch =>
  bindActionCreators({ followUser, unfollowUser }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TopSection)
