import React, { Component } from "react";
import { Navbar, Container, Nav, Row } from "react-bootstrap";
import logo from "./logo512.png";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../pages/Home"
import News from "../pages/News"
import Contacts from "../pages/Contacts"
import Sale from "../pages/Sale"


export default class Header extends Component {
  render() {
    return (
      <>
        <Navbar collapseOnSelect expand="md" bg="light" variant="light">
          <Container className="justify-content-md-center py-3">
            <Row>
              <Navbar.Brand href="/">
                <img
                  src={logo}
                  height="30"
                  width="30"
                  className="d-inline-block align-top"
                  alt="logo"
                /> ИНФОТЕХ
            </Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                  <Nav.Link href="/"> Главная </Nav.Link>
                  <Nav.Link href="/news"> Новости </Nav.Link>
                  <Nav.Link href="/contacts"> Контакты </Nav.Link>
                  <Nav.Link href="/sale"> Каталог </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Row>
          </Container>
        </Navbar>

        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/news" component={News} />
            <Route exact path="/contacts" component={Contacts} />
            <Route exact path="/sale" component={Sale} />
          </Switch>
        </Router>

      </>
    );
  }
}
