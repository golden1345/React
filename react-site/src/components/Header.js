import React, { Component } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "./logo192.png";

export default class Header extends Component {
  render() {
    return (
      <>
        <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="/">
              <img
                src={logo}
                height="30"
                width="30"
                className="d-inline-block align-top"
                alt="logo"
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="/"> Главная </Nav.Link>
                <Nav.Link href="/about"> Новости </Nav.Link>
                <Nav.Link href="/contacts"> Контакты </Nav.Link>
                <Nav.Link href="/sale"> Каталог </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    );
  }
}
