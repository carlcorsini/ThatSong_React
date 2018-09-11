import React, { Component } from 'react'
import { Grid, Segment, Form } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { filterSongs } from '../../redux/actions/songs'

class FilterSongs extends Component {
  render() {
    return (
      <Grid centered>
        <Grid.Row>
          <Grid.Column>
            <Segment
              style={{
                boxShadow: '1px 1px 10px 2px rgba(30, 31, 38, 0.58)'
              }}>
              <Form>
                <Form.Input
                  onChange={e => this.props.filterSongs(e.target.value)}
                  type="text"
                  name="filter-songs"
                  id="filter-field"
                  placeholder="filter by track title"
                />
              </Form>
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ filterSongs }, dispatch)

export default connect(null, mapDispatchToProps)(FilterSongs)
