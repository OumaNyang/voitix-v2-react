import React from 'react';
import visaLogo from '../assets/images/brand/card_decals.png'; 
 // Adjust the path as needed
import { Col, Container, Row } from 'react-bootstrap';

const Footer = () => {
  return (
     <section id="footer" className="footer">
      <Container className="container">

        <Row className="row gy-4">
          {/* Logo and Company Information */}
          <Col className="footer-info">
            <h2 className="d-flex align-items-center">
               VOITIX 
            </h2>
            <p>Experience a streamlined purchasing process with our invoicing software. We provide solutions that simplify your workflow, centralize your purchases ensuring efficiency and accuracy </p>
            <div className="d-flex m-auto mt-4">
              <img height={50} className="p-1" src={visaLogo} alt="VISA" />
            </div>
          </Col>

          {/* Useful Links */}
          <Col className="footer-links">
            <h3>Legal</h3>
            <ul>
            <li><a href="./partnership">Partner With Us</a></li>
            <li><a href="./terms-of-service">Terms of Service</a></li>
            <li><a href="./data-privacy">Data Privacy Policy</a></li>
              <li><a href="./cookies-privacy">Cookies GDPR Policy</a></li>
            </ul>
          </Col>

          {/* Contact Information */}
          <Col className="footer-contact text-center text-md-start">
            <h3>Contact Us</h3>
            <h6><strong>Email:</strong> support@azacloud.com<br /></h6>
            <div className="social-links d-flex mt-4">
              <a target="_blank" rel="noopener noreferrer" href="https://x.com/" className="twitter"><i className="bi bi-twitter-x"></i></a>
              <a target="_blank" rel="noopener noreferrer" href="https://linkedin.com/" className="linkedin"><i className="bi bi-linkedin"></i></a>
              <a target="_blank" rel="noopener noreferrer" href="https://youtube.com/" className="youtube"><i className="bi bi-youtube"></i></a>
              <a target="_blank" rel="noopener noreferrer" href="https://wa.me/+254791692432?text=Hello%am%from%the%website.%I%need%Voitix%from%support" className="whatsapp"><i className="bi bi-whatsapp"></i></a>
            </div>
          </Col>
        </Row>
      </Container>
     
      <div className="container mt-4">
        {/* Copyright and Credits */}
        <div className="copyright">
          &copy; {new Date().getFullYear()} Voitix. Version 2.0
        </div>
        <div className="credits">
          A product of <a target="_blank" rel="noopener noreferrer" href="https://azacloud.com/">Azacloud Solutions</a>
        </div>
      </div>

    <a href="#./" className="scroll-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a>

    <div id="preloader"></div>

    <div className="warning-alert" id="copyWarning">
    Copying content from this page is not allowed.
    </div> 
    </section>
     );
 
};

export default Footer;
 