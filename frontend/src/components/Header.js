import React, { Component } from "react";
import { Navbar, Nav, Container, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';

export class Header extends Component {
  render() {
    return (
      <header>
        <Navbar bg="dark" variant="dark" expand="lg">
          <Container>
            <Navbar.Brand href="/">ProShop</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                <Nav.Link href="/cart">
                    <i className="fas fa-shopping-cart"></i> Cart
                </Nav.Link>
                <Nav.Link href="/login">
                    <i className="fas fa-user"></i> Sign In
                </Nav.Link>
                </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    );
  }
}

export default Header;
