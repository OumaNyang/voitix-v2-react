import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Features = () => {
  return (
    <section id="features" className="features">
      <Container data-aos="fade-up">
        <div className="section-header">
          {/* <span>Features</span> */}
          <h2>Features</h2>
        </div>
        <Row>H
          <p>Explore the powerful features that make Voitix the ideal solution for your business needs.</p>
          <Col lg={6} className="content">
            <ul>
              <li data-aos="fade-up" data-aos-delay="100">
                <i className="fas fa-file-invoice-dollar"></i>
                <div>
                  <h5>Effortless Invoicing</h5>
                  <p>Simplify your invoicing process and manage financial transactions seamlessly. Generate professional invoices with ease.</p>
                </div>
              </li>
              <li data-aos="fade-up" data-aos-delay="200">
                <i className="fas fa-check-double"></i>
                <div>
                  <h5>Automated Approval Flows</h5>
                  <p>Streamline approval processes and enhance workflow efficiency. Implement automated approval flows for seamless business operations.</p>
                </div>
              </li>
              <li data-aos="fade-up" data-aos-delay="300">
                <i className="fas fa-truck"></i>
                <div>
                  <h5>Delivery Management</h5>
                  <p>Efficiently manage deliveries and logistics for a smooth supply chain. Track and coordinate the delivery process effortlessly.</p>
                </div>
              </li>
              <li data-aos="fade-up" data-aos-delay="400">
                <i className="bi bi-currency-dollar"></i>
                <div>
                  <h5>Multi-Currency Support</h5>
                  <p>Conduct transactions in multiple currencies with ease, facilitating international trade. Support for a wide range of global currencies.</p>
                </div>
              </li>
            </ul>
          </Col>
          <Col lg={6} className="content">
            <ul>
              <li data-aos="fade-up" data-aos-delay="500">
                <i className="bi bi-laptop"></i>
                <div>
                  <h5>Device-Agnostic Accessibility</h5>
                  <p>Access Voitix from any device without the need for installations, ensuring convenience and flexibility. Work seamlessly across various devices.</p>
                </div>
              </li>
              <li data-aos="fade-up" data-aos-delay="600">
                <i className="bi bi-check2-circle"></i>
                <div>
                  <h5>Quotation Management</h5>
                  <p>Create and manage quotations seamlessly, providing detailed and accurate proposals to clients. Streamline your quotation process for better client communication.</p>
                </div>
              </li>
              <li data-aos="fade-up" data-aos-delay="700">
                <i className="bi bi-file-earmark-text"></i>
                <div>
                  <h5>Invoice Generation</h5>
                  <p>Generate professional invoices with ease, ensuring accurate billing and timely payments. Create detailed and customizable invoices for your business transactions.</p>
                </div>
              </li>
              <li data-aos="fade-up" data-aos-delay="800">
                <i className="bi bi-box"></i>
                <div>
                  <h5>Purchase Order Management</h5>
                  <p>Efficiently manage purchase orders, streamlining the procurement process for better control. Maintain control over your purchasing process.</p>
                </div>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Features;
