import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import React from "react";
import Logo from "./logo";



export default function Page1() {
  return (
    <Navbar bg="light" expand="lg">
      <Logo />
      <Container>
        <Navbar.Brand href="/" >짱구 Shop</Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/Albums">Movies</Nav.Link>
       
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}


