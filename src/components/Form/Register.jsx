import React, { Component } from 'react'
import Header from '../Header'
class Register extends Component {
  handleChange (e) {
    // console.log(e.target.name, e.target.value)
  }

  render () {
    return (
      <div>
        <Header />
        <div className='signin container'>
          <form className='form-signin'>
            <h2 className='form-signin-heading'>Please sign up</h2>
            <br />
            <label className='sr-only'>Name</label>
            <input
              type='name'
              name='name'
              onChange={this.handleChange}
              id='inputName'
              className='form-control'
              placeholder='Name'
              required
            />
            <br />
            <label className='sr-only'>Email address</label>
            <input
              type='email'
              name='email'
              onChange={this.handleChange}
              id='inputEmail'
              className='form-control'
              placeholder='Email address'
              required
            />
            <br />
            <label className='sr-only'>Account ID :</label>
            <input
              type='ID'
              name='ID'
              onChange={this.handleChange}
              id='inputID'
              className='form-control'
              placeholder='Account ID :'
              required
            />
            <br />
            <label className='sr-only'>Password</label>
            <input
              type='password'
              name='password'
              onChange={this.handleChange}
              id='inputPassword'
              className='form-control'
              placeholder='Password'
              required
            />
            <br />
            <button className='btn btn-lg btn-primary btn-block' onClick={this.handleSignUp} type='button'>Sign up</button>
          </form>
        </div>
      </div>
    )
  }
}
export default Register
