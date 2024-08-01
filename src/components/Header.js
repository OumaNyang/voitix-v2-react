import React, { useState } from 'react';
import { Navbar, Nav, NavDropdown, Container, Button } from 'react-bootstrap';
import voitixLogo from "../assets/images/brand/voitix-logo.png";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleItemClick = () => {
    setIsNavOpen(false);
    setIsDropdownOpen(false);
  };

  return (
    <header id="header" className={`header fixed-top d-flex align-items-center ${isNavOpen ? 'mobile-nav-active' : ''}`}>
      <Container fluid className="container-xl d-flex align-items-center justify-content-between">
        <Navbar expand="lg" className="w-100">
          <Navbar.Brand href="https://voitix.azacloud.com/en/" className="d-flex align-items-center">
            <img width={100} src={voitixLogo} alt="Voitix" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="mobile-nav-toggle" onClick={toggleNav}>
            <i className={`bi ${isNavOpen ? 'bi-x-circle' : 'bi-list'}`}></i>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav" className={isNavOpen ? 'show' : ''}>
            <Nav className="ml-auto">
              <Nav.Link href="./#" onClick={handleItemClick}>Home</Nav.Link>
              <Nav.Link href="./#about" onClick={handleItemClick}>Features</Nav.Link>
              <Nav.Link href="./#faq" onClick={handleItemClick}>FAQs</Nav.Link>
              <Nav.Link href="./#pricing" onClick={handleItemClick}>Pricing</Nav.Link>
              <Nav.Link href="./#accounting" onClick={handleItemClick}>Accounting</Nav.Link>
              <NavDropdown
                title={
                  <>
                    Learn & Help &nbsp; <i className="bi bi-chevron-down"></i>
                  </>
                }
                id="support-dropdown"
                className={`dropdown ${isDropdownOpen ? 'show' : ''}`}
                onClick={toggleDropdown}
              >
                <NavDropdown.Item href="#blogs" onClick={handleItemClick}>
                  Blogs
                </NavDropdown.Item>
                <NavDropdown.Item href="#documentation" onClick={handleItemClick}>
                  Documentation
                </NavDropdown.Item>
              </NavDropdown>
              <Button className="sign-in-btn" href="https://voitix.azacloud.com/login">Sign In / Sign Up</Button> 
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </header>
  );
};

export default Header;
