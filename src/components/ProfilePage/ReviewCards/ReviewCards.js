import React from 'react'
import ReviewCard from './ReviewCard'
import { Container, Card, Header } from 'semantic-ui-react'
import './ReviewCard.css'

const ReviewCards = ({ beers, history, reviews }) => {
  let listOfReviews =
    reviews === undefined ? (
      <div />
    ) : (
      reviews.map(review => (
        <ReviewCard review={review} key={review.id} history={history} />
      ))
    )
  return reviews === undefined ? (
    <div />
  ) : (
    <Container className="beer-card">
      <Header as="h1" textAlign="center">
        Reviews
      </Header>
      <Card.Group centered>{listOfReviews}</Card.Group>
    </Container>
  )
}

export default ReviewCards
