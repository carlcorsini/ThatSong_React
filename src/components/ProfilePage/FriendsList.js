import _ from 'lodash'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Card, Image } from 'semantic-ui-react'
import { fetchFriend } from '../../redux/actions/fetchFriend'

class FriendsList extends Component {
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
      <Card.Group centered>
        {_.map(data, ({ id, profile_pic, username }) => (
          <Card
            onClick={e => {
              this.handleClickFriend(id)
            }}
            raised
            key={id}>
            <Image centered size="medium" src={profile_pic} />
            <Card.Content>
              <Card.Header>{username}</Card.Header>
            </Card.Content>
          </Card>
        ))}
      </Card.Group>
    )
  }
}
const mapStateToProps = ({ auth }) => {
  if (auth.user) {
    return {
      data: auth.user.friends
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

export default connect(mapStateToProps, mapDispatchToProps)(FriendsList)
