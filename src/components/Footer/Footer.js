import React, { Component } from 'react'
import { Menu, Icon } from 'semantic-ui-react'

import './Footer.css'

class FooterComponent extends Component {
  render() {
    return (
      <Menu
        size="large"
        style={{
          boxShadow: '1px 1px 10px 1px rgba(30, 31, 38, 0.58)'
        }}
        className="foot-er"
        inverted>
        <Menu.Item style={{ textDecoration: 'none' }} href="/">
          <Icon name="home" />
          Home
        </Menu.Item>
        <Menu.Item style={{ textDecoration: 'none' }} href="#tippy-top">
          <Icon name="arrow alternate circle up outline" />
          2 Da Top
        </Menu.Item>
        <Menu.Menu position="right">
          <Menu.Item
            target="_blank"
            style={{ textDecoration: 'none' }}
            href="https://github.com/carlcorsini/thatSong">
            <Icon name="github" />
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    )
  }
}

export default FooterComponent
