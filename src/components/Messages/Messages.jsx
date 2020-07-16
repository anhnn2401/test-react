import React, { Component } from 'react'
// import FormAddMessages from './FormAddMessage';
// import ListMessages from './ListMessages';
// import Search from './Search';
// import Sort from './Sort';
// import { Button } from 'react-bootstrap';
import { connect } from 'react-redux'
import * as actions from '../../actions/Messages/Messages'
import MessagesInfo from '../MessagesInfo/MessagesInfo'
// import FormLogin from './../Form/FormLogin';
// import Header from './../Header/Header'
// import { instanceOf } from 'prop-types'
import PropTypes from 'prop-types'
import { withCookies } from 'react-cookie'

class Messages extends Component {
  constructor (props) {
    super(props)
    const { cookies } = props
    this.state = {
      accountAccess: cookies.get('token') || ''
    }
    // console.log(window.location)

    if (!cookies.get('token')) {
      const url = `/login?redirect=${window.location.pathname}`
      props.history.push(url)
    }
    this.handleChangeID = this.handleChangeID.bind(this)
    this.handleChangeID = this.handleChangeID.bind(this)
    this.handleToggleFormMessage = this.handleToggleFormMessage.bind(this)
    this.handleClearData = this.handleClearData.bind(this)
  }

  handleChangeID (account) {
    // const { cookies } = this.props;
    // cookies.set('account', {account}, { path: '/' });
    this.setState({ account })
  }

  componentDidMount () {
    // console.log('dismount',this.props);
    this.props.dispatch(actions.listAll())
  }

  handleClearData () {
    this.props.onClearData()
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
    return (
      <div>
        <MessagesInfo />
      </div>
    )
  }
}

Messages.propTypes = {
  // cookies: String.isRequired
  cookies: PropTypes.object
}

const mapStateToProps = (state) => {
  // console.log(typeof state.messages.account.ID);
  return {
    // loginToken: state.messages.account.ID,
    isDisplay: state.messages.isDisplayForm
  }
}
const mapDispatchToProps = (dispatch, props) => {
  return {
    dispatch: () => {},
    onToggleFormMessage: () => {
      dispatch(actions.toggleForm())
    },
    onClearData: (dataListMessage) => {
      dispatch(actions.editMessage(dataListMessage))
    },
    onCloseForm: () => {
      dispatch(actions.closeForm())
    }
  }
}
export default withCookies(connect(mapStateToProps, mapDispatchToProps)(Messages))
