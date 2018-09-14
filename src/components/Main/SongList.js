import _ from 'lodash'
import React, { Component } from 'react'
import Moment from 'react-moment'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { connect } from 'react-redux'
import { Table, Icon } from 'semantic-ui-react'

class SongList extends Component {
  state = {
    column: null,
    data: [],
    direction: null
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.data !== this.props.data) {
      this.setState({ data: nextProps.data })
    }
  }

  handleSort = clickedColumn => () => {
    const { column, direction, data } = this.state

    if (column !== clickedColumn) {
      this.setState({
        column: clickedColumn,
        data: _.sortBy(data, [clickedColumn]),
        direction: 'ascending'
      })

      return
    }

    this.setState({
      data: data.reverse(),
      direction: direction === 'ascending' ? 'descending' : 'ascending'
    })
  }
  render() {
    const { column, direction, data } = this.state

    return (
      <Table striped sortable celled inverted>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell
              style={{ textAlign: 'center' }}
              sorted={column === 'title' ? direction : null}
              onClick={this.handleSort('title')}>
              Title
            </Table.HeaderCell>
            <Table.HeaderCell
              style={{ textAlign: 'center' }}
              sorted={column === 'artist' ? direction : null}
              onClick={this.handleSort('artist')}>
              Artist
            </Table.HeaderCell>
            <Table.HeaderCell
              style={{ textAlign: 'center' }}
              sorted={column === 'timestamp' ? direction : null}
              onClick={this.handleSort('timestamp')}>
              Timestamp
            </Table.HeaderCell>
            <Table.HeaderCell
              style={{ textAlign: 'center' }}
              sorted={column === 'source' ? direction : null}
              onClick={this.handleSort('source')}>
              Source
            </Table.HeaderCell>
            <Table.HeaderCell
              style={{ textAlign: 'center' }}
              sorted={column === 'url' ? direction : null}
              onClick={this.handleSort('url')}>
              URL
            </Table.HeaderCell>
            <Table.HeaderCell
              style={{ textAlign: 'center' }}
              sorted={column === 'username' ? direction : null}
              onClick={this.handleSort('username')}>
              Username
            </Table.HeaderCell>
            <Table.HeaderCell
              style={{ textAlign: 'center' }}
              sorted={column === 'created_at' ? direction : null}
              onClick={this.handleSort('created_at')}>
              Created
            </Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {_.map(
            data,
            ({ id, title, artist, timestamp, url, username, created_at }) => (
              <Table.Row key={id}>
                <Table.Cell style={{ textAlign: 'center' }}>{title}</Table.Cell>
                <Table.Cell selectable style={{ textAlign: 'center' }}>
                  <a
                    target="_blank"
                    href={`https://soundcloud.com/${url.split('/')[1]}`}>
                    {artist}
                  </a>
                </Table.Cell>
                <Table.Cell style={{ textAlign: 'center' }}>
                  {timestamp}
                </Table.Cell>
                <Table.Cell style={{ textAlign: 'center' }} selectable>
                  <a
                    target="_blank"
                    href={`https://soundcloud.com${url}#t=${timestamp}`}>
                    <Icon size="big" fitted name="soundcloud" />
                  </a>
                </Table.Cell>
                <Table.Cell
                  style={{ textAlign: 'center', cursor: 'pointer' }}
                  selectable>
                  <CopyToClipboard
                    text={`https://soundcloud.com${url}#t=${timestamp}`}>
                    <Icon fitted size="big" name="clipboard" />
                  </CopyToClipboard>
                </Table.Cell>
                <Table.Cell style={{ textAlign: 'center' }}>
                  {username}
                </Table.Cell>
                <Table.Cell style={{ textAlign: 'center' }}>
                  <Moment fromNow>{created_at}</Moment>
                </Table.Cell>
              </Table.Row>
            )
          )}
        </Table.Body>
      </Table>
    )
  }
}

const mapStateToProps = ({ songs, filterSongs }) => {
  return {
    data: songs.data.filter(
      song =>
        song.title.toLowerCase().includes(filterSongs.filterSongs) ||
        song.artist.toLowerCase().includes(filterSongs.filterSongs)
    )
  }
}

export default connect(mapStateToProps, null)(SongList)
