import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Footer from '../components/Footer';

const BlogsPage = () => {
 
  return (
     <>
    <section id="blogs" className="blogs">
      <Container data-aos="fade-up">
        <div className="section-header">
          <span>Blogs</span>
          <h2>Blogs</h2>
        </div>
        <Row className="justify-content-center" data-aos="fade-up" data-aos-delay="200">
          <Col lg={10}>
          <p class ="text-center">Lorem Ipsum</p>
          
          </Col>
        </Row>
      </Container>
    </section>
    <Footer /> 
    </>
  );
};

export default BlogsPage;
