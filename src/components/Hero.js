import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import deliveryImageIcon from '../assets/images/icons/delivery--v1.png';
import purchaseImageIcon from '../assets/images/icons/purchase-img-icon.png';
import quotationImageIcon from '../assets/images/icons/invoice.png';
import invoiceImageIcon from '../assets/images/icons/invoice-1.png';
import accountingImageIcon from '../assets/images/icons/accounting.png'; // Add appropriate path
import payrollImageIcon from '../assets/images/icons/payroll.png'; // Add appropriate path

const Hero = () => {
  return (
    <>
      <section id="hero" className="hero d-flex align-items-center">
        <Container>
          <Row className="gy-4 d-flex justify-content-between">
            <Col lg={5} className="order-2 order-lg-1 d-flex flex-column justify-content-center">
              <h2 data-aos="fade-up">
                Optimize Your Business Operations with
                <span> Voitix Software</span> for Efficient Management
              </h2>
              <p data-aos="fade-up" data-aos-delay="100">
                Voitix offers a robust solution for managing your business processes effectively. Our software enhances your workflow,
                centralizes your operations, and ensures accuracy across your business management tasks.
              </p>
              <button className="get-started">Get Started</button>
            </Col>

            <Col lg={5} className="order-1 order-lg-2 hero-img" data-aos="zoom-out">
              {/* <img src={heroImage} className="img-fluid mb-3 mb-lg-0" alt="Illustration" /> */}
            </Col>
          </Row>
        </Container>
      </section>

      <section id="featured-services" className="featured-services">
        <Container>
          <Row className="justify-content-between">
            <Col lg={3} md={6} className="service-item d-flex align-items-center" data-aos="fade-up" data-aos-delay="200">
              <div className="text-center service-card">
                <img width={70} src={quotationImageIcon} alt="Quotation Management" className="service-icon" />
                <h4 className="service-title">Quotations Management</h4>
                <p className="service-description">
                  Create and manage quotations with precision, offering detailed and accurate proposals to clients.
                </p>
              </div>
            </Col>

            <Col lg={4} md={6} className="service-item text-center" data-aos="fade-up" data-aos-delay="200">
              <div className="service-card">
                <img width={70} src={invoiceImageIcon} alt="Invoicing" className="service-icon" />
                <h4 className="service-title">Effortless Invoicing</h4>
                <p className="service-description">
                  Generate professional invoices efficiently, ensuring accurate billing and timely payments.
                </p>
              </div>
            </Col>

            <Col lg={3} md={6} className="service-item d-flex align-items-center" data-aos="fade-up" data-aos-delay="200">
              <div className="text-center service-card">
                <img width={70} src={purchaseImageIcon} alt="Purchase Orders" className="service-icon" />
                <h4 className="service-title">Purchase Orders Management</h4>
                <p className="service-description">
                  Manage purchase orders efficiently, streamlining the procurement process for enhanced control.
                </p>
              </div>
            </Col>

            <Col lg={3} md={6} className="service-item d-flex align-items-center" data-aos="fade-up" data-aos-delay="200">
              <div className="text-center service-card">
                <img width={70} src={deliveryImageIcon} alt="Delivery Notes" className="service-icon" />
                <h4 className="service-title">Delivery Notes Management</h4>
                <p className="service-description">
                  Manage deliveries and logistics efficiently, ensuring a smooth supply chain and tracking.
                </p>
              </div>
            </Col>

            <Col lg={4} md={6} className="service-item d-flex align-items-center" data-aos="fade-up" data-aos-delay="200">
              <div className="text-center service-card">
                <img width={70} src={accountingImageIcon} alt="Accounting" className="service-icon" />
                <h4 className="service-title">Accounting Management</h4>
                <p className="service-description">
                  Handle all your accounting needs with precision, from financial tracking to report generation.
                </p>
              </div>
            </Col>

            <Col lg={3} md={6} className="service-item d-flex align-items-center" data-aos="fade-up" data-aos-delay="200">
              <div className="text-center service-card">
                <img width={70} src={payrollImageIcon} alt="Payroll" className="service-icon" />
                <h4 className="service-title">Payroll Management</h4>
                <p className="service-description">
                  Manage payroll efficiently, ensuring accurate calculations and timely employee payments.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Hero;
 