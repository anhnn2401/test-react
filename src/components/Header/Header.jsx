import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
// import Form from 'react-bootstrap/Form';
// import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'

class Header extends Component {
  render () {
    return (
      <Container fluid>
        <Navbar bg='primary' variant='dark'>
          <Navbar.Brand href='/'>Navbar</Navbar.Brand>
          <Nav className='mr-auto'>
            <Link className='nav-link' to='/'>Home</Link>
            <Link className='nav-link' to='#features'>Features</Link>
            <Link className='nav-link' to='/messages'>Messages</Link>
            <NavDropdown title='Dropdown' id='collasible-nav-dropdown'>
              <NavDropdown.Item href='#action/3.1'>Action</NavDropdown.Item>
              <NavDropdown.Item href='#action/3.2'>Another action</NavDropdown.Item>
              <NavDropdown.Item href='#action/3.3'>Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href='#action/3.4'>Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          {/* <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-light">Search</Button>
          </Form> */}
          <Link
            to='login'
          >
            <Button variant='primary'>Login</Button>
          </Link>
          <Link
            to='register'
          >
            <Button variant='primary'>Register</Button>
          </Link>
        </Navbar>
      </Container>
    )
  }
}
export default Header
