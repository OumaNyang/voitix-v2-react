import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import heroImage from '../assets/images/voitix-bg.png';  

const Hero = () => {
  return (
    <section id="hero" className="hero d-flex align-items-center">
      <Container>
        <Row className="gy-4 d-flex justify-content-between">
          <Col lg={6} className="order-2 order-lg-1 d-flex flex-column justify-content-center">
            <h2 data-aos="fade-up">
              Automate Your Entire Purchasing Process with 
              <span>Invoicing Software</span> that Streamlines Your Processes
            </h2>
            <p data-aos="fade-up" data-aos-delay="100">
              Experience a streamlined purchasing process with our invoicing software.
              We provide solutions that simplify your workflow, centralize your purchases ensuring efficiency and accuracy.
            </p>
          </Col>
          <Col lg={5} className="order-1 order-lg-2 hero-img" data-aos="zoom-out">
            <img width={10} src={heroImage} className="img-fluid mb-3 mb-lg-0" alt="Illustration" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
