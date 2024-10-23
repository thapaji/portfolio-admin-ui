import React from "react";
import { Button, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Form, Link } from "react-router-dom";

export const Header = () => {
  return (
    <Navbar expand="md" className="shadow mb-5">
      <Container fluid className="mx-5">
        <Link className="navbar-brand" to="#">
          Portfolio Admin Panel
        </Link>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${false}`} />
        <Navbar.Offcanvas id={`offcanvasNavbar-expand-${false}`} aria-labelledby={`offcanvasNavbarLabel-expand-${false}`} placement="end">
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${false}`}>MENU</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Link to="/dashboard" className="nav-link">
                Dashboard
              </Link>
              <Link to="/about" className="nav-link">
                About
              </Link>
              <Link to="/categories" className="nav-link">
                Categories
              </Link>
              <Link to="/projects" className="nav-link">
                Projects
              </Link>
              <Link to="/messages" className="nav-link">
                Messages
              </Link>
              <Button variant="outline-primary">Logout</Button>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};
