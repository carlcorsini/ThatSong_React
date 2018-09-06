import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Card, Image } from 'semantic-ui-react'
import './Cards.css'

import { fetchBrewery } from '../../redux/actions/fetchBrewery'
import { fetchBreweryBeer } from '../../redux/actions/beersByBrewery'

const Cards = props => {
  return !props.user.friends ? (
    <div />
  ) : (
    <Card.Group itemsPerRow={2}>
      <Card raised>
        <Image src="https://usatftw.files.wordpress.com/2018/02/ap_warriors_bulls_basketball_96792555.jpg?w=1000&h=600&crop=1" />
        <Card.Content>
          <Card.Description style={{ textAlign: 'center' }}>
            Stephen Curry
          </Card.Description>
        </Card.Content>
      </Card>
      <Card raised>
        <Image src="https://i.kinja-img.com/gawker-media/image/upload/s--gORHq2jb--/c_scale,f_auto,fl_progressive,q_80,w_800/j5eayzpwd09mzqlwhlya.jpg" />
        <Card.Content>
          <Card.Description style={{ textAlign: 'center' }}>
            Ron Burgandy
          </Card.Description>
        </Card.Content>
      </Card>{' '}
      <Card raised>
        <Image src="https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/06/01/12/0rj5Q9DOS1Qx.jpg" />
        <Card.Content>
          <Card.Description style={{ textAlign: 'center' }}>
            Tom
          </Card.Description>
        </Card.Content>
      </Card>{' '}
      <Card raised>
        <Image src="https://www.biography.com/.image/t_share/MTQ1MjM0NTMzNTk0MTc5MDQx/al-pacino---enduring-success.jpg" />
        <Card.Content>
          <Card.Description style={{ textAlign: 'center' }}>
            Al Pacino
          </Card.Description>
        </Card.Content>
      </Card>{' '}
    </Card.Group>
  )
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ fetchBrewery, fetchBreweryBeer }, dispatch)

const mapStateToProps = ({ auth, beers, breweries }) => ({
  beers: beers,
  breweries: breweries,
  user: auth.user
})

export default connect(mapStateToProps, mapDispatchToProps)(Cards)
