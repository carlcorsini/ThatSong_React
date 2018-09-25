import FadeIn from 'react-fade-in'
import CopyToClipboard from 'react-copy-to-clipboard'

import React, { Component } from 'react'
import {
  Container,
  Divider,
  Grid,
  Header,
  Image,
  List,
  Button
} from 'semantic-ui-react'

class AboutPage extends Component {
  render() {
    return (
      <div style={{ backgroundColor: 'white' }}>
        <Container text>
          <br />
          <br />
          <Header style={{ fontSize: '2.5em' }} as="h1">
            About ThatSong
          </Header>
        </Container>

        <Container text>
          <Divider />
          <Container
            text
            style={{ fontSize: '1.2em', marginTop: '1em' }}
            textAlign="left">
            <p>
              Have you ever found yourself listening to a 2 hour long mix on
              soundcloud, heard an absolute banger, only to never hear it again?
              Have you evert lost sleep scheming how you will track the song
              down, the mix was it from, even going as far as singing to shazam
              to see if it can pick up your rendition of a synth melody?
            </p>
            <p>ThatSong is here to solve that problem.</p>
            <p>
              ThatSong is a Chrome Extension which enables users to keep track
              of timestamps from tracks on Soundcloud.
            </p>
            <p>
              This site enables users to navigate their own saved tracks, other
              users tracks, as well follow other users.
            </p>
          </Container>
          <Container style={{ marginTop: '2em' }}>
            <Button.Group vertical>
              <Button primary size="huge" href="mailto:craigcorsini@gmail.com">
                View Extension In Chrome
              </Button>
            </Button.Group>
          </Container>
          <Container style={{ marginTop: '5em', marginBottom: '3em' }}>
            <Grid divided columns="equal" stackable>
              <Header>Services Include:</Header>
              <Grid.Row textAlign="center">
                <Grid.Column
                  style={{
                    fontSize: '1.5em',
                    paddingBottom: '2em',
                    paddingTop: '2em'
                  }}>
                  <List>
                    <List.Item>College Essays</List.Item>
                    <List.Item>Theses</List.Item>
                    <List.Item>White Papers</List.Item>
                    <List.Item>Term Papers</List.Item>
                  </List>
                </Grid.Column>
                <Grid.Column
                  style={{
                    fontSize: '1.5em',
                    paddingBottom: '2em',
                    paddingTop: '2em'
                  }}>
                  <List>
                    <List.Item>Business Corespondence</List.Item>
                    <List.Item>Feature Articles</List.Item>
                    <List.Item>Marketing Copy</List.Item>
                  </List>
                </Grid.Column>
                <Grid.Column
                  style={{
                    fontSize: '1.5em',
                    paddingBottom: '2em',
                    paddingTop: '2em'
                  }}>
                  <List>
                    <List.Item>Fiction</List.Item>
                    <List.Item>Creative Writing</List.Item>
                    <List.Item>Cover Letters</List.Item>
                    <List.Item>Resumes</List.Item>
                  </List>
                </Grid.Column>
              </Grid.Row>
            </Grid>
            <Divider />
          </Container>
        </Container>
      </div>
    )
  }
}

export default AboutPage
