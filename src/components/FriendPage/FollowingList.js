import _ from 'lodash'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Card, Image } from 'semantic-ui-react'
import FadeIn from 'react-fade-in'
import { fetchFriend } from '../../redux/actions/auth_actions'

//FollowingList is a display for which users the user who is being viewed follows.
class FollowingList extends Component {
  state = {
    column: null,
    data: [],
    direction: null
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.data !== this.props.data) {
      this.setState({ data: nextProps.data })
    }
  }

  componentDidMount() {
    this.setState({ data: this.props.data })
  }

  handleClickFriend = id => {
    this.props.fetchFriend(id, this.props.history)
  }

  render() {
    const { data } = this.state

    return (
      <FadeIn>
        <Card.Group centered>
          {_.map(data, ({ id: following_id, profile_pic, username }) => (
            <Card
              onClick={e => {
                this.handleClickFriend(following_id)
              }}
              raised
              key={following_id}>
              <Image centered size="small" src={profile_pic} />
              <Card.Content>
                <Card.Header>{username}</Card.Header>
              </Card.Content>
            </Card>
          ))}
        </Card.Group>
      </FadeIn>
    )
  }
}
const mapStateToProps = ({ auth }) => {
  if (auth.user) {
    return {
      data: auth.fetchFollowing
    }
  } else {
    return {}
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchFriend: bindActionCreators(fetchFriend, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FollowingList)
