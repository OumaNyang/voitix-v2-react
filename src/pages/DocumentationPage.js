import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaFileInvoice, FaQuoteLeft, FaShoppingCart, FaCog } from 'react-icons/fa'; // Example icons
import Footer from '../components/Footer';
import BreadCrumbSection from '../components/BreadcrumbSection';

const DocumentationPage = () => {
  return (
    <>
      <BreadCrumbSection />
      <section id="documentation" className="documentation">
        <Container data-aos="fade-up">
          <div className="section-header">
            <h2>Documentation</h2>
            <p>Welcome to the documentation page. Here you will find detailed information on the various aspects of the application.</p>
          </div>

          <Row className="justify-content-center" data-aos="fade-up" data-aos-delay="200">
            <Col lg={10}>
              <Card className="mb-4">
                <Card.Body>
                  <Row>
                    <Col md={2} className="d-flex align-items-center">
                      <FaFileInvoice size={40} className="text-primary" />
                    </Col>
                    <Col md={10}>
                      <h4>Invoicing</h4>
                      <p>Learn how to create, edit, and manage invoices. This section covers everything from invoice creation to tracking and managing payments.</p>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>

              <Card className="mb-4">
                <Card.Body>
                  <Row>
                    <Col md={2} className="d-flex align-items-center">
                      <FaQuoteLeft size={40} className="text-secondary" />
                    </Col>
                    <Col md={10}>
                      <h4>Quotations</h4>
                      <p>Steps to create and send quotations. This section will guide you through generating quotes, customizing them, and tracking their status.</p>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>

              <Card className="mb-4">
                <Card.Body>
                  <Row>
                    <Col md={2} className="d-flex align-items-center">
                      <FaShoppingCart size={40} className="text-success" />
                    </Col>
                    <Col md={10}>
                      <h4>Purchase Orders</h4>
                      <p>Manage purchase orders with ease. This guide covers creating, sending, and tracking purchase orders to vendors.</p>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>

              <Card className="mb-4">
                <Card.Body>
                  <Row>
                    <Col md={2} className="d-flex align-items-center">
                      <FaCog size={40} className="text-info" />
                    </Col>
                    <Col md={10}>
                      <h4>Application Management</h4>
                      <p>Manage user accounts, application settings, and configurations. Learn how to customize the application to fit your needs.</p>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
      <Footer />
    </>
  );
};

export default DocumentationPage;
