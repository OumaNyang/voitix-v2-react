import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

const Header = () => {
  return (
    <header className="header fixed-top">
      <Container fluid>
        <Navbar expand="lg" variant="light">
          <Navbar.Brand href="https://voitix.azacloud.com/en/">
            <img src="https://voitix.azacloud.com/assets/images/logos/Voitix_logonobg.png" alt="Voitix" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="#home" className="active">Home</Nav.Link>
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#faq">FAQS</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
              <Nav.Link href="#support">Support</Nav.Link>
              <Nav.Link href="https://voitix.azacloud.com/login" className="get-a-quote">Sign In / Sign Up</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </header>
  );
};

export default Header;
