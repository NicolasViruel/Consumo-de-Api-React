import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const Navegacion =() => {
  return (
    <Navbar bg="light" expand="md">
      <Container fluid>
        <Navbar.Brand>Web Peliculas</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav href="#home">
              <Link to="/"className='nav-link'>Home</Link>
            </Nav>
            <Nav href="#home">
              <Link to="/estrenos"className='nav-link' >Estrenos</Link>
            </Nav>
            <Nav href="#home">
              <Link to="/search"className='nav-link' >Buscador</Link>
            </Nav>
            <Nav href="#home">
              <Link to="/popular"className='nav-link' >Mas Vistas</Link>
            </Nav>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navegacion