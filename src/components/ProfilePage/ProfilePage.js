import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Container, Tab, Grid, Header } from 'semantic-ui-react'
import TopSection from './TopSection/TopSection'
import ProfileSongList from './ProfileSongList'

class ProfilePage extends Component {
  render() {
    return (
      <Container textAlign="left">
        <Grid>
          <Grid.Column>
            <Grid.Row>
              <TopSection user={this.props.user} />
            </Grid.Row>
            <Grid.Row>
              <ProfileSongList />
            </Grid.Row>
          </Grid.Column>
        </Grid>
      </Container>
    )
  }
}

const mapStateToProps = (state, props) => ({
  userBeers: state.auth.userBeers,
  user: state.auth.user
})

export default connect(mapStateToProps, null)(ProfilePage)
