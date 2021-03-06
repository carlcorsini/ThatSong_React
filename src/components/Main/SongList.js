import _ from 'lodash'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Moment from 'react-moment'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { Table, Icon } from 'semantic-ui-react'
import { fetchFriend } from '../../redux/actions/auth_actions'

// this component is a sortable table of songs pulled in from that-song-backend.

class SongList extends Component {
  // initial state set for sortable table columns
  state = {
    column: null,
    data: [],
    direction: null
  }
  // below prevents bug from conditional rendering based on props
  componentWillReceiveProps(nextProps) {
    if (nextProps.data !== this.props.data) {
      this.setState({ data: nextProps.data })
    }
  }

  componentDidMount() {
    // setting state with data from props (I have read is a no-no in react but I am struggling to find another solution)
    this.setState({ data: this.props.data })
  }

  // handle sort method which is bound to on click of each column header
  handleSort = clickedColumn => () => {
    const { column, direction, data } = this.state
    // if this is a new column clicked sort by it's attribute
    if (column !== clickedColumn) {
      this.setState({
        column: clickedColumn,
        data: _.sortBy(data, [clickedColumn]),
        direction: 'ascending'
      })

      return
    }
    // otherwise reverse order of current sort
    this.setState({
      data: data.reverse(),
      direction: direction === 'ascending' ? 'descending' : 'ascending'
    })
  }

  // method that handles clicking on another user's username
  handleClickFriend = id => {
    this.props.fetchFriend(id, this.props.history)
  }

  render() {
    const { column, direction, data } = this.state

    return (
      //notice each <Table.HeaderCell> has this.handleSort('column-name') bound to onClick.
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
            <Table.HeaderCell style={{ textAlign: 'center' }}>
              Timestamp
            </Table.HeaderCell>
            <Table.HeaderCell style={{ textAlign: 'center' }}>
              Source
            </Table.HeaderCell>
            <Table.HeaderCell style={{ textAlign: 'center' }}>
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
        {/* map through data and create rows, each row with specific funtionality depending on data type  */}
        <Table.Body>
          {_.map(
            data,
            ({
              id,
              user_id,
              title,
              artist,
              timestamp,
              url,
              username,
              created_at
            }) => (
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
                    <Icon fitted size="large" name="copy" />
                  </CopyToClipboard>
                </Table.Cell>
                <Table.Cell
                  selectable
                  onClick={e => {
                    this.handleClickFriend(user_id)
                  }}
                  style={{ textAlign: 'center', cursor: 'pointer' }}>
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

// data received for component is filtered using redux and "FilterSongs" component.
const mapStateToProps = ({ songs, filterSongs, history }) => {
  return {
    data: songs.data.filter(
      song =>
        song.title.toLowerCase().includes(filterSongs.filterSongs) ||
        song.artist.toLowerCase().includes(filterSongs.filterSongs) ||
        song.username.toLowerCase().includes(filterSongs.filterSongs)
    )
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ fetchFriend }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(SongList)
