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
      <div>
        <br />
        <br />
        <Container text>
          <Segment
            style={{
              boxShadow: '1px 1px 10px 2px rgba(30, 31, 38, 0.58)',
              marginBottom: '2em',
              backgroundColor: 'rgb(27, 27, 27)',
              color: 'white'
            }}>
            <Header style={{ fontSize: '3em', color: 'white' }} as="h1">
              About ThatSong
            </Header>
          </Segment>
        </Container>
        <Container text>
          <Segment
            style={{
              boxShadow: '1px 1px 10px 2px rgba(30, 31, 38, 0.58)',
              backgroundColor: 'rgb(27, 27, 27)',
              color: 'white'
            }}>
            <Container
              text
              style={{
                fontSize: '1.5em'
              }}
              textAlign="left">
              <p style={{ width: '95%' }}>
                ThatSong is a Chrome Extension which enables users to log
                timestamps from tracks on Soundcloud.
              </p>

              <p style={{ width: '95%' }}>
                This site enables users to navigate their own saved tracks,
                other users tracks, as well follow other users.
              </p>
            </Container>
            <Container style={{ marginTop: '2em', color: 'white' }}>
              <Button.Group vertical>
                <Button
                  inverted
                  primary
                  size="huge"
                  href="mailto:craigcorsini@gmail.com">
                  View Extension In Chrome Store
                </Button>
              </Button.Group>
            </Container>
          </Segment>
          <Segment
            style={{
              boxShadow: '1px 1px 10px 2px rgba(30, 31, 38, 0.58)',
              backgroundColor: 'rgb(27, 27, 27)'
            }}>
            <Container
              style={{ marginTop: '3em', marginBottom: '3em', color: 'white' }}>
              <Grid divided columns="equal" stackable>
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
            </Container>
          </Segment>
        </Container>
        <br />
        <br />
        <br />
      </div>
    )
  }
}

export default AboutPage
