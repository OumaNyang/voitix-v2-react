import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import Footer from '../components/Footer';
import BreadCrumbSection from '../components/BreadcrumbSection';

const AccountingPage = () => {
  return (
    <>
      <Helmet>
        <title>Accounting and Payroll | Voitix</title>
        <meta
          name="description"
          content="Manage your business finances with Voitix's comprehensive accounting and payroll solutions. From invoicing to payroll processing, streamline your financial management processes."
        />
        <meta
          name="keywords"
          content="Accounting, Payroll, Financial Management, Invoicing, Payroll Processing, Voitix"
        />
        <meta name="author" content="Voitix" />
        <meta
          property="og:title"
          content="Accounting and Payroll - Voitix"
        />
        <meta
          property="og:description"
          content="Voitix provides a complete solution for managing accounting and payroll, including invoicing, expense tracking, and payroll processing. Simplify your business operations with our powerful tools."
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
            <span>Accounting and Payroll</span>
            <h2>Comprehensive Financial Management Solutions</h2>
            <p>Streamline your business's financial processes with Voitix's accounting and payroll solutions. Our tools are designed to provide you with accurate, efficient, and secure financial management, helping you focus on growing your business.</p>
          </div>
          <Row className="justify-content-center" data-aos="fade-up" data-aos-delay="200">
            <Col lg={10}>
              <h3>Features and Benefits</h3>
              <ul>
                <li><strong>Invoicing and Billing:</strong> Create and manage invoices with ease. Customize invoice templates, track payments, and send reminders to ensure timely payments.</li>
                <li><strong>Expense Tracking:</strong> Monitor your business expenses with our intuitive expense tracking system. Categorize expenses, attach receipts, and get a clear view of your financial health.</li>
                <li><strong>Payroll Management:</strong> Automate payroll processing with Voitix. Calculate employee salaries, taxes, and benefits accurately, and ensure compliance with legal requirements.</li>
                <li><strong>Financial Reporting:</strong> Generate detailed financial reports to gain insights into your business performance. Our reporting tools help you make informed decisions and plan for the future.</li>
                <li><strong>Secure Data Management:</strong> Your financial data is protected with top-tier security measures, ensuring that sensitive information remains confidential and safe.</li>
              </ul>
              <h3>Why Choose Voitix for Accounting and Payroll?</h3>
              <p>Voitix offers a user-friendly interface and comprehensive features that make managing your business finances a breeze. Our solution is scalable, catering to businesses of all sizes, and is backed by a dedicated support team ready to assist you.</p>
              <p>Whether you're a small business owner or managing a large enterprise, Voitix provides the tools you need to efficiently handle your accounting and payroll needs, allowing you to focus on what matters most – growing your business.</p>
              <h3>Get Started with Voitix</h3>
              <p>Ready to take control of your business finances? Contact us today to learn more about our accounting and payroll solutions and how Voitix can help your business thrive.</p>
            </Col>
          </Row>
        </Container>
      </section>
      <Footer />
    </>
  );
};

export default AccountingPage;
