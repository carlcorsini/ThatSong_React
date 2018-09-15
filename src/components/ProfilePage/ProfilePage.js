import React, { Component } from 'react'
import FadeIn from 'react-fade-in'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { Container, Grid } from 'semantic-ui-react'
import TopSection from './TopSection/TopSection'
import ProfileSongList from './ProfileSongList'
import FilterSongs from '../Main/FilterSongs'
import './Profile.css'

class ProfilePage extends Component {
  componentDidMount() {
    this.setState({ user: this.props.user })
  }

  render() {
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
                <Container
                  style={{
                    marginTop: '-1em',
                    marginBottom: '5em',
                    minHeight: '35em',
                    boxShadow: '1px 1px 10px 1px rgba(30, 31, 38, 0.58)'
                  }}>
                  <ProfileSongList />
                </Container>
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
