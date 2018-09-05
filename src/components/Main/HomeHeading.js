import React, { Component } from 'react'
import { Image } from 'semantic-ui-react'

class HomeHeading extends Component {
  render() {
    return (
      <div>
        <Image
          style={{
            width: '100%',
            boxShadow: '1px 1px 10px 1px rgba(30, 31, 38, 0.58)'
          }}
          src="https://wallpaper-house.com/data/out/10/wallpaper2you_381525.jpg"
        />
      </div>
    )
  }
}

export default HomeHeading
