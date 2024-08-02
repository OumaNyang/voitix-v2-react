import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';
 import notFoundImage from '../assets/images/404-error-page.png';  
const PageNotFound = () => {
  const navigate = useNavigate();
 
  return (
    <>
      <section id="page-not-found" className="page-not-found">
        <Container data-aos="fade-up">
          <Row className="justify-content-center" data-aos="fade-up" data-aos-delay="200">
            <Col lg={6} className="text-center">
              {/* <div className="section-header">
                <h2>Page Not Found</h2>
              </div> */}
              <img src={notFoundImage} alt="Disconnection" className="disconnection-image" />
              <h5>Oops! This Page Could Not Be Found</h5>
                <p>The page you are looking for might have been moved or deleted.</p>
                <Button variant="primary" onClick={() => navigate('/')}>
                  Go to Homepage
                </Button>
            </Col>
          </Row>
        </Container>
      </section>
      <Footer />
    </>
  );
};

export default PageNotFound;
