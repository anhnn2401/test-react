import React, { Component } from 'react'
import { Form, FormControl } from 'react-bootstrap'
import { connect } from 'react-redux'
import * as actions from '../../actions/Messages/Messages'
class Search extends Component {
  constructor (props) {
    super(props)
    this.state = {
      keyword: ''
    }
    this.handleSearch = this.handleSearch.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleSearch (keyword) {
    keyword.preventDefault()
    this.props.onSearch(this.state.keyword)
  }

  handleChange (event) {
    event.preventDefault()
    const value = event.target.value
    this.setState({
      keyword: value
    })
  }

  render () {
    return (
      <div>
        {/* <input>
        </input> */}
        <Form
          inline
          onSubmit={this.handleSearch}
        >
          <FormControl
            type='text'
            placeholder='Nhập từ khóa...'
            className='mr-sm-2'
            name='keyword'
            onChange={this.handleChange}
          />
          <span className='input-group-btn'>
            <button
              className='btn btn-primary'
              type='button'
              onClick={this.handleSearch}
            >
              <span className='fa fa-search' />Tìm
            </button>
          </span>
        </Form>
        {/* <i className="fa fa-search">aa</i> */}
      </div>
    )
  }
}
// const mapStateToProps = (state) => {
//   return {
//   }
// }
const mapDispatchToProps = (dispatch, props) => {
  return {
    onSearch: (keyword) => {
      dispatch(actions.searchMessage(keyword))
    }
  }
}
export default connect(null, mapDispatchToProps)(Search)
