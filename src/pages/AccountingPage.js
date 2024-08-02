import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import Footer from '../components/Footer';
import BreadCrumbSection from '../components/BreadcrumbSection';

const AccountingPage = () => {
  return (
    <>
      <Helmet>
        <title>Accounting and Payroll</title>
        <meta
          name="description"
          content="Voitix offers a comprehensive solution for managing accounting and payroll, providing tools for accurate financial tracking and payroll processing."
        />
        <meta
          name="keywords"
          content="Accounting, Payroll, Business Management, Voitix"
        />
        <meta name="author" content="Voitix" />
        <meta
          property="og:title"
          content="Accounting and Payroll - Voitix"
        />
        <meta
          property="og:description"
          content="Voitix provides a detailed system for handling your accounting and payroll needs, including invoicing, expense tracking, and payroll management."
        />
        <meta property="og:url" content="https://www.voitix.azacloud.com/accounting" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://www.voitix.azacloud.com/images/og-accounting.png"
        />
      </Helmet>
      <BreadCrumbSection />
      <section id="accounting" className="accounting">
        <Container data-aos="fade-up">
          <div className="section-header">
            <span>Accounting</span>
            <h2>Accounting</h2>
          </div>
          <Row className="justify-content-center" data-aos="fade-up" data-aos-delay="200">
            <Col lg={10}>
              <h5 className="text-center">Coming Soon</h5>
            </Col>
          </Row>
        </Container>
      </section>
      <Footer />
    </>
  );
};

export default AccountingPage;
