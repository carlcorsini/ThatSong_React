import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Container, Tab, Grid, Header } from 'semantic-ui-react'
import TopSection from './TopSection/TopSection'
import ProfileSongList from './ProfileSongList'
import FilterSongs from '../Main/FilterSongs'
import './Profile.css'

class ProfilePage extends Component {
  render() {
    return (
      <Container divided="vertically">
        <Grid stackable columns="equal">
          <Grid.Row>
            <Grid.Column>
              <Container style={{ marginTop: '1.3em', textAlign: 'left' }}>
                <TopSection user={this.props.user} />
              </Container>
            </Grid.Column>
            <Grid.Column>
              <Container className="filter-input">
                <FilterSongs />
              </Container>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column centered>
              <Container
                style={{
                  marginTop: '-1em',
                  minHeight: '40em',
                  boxShadow: '1px 1px 10px 1px rgba(30, 31, 38, 0.58)'
                }}>
                <ProfileSongList />
              </Container>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    )
  }
}

const mapStateToProps = (state, props) => ({
  user: state.auth.user
})

export default connect(mapStateToProps, null)(ProfilePage)
