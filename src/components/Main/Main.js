import React, { Component } from 'react'
import HomeHeading from './HomeHeading'
import { Container, Grid } from 'semantic-ui-react'
import SongList from './SongList'
class Main extends Component {
  render() {
    console.log(this.state)
    return (
      <div>
        <Container fluid>{/* <HomeHeading /> */}</Container>
        <Container>
          <Grid padded="vertically" divided="vertically">
            <Grid.Row>
              <SongList />
            </Grid.Row>
          </Grid>
        </Container>
      </div>
    )
  }
}

export default Main
