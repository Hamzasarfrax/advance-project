import React from 'react'
import {NavLink } from "react-router-dom";
import {Navbar, Container, NavDropdown, Nav  } from 'react-bootstrap';
import nav from '../Style/nav.css'
import Carsol from './Carsol'



// import Ham from '../Ham.css'
const Navs = () => {
  return (
   
< div className='hamza'>

<Navbar  expand="lg" className='navbar mx-5 my-3'>
  <Container>
    {/* <img src={logo} href="#home"/>  */}
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <div className=''>
      <Nav className="navlinks  ">
        <NavLink to="/" className="home hov-data">Home</NavLink>
        <NavLink to="Visa"  className="visa hov-data" >Visa</NavLink>
        <NavLink to="Hot"  className="hot hov-data" >HOT deals</NavLink>
        <NavLink to="Travel"  className="travel hov-data" >Travel Insurance</NavLink>
        <NavLink to="Contact"  className="contact hov-data" >Contact</NavLink>
      
        {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown> */}
      </Nav>
      </div>
    </Navbar.Collapse>
  </Container>
</Navbar>

<Carsol/>

</div>
 
    
   
  )
}

export default Navs;