import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Container, Tab, Grid, Header } from 'semantic-ui-react'
import TopSection from './TopSection/TopSection'
import ProfileSongList from './ProfileSongList'

class ProfilePage extends Component {
  render() {
    return !this.props.user ? (
      <div />
    ) : (
      <Container textAlign="left">
        <Grid columns={2}>
          <Grid.Column>
            <TopSection user={this.props.user} />
          </Grid.Column>
        </Grid>
        <ProfileSongList />
      </Container>
    )
  }
}

const mapStateToProps = (state, props) => ({
  userBeers: state.auth.userBeers,
  user: state.auth.user
})

export default connect(mapStateToProps, null)(ProfilePage)
