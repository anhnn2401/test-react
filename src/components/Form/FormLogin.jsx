/* global alert */
import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import * as actions from '../../actions/Messages/Messages'
// import { instanceOf } from 'prop-types';
import { withCookies } from 'react-cookie'
import PropTypes from 'prop-types'
import Header from '../Header/Header'

class FormLogin extends Component {
  // static propTypes = {
  //   cookies: instanceOf(Cookies).isRequired
  // };

  constructor (props) {
    super(props)
    const { cookies } = props
    this.state = {
      token: cookies.get('token') || '',
      ID: '',
      password: ''
      // formErrors: {ID: '', password: ''},
      // IDValid: false,
      // passwordValid: false,
      // formValid: false
    }
    this.handleChangeID = this.handleChangeID.bind(this)
    this.handleChangePassword = this.handleChangePassword.bind(this)
    this.handleSignIn = this.handleSignIn.bind(this)
  }

  handleChangeID (event) {
    const value = event.target.value
    const name = event.target.name
    this.setState({
      [name]: value
    })
  }

  handleChangePassword (event) {
    const value = event.target.value
    const name = event.target.name
    this.setState({
      [name]: value
    })
  }

  async handleSignIn (e) {
    e.preventDefault()
    // alert('ID is ' + this.state.ID + ' Password is ' + this.state.password);
    const { cookies } = this.props
    // this.props.onSubmitForm(this.state)
    if (this.state.ID === 'admin' && this.state.password === 'admin') {
      await cookies.set('token', 'dangnhap', { path: '/' })
      this.setState({ token: 'dangnhap' })
      // this.props.history.push("/messages");
      console.log(this.props.history)
      this.props.history.goBack()
      // return <Redirect to='/messages' />
    } else {
      alert('sai thông tin đăng nhập')
    }
    // console.log(this.state);
  }
  // onSubmitFomr =(login) => {
  //   login.preventDefault();
  //   console.log(this.state);
  //   this.props.onSubmitForm(this.state)
  //   // const [cookies, setCookie] = useCookies(['name']);
  //   // setCookie('account', this.state, { path: '/' })

  //   // this.onSubmitFomr(this.state)
  // }
  render () {
    // console.log(this.state, typeof this.state.token);
    return (
      <div>
        <Header />
        <div className='container form-login'>
          <h1 className='d-flex justify-content-center'>Please login account</h1>
          <Form
            className='form-login'
            onSubmit={this.handleSignIn}
          >
            <Form.Group controlId='formGroupEmail'>
              <br />
              <Form.Label className='label-form'>Enter your account</Form.Label>
              <Form.Control
                name='ID'
                type='account'
                placeholder='Enter your account'
                // onChange={(e)=>this.onChangeID(e.target.value)}   //mở quản lí trên app
                onChange={this.handleChangeID}
              />
            </Form.Group>
            <Form.Group controlId='formGroupPassword'>
              <Form.Label className='label-form'>Enter your password</Form.Label>
              <Form.Control
                name='password'
                type='password'
                placeholder='Password'
                onChange={this.handleChangePassword}
                // onChange={()=>()=>this.props.handleNameChange()}
              />
            </Form.Group>
            <Button
              variant='primary'
              type='submit'
            >
              Login
            </Button>
          </Form>
        </div>
      </div>
    )
  }
}

FormLogin.propTypes = {
  // cookies: String.isRequired
  cookies: PropTypes.object
}

const mapStateToProps = (state) => {
  // console.log(state.messages.account);
  return {
    account: state.messages.account
    // isDisplay : state.messages.isDisplayForm
  }
}
const mapDispatchToProps = (dispatch, props) => {
  return {
    onSubmitForm: (data) => {
      dispatch(actions.submitLogin(data))
    }
  }
}

export default withCookies(connect(mapStateToProps, mapDispatchToProps)(FormLogin))
