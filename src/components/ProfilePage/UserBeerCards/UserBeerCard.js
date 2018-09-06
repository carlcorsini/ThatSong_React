import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchBeer } from '../../../redux/actions/fetchBeer'
import { Card, Image, Rating, Button } from 'semantic-ui-react'

const UserBeerCard = props => {
  let {
    id,
    beer_name,
    description,
    beer_label,
    brewery_name,
    style,
    abv,
    ibu,
    average_rating
  } = props.beer

  const handleClick = e => {
    e.preventDefault()
    props.fetchBeer(id, props.history)
  }

  return (
    <Card raised onClick={handleClick} className="beer-card">
      <Image src={beer_label} alt="Card image cap" />
      <Card.Content>
        <Card.Header>{beer_name}</Card.Header>
        <Card.Description>{brewery_name}</Card.Description>
        <Card.Description>{style}</Card.Description>
        <Card.Description>ABV: {abv}</Card.Description>
        <Card.Description>IBU: {ibu || 'N/A'}</Card.Description>
        <Rating
          size="large"
          disabled
          icon="star"
          rating={average_rating}
          maxRating={5}
        />
        <br />
        <br />
        <Card.Description>{description}</Card.Description>
      </Card.Content>
      <Button color="red" className="favorite">
        <i className="delete icon" />
        Delete From Favorites
      </Button>
    </Card>
  )
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ fetchBeer }, dispatch)

export default connect(null, mapDispatchToProps)(UserBeerCard)
