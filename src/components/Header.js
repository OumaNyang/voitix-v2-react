import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import voitixLogo from  "../assets/images/brand/voitix-logo.png";
const Header = () => {
  return (
  //   <header className="header fixed-top"> 
  //     <Container fluid> 
  //       <Navbar expand="lg" variant="light">
  //         <Navbar.Brand href="https://voitix.azacloud.com/en/">

  //         <img src={voitixLogo} alt="Voitix" />
  //         </Navbar.Brand>
  //         <Navbar.Toggle aria-controls="basic-navbar-nav" />
  //         <Navbar.Collapse id="basic-navbar-nav">
  //           <Nav className="ml-auto">
  //             <Nav.Link href="#home" className="active">Home</Nav.Link>
  //             <Nav.Link href="#features">Features</Nav.Link>
  //             <Nav.Link href="#faq">FAQS</Nav.Link>
  //             <Nav.Link href="#pricing">Pricing</Nav.Link>
  //             <Nav.Link href="#support">Support</Nav.Link>
  //             <Nav.Link href="https://voitix.azacloud.com/login" className="get-a-quote">Sign In / Sign Up</Nav.Link>
  //           </Nav>
  //         </Navbar.Collapse>
  //       </Navbar>
  //     </Container>
  //   </header>
    <header id="header" className="header d-flex align-items-center sticky-top">
    <div className="container-fluid container-xl d-flex align-items-center justify-content-between">

      <a href="https://voitix.azacloud.com/en/" className="logo d-flex align-items-center">
         <img src={voitixLogo} alt="Voitix" />

       </a>

      <i className="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
      <i className="mobile-nav-toggle mobile-nav-hide d-none  bi bi-x-circle"></i>
      <nav id="navbar" className="navbar">
        <ul>
          <li><a href="./#" className="active">Home</a></li>
          <li><a href="./#about">Features</a></li>
          <li><a href="./#faq">FAQS</a></li>
          <li><a href="./#pricing">Pricing</a></li>
          <li><a href="./#pricing">Acounting</a></li>
           <li className="dropdown"><a href="#support"><span>Learn & Help</span> <i className="bi bi-chevron-down dropdown-indicator"></i></a>
            <ul>
            <li><a href="#blogs">Blogs</a></li>
             <li><a  target="_blank" href="#documentation">Documentation</a></li>
            </ul>
          </li>
          <li><a className=" sign-in-btn" href="https://voitix.azacloud.com/login">Sign In / Sign Up</a></li>
        </ul>
      </nav> 

    </div>
  </header> 
  );
};

export default Header;
