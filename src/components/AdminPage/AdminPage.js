import React, { Component } from 'react'
import { connect } from 'react-redux'
import FadeIn from 'react-fade-in'
import { Container, Grid, Header, Segment } from 'semantic-ui-react'
import AdminTopSection from './AdminTopSection/AdminTopSection'
import AdminList from './AdminList'
import FilterSongs from '../Main/FilterSongs'
import './Admin.css'

class AdminPage extends Component {
  render() {
    return (
      <Container divided="vertically">
        <Grid stackable columns="equal">
          <Grid.Row>
            <Grid.Column>
              <FadeIn>
                <Container style={{ marginTop: '1.3em', textAlign: 'left' }}>
                  <AdminTopSection user={this.props.user} />
                </Container>
              </FadeIn>
            </Grid.Column>
            <Grid.Column>
              <Grid.Row>
                <FadeIn>
                  <Container
                    className="admin-header"
                    style={{
                      backgroundColor: 'red'
                    }}>
                    <Segment.Group>
                      <Segment
                        style={{
                          backgroundColor: '#ff7700',
                          boxShadow: '1px 1px 10px 1px rgba(30, 31, 38, 0.58)',
                          border: '1px dashed'
                        }}
                        raised>
                        <Header as="h1">Admin Page</Header>
                      </Segment>
                    </Segment.Group>
                  </Container>
                </FadeIn>
              </Grid.Row>
              <Grid.Row>
                <FadeIn>
                  <Container className="filter-input">
                    <FilterSongs />
                  </Container>
                </FadeIn>
              </Grid.Row>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <FadeIn>
                <Container
                  style={{
                    marginTop: '-1em',
                    marginBottom: '5em',
                    boxShadow: '1px 1px 10px 1px rgba(30, 31, 38, 0.58)'
                  }}>
                  <AdminList />
                </Container>
              </FadeIn>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    )
  }
}

const mapStateToProps = (state, props) => ({
  user: state.auth.user
})

export default connect(mapStateToProps, null)(AdminPage)
