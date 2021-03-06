import React, { Component } from 'react'
import FadeIn from 'react-fade-in'
import { Container, Grid } from 'semantic-ui-react'
import SongList from './SongList'
import FilterSongs from './FilterSongs'

// The Main Page contains 2 components: SongList and FilterSongs, organized by using semantic-ui Grid and Container. Some in line styling for minor tweaks.
class Main extends Component {
  render() {
    return (
      <Container>
        <Grid columns="equal" stackable>
          <Grid.Row>
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
            <Grid.Column>
              <FadeIn>
                <Container
                  style={{
                    boxShadow: '1px 1px 10px 1px rgba(30, 31, 38, 0.58)',
                    marginBottom: '5em'
                  }}>
                  <SongList history={this.props.history} />
                </Container>
              </FadeIn>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    )
  }
}

export default Main
