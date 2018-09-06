import React, { Component } from 'react'
import { Image, Header } from 'semantic-ui-react'

class HomeHeading extends Component {
  render() {
    return (
      <div>
        <Header style={{ marginTop: '2em', marginBottom: '2em' }} as="h1">
          That Song
        </Header>
      </div>
    )
  }
}

export default HomeHeading
