import React, { Component } from 'react'
import FadeIn from 'react-fade-in'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { Container, Grid, Tab } from 'semantic-ui-react'
import TopSection from './TopSection/TopSection'
import ProfileSongList from './ProfileSongList'
import FriendsList from './FriendsList'
import FilterSongs from '../Main/FilterSongs'
import './Profile.css'

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
              boxShadow: '1px 1px 10px 1px rgba(30, 31, 38, 0.58)'
            }}
            attached={false}>
            <ProfileSongList />
          </Tab.Pane>
        )
      },
      {
        menuItem: 'Friends',
        render: () => (
          <Tab.Pane
            style={{
              boxShadow: '1px 1px 10px 1px rgba(30, 31, 38, 0.58)'
            }}
            attached={false}>
            <FriendsList history={this.props.history} />
          </Tab.Pane>
        )
      }
    ]

    return localStorage.getItem('isLoggedIn') ? (
      <Container divided="vertically">
        <Grid stackable columns="equal">
          <Grid.Row>
            <Grid.Column>
              <FadeIn>
                <Container style={{ marginTop: '1.3em', textAlign: 'left' }}>
                  <TopSection user={this.props.user} />
                </Container>
              </FadeIn>
            </Grid.Column>
            <Grid.Column>
              <FadeIn>
                <Container className="filter-input">
                  <FilterSongs />
                </Container>
              </FadeIn>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <FadeIn>
                <Tab
                  style={{
                    marginTop: '-1em',
                    marginBottom: '5em'
                  }}
                  menu={{
                    compact: true,
                    pointing: true
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
  user: state.auth.user
})

export default connect(mapStateToProps, null)(ProfilePage)
