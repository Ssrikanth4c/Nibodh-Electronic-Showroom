import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import {Navbar, Nav,NavbarBrand } from 'react-bootstrap';

/**
* @author
* @class Navbar
**/

class NavBar extends Component {
 state = {}
 render() {
  return(
   <>
   <Navbar collapseOnSelect  expand='md' bg="dark" variant="light">
        <NavbarBrand>
            <h3>
                <span>Nibodh</span>-Electrical
            </h3>
        </NavbarBrand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
                <Link to='/' className='mx-3 h4 text-decoration-none' >Home</Link>
                <Link to='/product' className='mx-3 h4 text-decoration-none' >Product</Link>
                <Link to='/contact' className='mx-3 h4 text-decoration-none'>Contact Us</Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
   </>
    )
   }
 }

export default NavBar;