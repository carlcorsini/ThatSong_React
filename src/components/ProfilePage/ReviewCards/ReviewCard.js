import React from 'react'
import './ReviewCard.css'
import { Card, Button, Image, Rating } from 'semantic-ui-react'

const ReviewCard = props => {
  let { review_title, review_body, review_img, rating } = props.review

  return (
    <Card raised className="beer-card">
      <Image src={review_img} />
      <Card.Content>
        <Card.Header>{review_title}</Card.Header>
        <br />
        <Rating
          size="large"
          disabled
          icon="star"
          rating={rating}
          maxRating={5}
        />
        <br />
        <br />
        <Card.Description>{review_body}</Card.Description>
      </Card.Content>
      <Button color="red" className="favorite">
        <i className="delete icon" />
        Delete Review
      </Button>
    </Card>
  )
}

export default ReviewCard
