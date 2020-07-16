import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'
import FormAddMessages from '../Messages/FormAddMessage'
import ListMessages from '../Messages/ListMessages'
import Search from '../Messages/Search'
import Sort from '../Messages/Sort'
import Header from '../Header/Header'
import { connect } from 'react-redux'
import { withCookies } from 'react-cookie'
import * as actions from '../../actions/Messages/Messages'

class MessagesInfo extends Component {
  constructor (props) {
    super(props)
    this.handleToggleFormMessage = this.handleToggleFormMessage.bind(this)
  }

  handleToggleFormMessage () {
    this.props.onToggleFormMessage()
    this.props.onClearData({
      id: '',
      name: '',
      content: '',
      status: 'an'
    })
  }

  render () {
    const { isDisplay } = this.props
    return (
      <div>
        <Header />
        <h1 className='d-flex justify-content-center'>Tin nhắn</h1>
        <div className='row control-button'>
          <Button
            onClick={this.handleToggleFormMessage}
          >{isDisplay ? 'Đóng' : 'Thêm tin nhắn'}
          </Button>
          <Search />
          <Sort />
        </div>
        <div className='row'>
          <div className={isDisplay ? 'col-4' : 'hidden'}>
            <FormAddMessages />
          </div>
          <div className={isDisplay ? 'col-8' : 'col-12'}>
            <div className='panel panel-success'>
              <div className='panel-heading'>
                <h1
                  className='panel-title'
                  style={{ textAlign: 'center' }}
                >Danh sách tin nhắn
                </h1>
              </div>
              <div className='panel-body'>
                <ListMessages />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isDisplay: state.messages.isDisplayForm
  }
}
const mapDispatchToProps = (dispatch, props) => {
  return {
    onToggleFormMessage: () => {
      dispatch(actions.toggleForm())
    },
    onClearData: (dataListMessage) => {
      dispatch(actions.editMessage(dataListMessage))
    }
  }
}
export default withCookies(connect(mapStateToProps, mapDispatchToProps)(MessagesInfo))
