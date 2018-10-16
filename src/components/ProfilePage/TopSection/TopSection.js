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
import './TopSection.css'
import ProfileModal from '../ProfileModal'
class TopSection extends Component {
  render() {
    let {
      first_name,
      last_name,
      location,
      profile_pic,
      username,
      bio,
      soundcloud_url,
      userSongs
    } = this.props.user

    const data =
      'text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(userSongs))

    return (
      <FadeIn>
        <Container className="top-section" fluid>
          <Item.Group>
            <Item>
              <Segment.Group
                horizontal
                style={{
                  boxShadow: '1px 1px 10px 1px rgba(30, 31, 38, 0.58)'
                }}>
                <Segment inverted>
                  <Item.Image
                    rounded
                    centered
                    style={{
                      boxShadow: '1px 1px 10px 1px rgba(30, 31, 38, 0.58)'
                    }}
                    size="small"
                    src={profile_pic}
                  />
                  <br />
                  <br />

                  <ProfileModal user={this.props.user} />
                  <Button
                    as="a"
                    content="Download Song Data"
                    basic
                    size="mini"
                    href={`data: ${data}`}
                    download={`${username}_songs.json`}
                  />
                </Segment>
                <Segment inverted>
                  <Item.Content>
                    <Header size="large">{username || ''}</Header>
                    <Item.Extra>{`${first_name || ''} ${last_name ||
                      ''}`}</Item.Extra>
                    <Item.Meta>{location || ''}</Item.Meta>
                    <Item.Meta>{bio || ''}</Item.Meta>
                    <Item.Meta>
                      <a target="_blank" href={soundcloud_url}>
                        <Icon size="huge" name="soundcloud" link={true} />
                      </a>
                    </Item.Meta>
                  </Item.Content>
                </Segment>
              </Segment.Group>
            </Item>
          </Item.Group>
        </Container>
      </FadeIn>
    )
  }
}

export default TopSection
