import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Container, Tab, Grid, Header } from 'semantic-ui-react'
import TopSection from './TopSection/TopSection'
import UserBeerCards from './UserBeerCards/UserBeerCards'
import ReviewCards from './ReviewCards/ReviewCards'
import Cards from './Cards'

class ProfilePage extends Component {
  render() {
    const panes = [
      {
        menuItem: 'Favorite Beers',
        render: () => (
          <Tab.Pane attached={false}>
            <UserBeerCards
              history={this.props.history}
              userBeers={this.props.userBeers}
            />
          </Tab.Pane>
        )
      },
      {
        menuItem: 'Reviews',
        render: () => (
          <Tab.Pane attached={false}>
            <ReviewCards reviews={this.props.user.reviews} />
          </Tab.Pane>
        )
      }
    ]
    return !this.props.user ? (
      <div />
    ) : (
      <Container textAlign="left">
        <Grid columns={2}>
          <Grid.Column>
            <TopSection user={this.props.user} />
          </Grid.Column>
          <Grid.Column>
            <div style={{ marginTop: '3em' }}>
              <Header as="h2" style={{ textAlign: 'center' }}>
                Friends
              </Header>
              <Cards friends={this.props.user.friends} />
            </div>
          </Grid.Column>
        </Grid>
        <br />
        <Tab menu={{ secondary: true, pointing: true }} panes={panes} />
      </Container>
    )
  }
}

const mapStateToProps = (state, props) => ({
  userBeers: state.auth.userBeers,
  user: state.auth.user
})

export default connect(mapStateToProps, null)(ProfilePage)
