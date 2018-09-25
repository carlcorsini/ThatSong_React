import React, { Component } from 'react'
import { Segment, Form } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { filterSongs } from '../../redux/actions/songs'

class FilterSongs extends Component {
  render() {
    return (
      <Segment
        style={{
          boxShadow: '1px 1px 10px 2px rgba(30, 31, 38, 0.58)'
        }}>
        <Form>
          <Form.Input
            icon="search"
            onChange={e => this.props.filterSongs(e.target.value.toLowerCase())}
            type="text"
            name="filter-songs"
            id="filter-field"
            placeholder="Filter"
          />
        </Form>
      </Segment>
    )
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ filterSongs }, dispatch)

export default connect(null, mapDispatchToProps)(FilterSongs)
