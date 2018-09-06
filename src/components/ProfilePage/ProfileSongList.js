import _ from 'lodash'
import React, { Component } from 'react'
import Moment from 'react-moment'
import { connect } from 'react-redux'
import { Table } from 'semantic-ui-react'

class ProfileSongList extends Component {
  state = {
    column: null,
    data: this.props.data,
    direction: null
  }

  handleSort = clickedColumn => () => {
    const { data } = this.props
    const { column, direction } = this.state

    if (column !== clickedColumn) {
      this.setState({
        column: clickedColumn,
        data: _.sortBy(data, [clickedColumn]),
        direction: 'ascending'
      })
    }

    this.setState({
      data: data.reverse(),
      direction: direction === 'ascending' ? 'descending' : 'ascending'
    })
  }
  render() {
    const { data } = this.props
    const { column, direction } = this.state

    return (
      <Table style={{ marginBottom: '5em' }} sortable celled fixed inverted>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell
              sorted={column === 'title' ? direction : null}
              onClick={this.handleSort('title')}>
              Title
            </Table.HeaderCell>
            <Table.HeaderCell
              sorted={column === 'timestamp' ? direction : null}
              onClick={this.handleSort('timestamp')}>
              Timestamp
            </Table.HeaderCell>
            <Table.HeaderCell
              sorted={column === 'url' ? direction : null}
              onClick={this.handleSort('url')}>
              URL
            </Table.HeaderCell>

            <Table.HeaderCell
              sorted={column === 'created_at' ? direction : null}
              onClick={this.handleSort('created_at')}>
              Created
            </Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {_.map(data, ({ id, title, timestamp, url, created_at }) => (
            <Table.Row key={id}>
              <Table.Cell>{title}</Table.Cell>
              <Table.Cell>{timestamp}</Table.Cell>
              <Table.Cell selectable>
                <a href={`https://soundcloud.com${url}#t=${timestamp}`}>
                  {`https://soundcloud.com${url}#t=${timestamp}`}
                </a>
              </Table.Cell>

              <Table.Cell>
                <Moment fromNow>{created_at}</Moment>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    )
  }
}
const mapStateToProps = (state, props) => {
  return { data: state.auth.user.userSongs }
}

export default connect(mapStateToProps, null)(ProfileSongList)
