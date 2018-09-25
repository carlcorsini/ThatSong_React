import React, { Component } from 'react'
import { Menu, Icon } from 'semantic-ui-react'

import './Footer.css'

class FooterComponent extends Component {
  render() {
    return (
      <Menu
        size="mini"
        icon="labeled"
        compact
        style={{
          border: '0',
          boxShadow: '1px 1px 10px 1px rgba(30, 31, 38, 0.58)'
        }}
        className="foot-er"
        inverted>
        <Menu.Item href="/">
          <Icon size="tiny" name="home" />
          Home
        </Menu.Item>
        <Menu.Item href="#tippy-top">
          <Icon name="arrow alternate circle up outline" />
          2 Da Top
        </Menu.Item>
      </Menu>
    )
  }
}

export default FooterComponent
