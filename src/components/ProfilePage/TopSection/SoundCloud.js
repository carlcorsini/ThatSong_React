import React, { Component } from 'react'
import FadeIn from 'react-fade-in'

import {
  Container,
  Item,
  Header,
  Segment,
  Icon,
  Button
} from 'semantic-ui-react'

// This SoundCloud component is a wrapper for the soundcloud iframe. It is currently under development and not in user by ThatSong
class SoundCloud extends Component {
  render() {
    let song = this.props.songs
      ? this.props.songs[Math.floor(Math.random() * this.props.songs.length)]
      : 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/310646666&color=%2300d3ff&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true'

    return (
      <FadeIn>
        <Container className="top-section">
          <Item>
            <Segment.Group
              horizontal
              style={{
                boxShadow: '1px 1px 10px 1px rgba(30, 31, 38, 0.58)'
              }}>
              <Segment inverted>
                <iframe
                  title="soundcloud"
                  width="100%"
                  height="100%"
                  scrolling="yes"
                  frameBorder="no"
                  allow="autoplay"
                  src={`https://w.soundcloud.com/player/?url=https%3A//soundcloud.com${
                    song.url
                  }&color=%2300d3ff&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true`}
                />
              </Segment>
            </Segment.Group>
          </Item>
        </Container>
      </FadeIn>
    )
  }
}

export default SoundCloud
