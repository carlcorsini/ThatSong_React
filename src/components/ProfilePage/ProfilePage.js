import React, { Component } from 'react'
import FadeIn from 'react-fade-in'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { Container, Grid, Tab } from 'semantic-ui-react'
import TopSection from './TopSection/TopSection'
// import SoundCloud from './TopSection/SoundCloud'
import ProfileSongList from './ProfileSongList'
import FollowersList from './FollowersList'
import FollowingList from './FollowingList'
import FilterSongs from '../Main/FilterSongs'
import './Profile.css'

// The profile page contains 5 components organized by Semantic-UI grid and container. The components are: TopSection, ProfileSongList, FollowersList, FollowingList, FilterSongs
class ProfilePage extends Component {
  componentDidMount() {
    this.setState({ user: this.props.user })
  }

  render() {
    const panes = [
      {
        menuItem: 'My Feed',
        render: () => (
          <Tab.Pane
            style={{
              boxShadow: '1px 1px 10px 1px rgba(30, 31, 38, 0.58)',
            }}
            attached={false}>
            <FilterSongs />
            <ProfileSongList />
          </Tab.Pane>
        ),
      },
      {
        menuItem: 'Followers',
        render: () => (
          <Tab.Pane
            style={{
              boxShadow: '1px 1px 10px 1px rgba(30, 31, 38, 0.58)',
            }}
            attached={false}>
            <FollowersList history={this.props.history} />
          </Tab.Pane>
        ),
      },
      {
        menuItem: 'Following',
        render: () => (
          <Tab.Pane
            style={{
              boxShadow: '1px 1px 10px 1px rgba(30, 31, 38, 0.58)',
            }}
            attached={false}>
            <FollowingList history={this.props.history} />
          </Tab.Pane>
        ),
      },
    ]

    return localStorage.getItem('isLoggedIn') ? (
      <Container divided="vertically">
        <Grid stackable columns="equal">
          <Grid.Row style={{ marginBottom: '-5em' }}>
            <Grid.Column>
              <FadeIn>
                <Container style={{ marginTop: '1.3em', textAlign: 'left' }}>
                  <TopSection user={this.props.user} />
                </Container>
              </FadeIn>
            </Grid.Column>
            {/* <Grid.Column>
              <Container className="soundcloud">
                <SoundCloud songs={this.props.user.userSongs} />
              </Container>
            </Grid.Column> */}
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <FadeIn>
                <Tab
                  style={{
                    marginTop: '3em',
                    marginBottom: '5em',
                  }}
                  menu={{
                    compact: true,
                    pointing: true,
                  }}
                  panes={panes}
                />
              </FadeIn>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    ) : (
      <Redirect to="/" />
    )
  }
}

const mapStateToProps = (state, props) => ({
  user: state.auth.user,
})

export default connect(mapStateToProps, null)(ProfilePage)
