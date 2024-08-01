import React, { useState } from 'react';
import { Navbar, Nav, NavDropdown, Container, Button } from 'react-bootstrap';
import voitixLogo from "../assets/images/brand/voitix-logo.png";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('Home');

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
    document.body.classList.toggle('mobile-nav-active', !isNavOpen);
  };

  const handleItemClick = (item) => {
    setActiveItem(item);
    // Close the navigation if open in mobile view
    if (isNavOpen) {
      toggleNav();
    }
  };

  return (
    <header id="header" className="header fixed-top d-flex align-items-center">
      <Container fluid className="container-xl d-flex align-items-center justify-content-between">
        <Navbar expand="lg" className="w-100">
          <Navbar.Brand href="https://voitix.azacloud.com/en/" className="d-flex align-items-center">
            <img width={100} src={voitixLogo} alt="Voitix" />
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className="mobile-nav-toggle"
            onClick={toggleNav}
          >
            <i className={`bi ${isNavOpen ? 'bi-x-circle' : 'bi-list'}`}></i>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav" className={isNavOpen ? 'show' : ''}>
            <Nav className="ml-auto">
              <Nav.Link
                href="./#"
                className={activeItem === 'Home' ? 'active' : ''}
                onClick={() => handleItemClick('Home')}
              >
                Home
              </Nav.Link>
              <Nav.Link
                href="./#about"
                className={activeItem === 'Features' ? 'active' : ''}
                onClick={() => handleItemClick('Features')}
              >
                Features
              </Nav.Link>
              <Nav.Link
                href="./#faq"
                className={activeItem === 'FAQs' ? 'active' : ''}
                onClick={() => handleItemClick('FAQs')}
              >
                FAQs
              </Nav.Link>
              <Nav.Link
                href="./#pricing"
                className={activeItem === 'Pricing' ? 'active' : ''}
                onClick={() => handleItemClick('Pricing')}
              >
                Pricing
              </Nav.Link>
              <Nav.Link
                href="./#accounting"
                className={activeItem === 'Accounting' ? 'active' : ''}
                onClick={() => handleItemClick('Accounting')}
              >
                Accounting
              </Nav.Link>
              <NavDropdown
                title={
                  <>
                    Learn & Help <i className="bi bi-chevron-down"></i>
                  </>
                }
                id="support-dropdown"
                className="dropdown"
              >
                <NavDropdown.Item
                  href="#blogs"
                  className={activeItem === 'Blogs' ? 'active' : ''}
                  onClick={() => handleItemClick('Blogs')}
                >
                  Blogs
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="#documentation"
                  className={activeItem === 'Documentation' ? 'active' : ''}
                  onClick={() => handleItemClick('Documentation')}
                >
                  Documentation
                </NavDropdown.Item>
              </NavDropdown>
              <Button className="sign-in-btn" href="https://voitix.azacloud.com/login">
                Sign In / Sign Up
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </header>
  );
};

export default Header;
