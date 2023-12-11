import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';


function Navigation() {
  return (
    <div>
          
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home"><Link to='/home'>Home</Link></Nav.Link>
            <Nav.Link href="#about"><Link to='/about'>About</Link></Nav.Link>
            <Nav.Link href="#contact"><Link to='/contact'>Contact</Link></Nav.Link>

          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default Navigation