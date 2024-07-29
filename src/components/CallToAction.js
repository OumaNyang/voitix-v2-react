import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const CallToAction = () => {
  return (
    <section id="cta" className="cta">
      <Container data-aos="zoom-out">
        <Row className="justify-content-center">
          <Col lg={8} className="text-center">
            <h3>Business Ultimate Procurement Solution</h3>
            <p>Streamline your operations, enhance efficiency, and elevate your business with Voitix – the all-in-one solution for managing quotations, invoices, purchase orders, and delivery notes. Experience a seamless and automated workflow that empowers your team to focus on what matters most.</p>
            <Button className="cta-btn" href="#">Get Started with Voitix</Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default CallToAction;
