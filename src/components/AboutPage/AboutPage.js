import React, { Component } from 'react'
import {
  Icon,
  Container,
  Divider,
  Grid,
  Header,
  Image,
  Button
} from 'semantic-ui-react'

class AboutPage extends Component {
  render() {
    return (
      <div style={{ backgroundColor: 'white' }}>
        <Container style={{ paddingBottom: '2em', paddingTop: '2em' }}>
          <Grid divided container stackable verticalAlign="middle">
            <Grid.Row>
              <Grid.Column width={8}>
                <Header as="h3" style={{ fontSize: '4em' }}>
                  Step 1
                </Header>
                <Button
                  fitted
                  animated
                  size="massive"
                  inverted
                  primary
                  target="_blank"
                  href="/signup">
                  <Button.Content visible>Sign Up</Button.Content>
                  <Button.Content hidden>Do it.</Button.Content>
                </Button>
                <Header as="h3" style={{ fontSize: '4em' }}>
                  Step 2
                </Header>
                <Button
                  animated
                  size="big"
                  inverted
                  primary
                  target="_blank"
                  href="https://chrome.google.com/webstore/detail/thatsong/anbbnfbonmbbfboffbagbcaoehhgkjmn">
                  <Button.Content visible>
                    Download Chrome Extension
                  </Button.Content>
                  <Button.Content hidden>You're Almost There!!</Button.Content>
                </Button>
              </Grid.Column>
              <Grid.Column floated="right" width={8}>
                <Header as="h3" style={{ fontSize: '4em' }}>
                  Step 3
                </Header>
                <p style={{ fontSize: '1.33em' }}>Watch tutorial!</p>
                <iframe
                  width="400"
                  height="250"
                  src="https://www.youtube.com/embed/zWdKutLttWI"
                  frameborder="0"
                  allow="autoplay; encrypted-media"
                  allowfullscreen
                />
              </Grid.Column>
            </Grid.Row>
          </Grid>
          <Divider style={{ marginTop: '5em' }} horizontal>
            <Icon name="music" />
          </Divider>
        </Container>
        <Container
          text
          style={{
            marginTop: '2em',
            fontSize: '1.8em',
            paddingBottom: '2em',
            textAlign: 'left'
          }}>
          <p>
            ThatSong is a platform which enables users to log, navigate and
            organize timestamps from tracks on Soundcloud.
          </p>
          <Divider horizontal>
            <Icon name="music" />
          </Divider>
          <p>
            ThatSong utilizes a chrome extension which makes saving timestamps
            truly as easy as a click of a button!
          </p>
          <Divider horizontal>
            <Icon name="music" />
          </Divider>
          <p>
            that-song.com enables users to browse and manage their saved tracks,
            other users tracks, as well follow other users.
          </p>
          <Divider horizontal>
            <Icon name="music" />
          </Divider>
          <p style={{ textAlign: 'center' }}>More features coming soon!</p>
        </Container>
        <br />
        <br />
      </div>
    )
  }
}

export default AboutPage
