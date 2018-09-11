import React, { Component } from 'react'
import { Container, Item, Header, Segment, Icon } from 'semantic-ui-react'
import ProfileModal from '../ProfileModal'
import './TopSection.css'
class TopSection extends Component {
  render() {
    let {
      first_name,
      last_name,
      location,
      profile_pic,
      username,
      bio,
      favorite_style
    } = this.props.user
    return (
      <Container className="top-section" fluid>
        <Item.Group>
          <Item>
            <Segment.Group horizontal raised>
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
                <div>
                  <ProfileModal user={this.props.user} />
                </div>
              </Segment>
              <Segment inverted>
                <Item.Content>
                  <Header size="large">{username || ''}</Header>
                  <Item.Extra>{`${first_name || ''} ${last_name ||
                    ''}`}</Item.Extra>
                  <Item.Meta>{bio || ''}</Item.Meta>
                  <Item.Meta>{location || ''}</Item.Meta>
                  <Item.Meta>
                    <a href="https://soundcloud.com/carl-corsini">
                      <Icon size="huge" name="soundcloud" link={true} />
                    </a>
                  </Item.Meta>
                </Item.Content>
              </Segment>
            </Segment.Group>
          </Item>
        </Item.Group>
      </Container>
    )
  }
}

export default TopSection
