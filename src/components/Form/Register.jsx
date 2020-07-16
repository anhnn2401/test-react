import React, { Component } from 'react'
class Register extends Component {
  render () {
    return (
      <div>
        <form className='form-signin'>
          <h2 className='form-signin-heading'>Please sign up</h2>
          <label for='inputName' className='sr-only'>Name</label>
          <input
            type='name'
            onChange={this.handleNameChange}
            id='inputName'
            className='form-control'
            placeholder='Name'
            required
            autofocus
          />
          <label for='inputEmail' className='sr-only'>Email address</label>
          <input
            type='email'
            onChange={this.handleEmailChange}
            id='inputEmail'
            className='form-control'
            placeholder='Email address'
            required
            autofocus
          />
          <label for='inputPassword' className='sr-only'>Password</label>
          <input
            type='password'
            onChange={this.handlePasswordChange}
            id='inputPassword'
            className='form-control'
            placeholder='Password'
            required
          />
          <button className='btn btn-lg btn-primary btn-block' onClick={this.handleSignUp} type='button'>Sign up</button>
        </form>
      </div>
    )
  }
}
export default Register
