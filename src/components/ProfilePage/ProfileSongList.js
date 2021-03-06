import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Moment from 'react-moment'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import FadeIn from 'react-fade-in'
import { Table, Icon } from 'semantic-ui-react'
import { destroySong } from '../../redux/actions/songs'
import _ from 'lodash'

//ProfileSongList display's the logged-in user's song data with certain columns specific to the user page. The user page includes a delete button which is currently not synced up with redux although functional
class ProfileSongList extends Component {
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

  componentDidMount() {
    this.setState({ data: this.props.data })
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

  handleDelete = id => {
    this.props.destroySong(id)
  }

  render() {
    const { column, direction, data } = this.state

    return (
      <FadeIn>
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
                sorted={column === 'timestamp' ? direction : null}>
                Timestamp
              </Table.HeaderCell>
              <Table.HeaderCell
                style={{ textAlign: 'center' }}
                sorted={column === 'source' ? direction : null}>
                Source
              </Table.HeaderCell>
              <Table.HeaderCell
                style={{ textAlign: 'center' }}
                sorted={column === 'url' ? direction : null}>
                URL
              </Table.HeaderCell>
              <Table.HeaderCell
                style={{ textAlign: 'center' }}
                sorted={column === 'notes' ? direction : null}
                onClick={this.handleSort('notes')}>
                Note
              </Table.HeaderCell>
              <Table.HeaderCell
                style={{ textAlign: 'center' }}
                sorted={column === 'created_at' ? direction : null}
                onClick={this.handleSort('created_at')}>
                Created
              </Table.HeaderCell>
              <Table.HeaderCell style={{ textAlign: 'center' }}>
                Delete
              </Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {_.map(
              data,
              ({ id, title, artist, timestamp, url, notes, created_at }) => (
                <Table.Row key={id}>
                  <Table.Cell style={{ textAlign: 'center' }}>
                    {title}
                  </Table.Cell>
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
                  <Table.Cell style={{ textAlign: 'center' }}>
                    {notes}
                  </Table.Cell>
                  <Table.Cell style={{ textAlign: 'center' }}>
                    <Moment fromNow>{created_at}</Moment>
                  </Table.Cell>
                  <Table.Cell
                    selectable
                    onClick={e => {
                      this.handleDelete(id)
                    }}
                    style={{ textAlign: 'center', cursor: 'pointer' }}>
                    <Icon name="x" />
                  </Table.Cell>
                </Table.Row>
              )
            )}
          </Table.Body>
        </Table>
      </FadeIn>
    )
  }
}
const mapStateToProps = ({ auth, filterSongs }) => {
  if (auth.user.userSongs) {
    return {
      data: auth.user.userSongs.filter(
        song =>
          song.title.toLowerCase().includes(filterSongs.filterSongs) ||
          song.artist.toLowerCase().includes(filterSongs.filterSongs)
      )
    }
  } else {
    return {}
  }
}

function mapDispatchToProps(dispatch) {
  return {
    destroySong: bindActionCreators(destroySong, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileSongList)
