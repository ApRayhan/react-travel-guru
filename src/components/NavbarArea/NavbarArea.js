import React, { useContext } from 'react';
import { Button, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { userContext } from '../../App';
import logoWhite from '../../logoWhite.png';
import './NavbarArea.css';

const NavbarArea = () => {
  const [loggedInUser, setLoggedInUser] = useContext(userContext);
  return (
    <div className="nav_bar">
      <Navbar bg="default" variant="light" fixed="top">
        <Navbar.Brand href="#home"><img src={logoWhite} alt=""/></Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
        {
          loggedInUser.email ? 'Welcome, ' + loggedInUser.name : <Link to="/login" className="loginBtn">Login</Link>
        }
      </Navbar>
    </div>
  );
};

export default NavbarArea;