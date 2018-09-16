import React, { Component } from 'react'
import { connect } from 'react-redux'
import FadeIn from 'react-fade-in'
import { Container, Grid } from 'semantic-ui-react'
import SongList from './SongList'
import FilterSongs from './FilterSongs'

class Main extends Component {
  render() {
    return (
      <Container>
        <Grid stackable>
          <Grid.Row columns={2}>
            <Grid.Column />
            <Grid.Column>
              <FadeIn>
                <Container
                  style={{
                    marginTop: '2em'
                  }}>
                  <FilterSongs />
                </Container>
              </FadeIn>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <FadeIn>
              <Container
                style={{
                  minHeight: '45em',
                  boxShadow: '1px 1px 10px 1px rgba(30, 31, 38, 0.58)',
                  marginBottom: '5em'
                }}>
                <SongList history={this.props.history} />
              </Container>
            </FadeIn>
          </Grid.Row>
        </Grid>
      </Container>
    )
  }
}

export default Main
