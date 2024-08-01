import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Footer from '../components/Footer';
import BreadCrumbSection from '../components/BreadcrumbSection';

const AccountingPage = () => {
 
return (
<>
<BreadCrumbSection/>
<section id="faq" className="faq">
<Container data-aos="fade-up">
<div className="section-header">
  <span>Accounting</span>
  <h2>Accounting</h2>
</div>
<Row className="justify-content-center" data-aos="fade-up" data-aos-delay="200">
  <Col lg={10}>
    <h5>Coming Soon</h5>
  </Col>
</Row>
</Container>
</section>
<Footer />
</>
);
};

export default AccountingPage;
