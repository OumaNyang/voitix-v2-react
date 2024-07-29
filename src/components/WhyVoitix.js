import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
 import featureImage from '../assets/images/Invoice-bro-1-1024x1024.png'; // Update the path to your image

const WhyVoitix = () => {
  return (
    <section id="why-voitix" className="why-voitix">
      <Container>
        <Row className="gy-4 align-items-center why-voitix-item" data-aos="fade-up">
          <Col md={5}>
            <img src={featureImage} className="img-fluid" alt="Feature" />
          </Col>
          <Col md={7}>
            <h3>An All-In-One Solution for Your Business Purchases</h3>
            <p>Experience the power of Voitix, an aggregate solution that caters to all the essential needs of your business. Here's how Voitix can transform your operations:</p>
            <ul>
              <li><i className="bi bi-check-circle"></i> Comprehensive Business Tools: Voitix provides everything a small business needs to thrive.</li>
               <li><i className="bi bi-check-circle"></i> Device-Agnostic Accessibility: Access Voitix from any device without the need for installations, ensuring convenience and flexibility. Work seamlessly across various devices.</li>
              
              <li><i className="bi bi-check-circle"></i> Stay VAT Compliant & Adapt to Local Languages: Ensure compliance and communicate effectively.</li>
              <li><i className="bi bi-check-circle"></i> Automate Payment Reminders: Never miss a payment with automated reminders.</li>
              <li><i className="bi bi-check-circle"></i> Accept Payments via Various Channels: Enable cash, cheque, and bank transfer payments.</li>
              <li><i className="bi bi-check-circle"></i> Role-Based User Access: Add multiple users and assign role-based access for better collaboration.</li>
              <li><i className="bi bi-check-circle"></i> Automated Approval Flows: Streamline approval processes and enhance workflow efficiency. Implement automated approval flows for seamless business operations</li>
              <li><i className="bi bi-check-circle"></i> Gain Business Insights: Access detailed reports to make informed decisions.</li>
              <li><i className="bi bi-check-circle"></i> Track Expenditures and Profits: Keep a close eye on your financial performance.</li>
              <li><i className="bi bi-check-circle"></i> Multi-Currency Support:              Conduct transactions in multiple currencies with ease, facilitating international trade. Support for a wide range of global currencies.</li>
              <li><i className="bi bi-check-circle"></i> Customer Self-Service Portal: Provide a portal for customers to manage their accounts.</li>
              

              
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default WhyVoitix;
