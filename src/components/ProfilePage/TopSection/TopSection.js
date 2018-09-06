import React, { Component } from 'react'
import { Container, Item, Header } from 'semantic-ui-react'
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
            <Item.Image
              style={{
                boxShadow: '1px 1px 10px 1px rgba(30, 31, 38, 0.58)'
              }}
              size="medium"
              src={profile_pic}
            />
            <Item.Content>
              <Header size="huge" as="a">
                {`${first_name || ''} ${last_name || ''}`}
              </Header>
              <Item.Extra>{username || ''}</Item.Extra>
              <Item.Meta>{bio || ''}</Item.Meta>
              <Item.Meta>{location || ''}</Item.Meta>
              <Item.Meta>Favorite Style: {favorite_style || ''}</Item.Meta>
              <br />
              <div style={{ margingRight: '10em' }}>
                <ProfileModal user={this.props.user} />
              </div>
            </Item.Content>
          </Item>
        </Item.Group>
      </Container>
    )
  }
}

export default TopSection
