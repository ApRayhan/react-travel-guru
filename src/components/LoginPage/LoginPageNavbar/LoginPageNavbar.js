import React, { useContext } from 'react';
import { Button, Container, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { userContext } from '../../../App';
import logo from '../../../Logo.png';
import './LoginPageNavbar.css';

const LoginPageNavbar = () => {
  const [loggedInUser, setLoggedInUser] = useContext(userContext);
  return (
    <Container>
      <Navbar bg="default" variant="light">
        <Navbar.Brand className="logoArea" href="/home"><img src={logo} alt=""/></Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
        <Link to="/home" className="navItem">Home</Link>
        <Link to="/contact" className="navItem">Contact</Link>
        
        {
          loggedInUser.email ? 'Welcome, ' + loggedInUser.name : <Link to="/login" className="loginBtn navItem">Login</Link>
        }
      </Navbar>
    </Container>
  );
};

export default LoginPageNavbar;