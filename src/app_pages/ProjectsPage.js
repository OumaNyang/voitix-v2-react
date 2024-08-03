import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Footer from '../components/Footer';

const ProjectsPage = () => {
 
  return (
    <>
      <section id="products" className="products">
        <Container data-aos="fade-up">
          <Row className="justify-content-center" data-aos="fade-up" data-aos-delay="200">
            <Col lg={6} className="text-center">
       
              <h5>Oops! This Page Could Not Be Found</h5>
                <p>The page you are looking for might have been moved or deleted.</p>
               
            </Col>
          </Row>
        </Container>
      </section>
      <Footer />
    </>
  );
};

export default ProjectsPage;
