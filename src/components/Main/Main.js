import React, { Component } from 'react'
import { Container, Grid } from 'semantic-ui-react'
import SongList from './SongList'
import FilterSongs from './FilterSongs'

class Main extends Component {
  render() {
    return (
      <Container>
        <Grid stackable>
          <Grid.Row columns={2} collapsable>
            <Grid.Column />
            <Grid.Column>
              <Container
                style={{
                  marginTop: '2em'
                }}>
                <FilterSongs />
              </Container>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Container
              style={{
                minHeight: '45em',
                boxShadow: '1px 1px 10px 1px rgba(30, 31, 38, 0.58)'
              }}>
              <SongList />
            </Container>
          </Grid.Row>
        </Grid>
      </Container>
    )
  }
}

export default Main
