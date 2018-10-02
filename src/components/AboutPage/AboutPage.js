import React, { Component } from 'react'
import {
  Container,
  Divider,
  Grid,
  Header,
  Image,
  List,
  Button,
  Segment
} from 'semantic-ui-react'

class AboutPage extends Component {
  render() {
    return (
      <div style={{ backgroundColor: 'white' }}>
        <br />
        <br />
        <Container text>
          <Segment
            raised
            id="projects"
            style={{ padding: '6em 6em', border: '0' }}>
            <Grid container stackable verticalAlign="middle">
              <Grid.Row>
                <Grid.Column width={8}>
                  <Header as="h3" style={{ fontSize: '4em' }}>
                    Step 1
                  </Header>
                  {/* <p style={{ fontSize: '2em' }}>Sign Up</p> */}
                  <Button size="massive" inverted primary href="/signup">
                    Sign Up
                  </Button>
                  <Header as="h3" style={{ fontSize: '4em' }}>
                    Step 2
                  </Header>
                  <Button size="big" inverted primary href="/signup">
                    Download Chrome Extension
                  </Button>
                </Grid.Column>
                <Grid.Column floated="right" width={6}>
                  <Header as="h3" style={{ fontSize: '4em' }}>
                    Step 3
                  </Header>
                  <p style={{ fontSize: '1.33em' }}>Watch tutorial!</p>
                  <Image
                    href="https://beer-me-react.herokuapp.com"
                    bordered
                    rounded
                    size="large"
                    src="https://i.imgur.com/AWzT3w5.png"
                  />
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Segment>
          <br />
          <br />
          <Container
            text
            style={{
              fontSize: '1.5em'
            }}
            textAlign="center">
            <p>
              ThatSong is a platform which enables users to log timestamps from
              tracks on Soundcloud.
            </p>

            <p>
              that-song.com enables users to browse and manage their saved
              tracks, other users tracks, as well follow other users.
            </p>
          </Container>
        </Container>
        <br />
        <br />
      </div>
    )
  }
}

export default AboutPage
