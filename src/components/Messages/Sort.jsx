import { NavDropdown } from 'react-bootstrap'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../../actions/Messages/Messages'

class Sort extends Component {
  constructor (props) {
    super(props)
    this.state = {
      sort: {
        By: '',
        Value: ''
      }
    }
    this.handleSort = this.handleSort.bind(this)
  }

  handleSort (sortBy, sortValue) {
    this.props.onSort({ sortBy, sortValue })
    this.setState({
      sort: {
        By: sortBy,
        Value: sortValue
      }
    })
  }

  render () {
    const { sort } = this.state
    return (
      <div className='sort'>
        <NavDropdown title='Sắp xếp'>
          <NavDropdown.Item
            className={(sort.By === 'name' && sort.Value === 1) ? 'sort_selected' : ''}
            onClick={() => this.handleSort('name', 1)}
          >
            <span className='fa fa-sort-alpha-asc pr-5'>Tên A-Z</span>
          </NavDropdown.Item>
          <NavDropdown.Item
            className={(sort.By === 'name' && sort.Value === -1) ? 'sort_selected' : ''}
            onClick={() => this.handleSort('name', -1)}
          >
            <span className='fa fa-sort-alpha-desc pr-5'>Tên Z-A
            </span>
          </NavDropdown.Item>
          <NavDropdown.Item
            className={(sort.By === 'status' && sort.Value === 1) ? 'sort_selected' : ''}
            onClick={() => this.handleSort('status', 1)}
          >
            Status Active
          </NavDropdown.Item>
          <NavDropdown.Item
            className={(sort.By === 'status' && sort.Value === -1) ? 'sort_selected' : ''}
            onClick={() => this.handleSort('status', -1)}
          >
            Status Hidden
          </NavDropdown.Item>
        </NavDropdown>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  // console.log(state.messages.formEditing);
  return {

  }
}
const mapDispatchToProps = (dispatch, props) => {
  return {
    onSort: (sort) => {
      dispatch(actions.sortMessage(sort))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sort)
