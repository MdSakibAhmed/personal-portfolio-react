import React from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ProfileImg from "../../../images/Untitled-fi-01-owgso2mbdg98asfxutp95jlk7djglijb5si8gy1l9w.png";
import "./HeaderNavbar.css"


const HeaderNavbar = () => {
    return (

<Navbar bg="dark" className="p-4" expand="lg">
  <Navbar.Brand as={Link} to="/"><img src={ProfileImg} alt=''/></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto text-white mr-5">
      <Nav.Link  className="text-white nav-text mr-3" as={Link} to="/">Home</Nav.Link>
      <Nav.Link className="text-white nav-text mr-3" as={Link} to="/skills">Skills</Nav.Link>
      <Nav.Link className="text-white nav-text mr-3" as={Link} to="/projects">Projects</Nav.Link>
      <Nav.Link className="text-white nav-text mr-3" as={Link} to="/blogs">Blogs</Nav.Link>
      <Nav.Link className="text-white nav-text mr-3" href="https://drive.google.com/file/d/16p-e1xOuu9Zm1j8nS8bUWy3xgn282D01/view?usp=sharing" target="_blank">Download Resume</Nav.Link>
      <Nav.Link className="text-white nav-text mr-3" as={Link} to="/contact">Contact Me</Nav.Link>
     
    </Nav>
    
  </Navbar.Collapse>
</Navbar>
    );
};

export default HeaderNavbar;