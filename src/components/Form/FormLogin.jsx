import React, { Component } from 'react';
import { Form } from 'react-bootstrap';
class FormLogin extends Component {
  render() {
    return (
      <div className="row container form-login">
        <Form className="col-6 form-login">
          <Form.Group controlId="formGroupEmail">
            <Form.Label className="label-form">Enter your account</Form.Label>
            <Form.Control type="account" placeholder="Enter your account" />
          </Form.Group>
          <Form.Group controlId="formGroupPassword">
            <Form.Label className="label-form">Enter your password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
        </Form>
      </div>
    );
  }
}
export default FormLogin;