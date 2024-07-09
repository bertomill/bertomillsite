// src/components/NavBar.js
import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../styles/NavBar.css';
import headshot from '../assets/headshot.jpeg'; // Ensure this path is correct

const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="navbar-custom">
      <div className="navbar-left">
        <Link to="/">
          <img src={headshot} alt="Headshot" className="nav-headshot" />
        </Link>
        <Navbar.Brand as={Link} to="/">Berto</Navbar.Brand>
      </div>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="navbar-collapse">
        <Nav className="ml-auto navbar-nav-custom">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/projects">Projects</Nav.Link>
          <Nav.Link as={Link} to="/writing">Writing</Nav.Link>
          <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
