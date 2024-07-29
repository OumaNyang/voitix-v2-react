import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
 
const Pricing = () => {
  const pricingPlans = [
    // {
    //   title: "Business Free Plan",
    //   price: "0",
    //   features: [

    //   ],
    //   delay: 100,
    //   link: "https://voitix.azacloud.com/signup",
    //   isFeatured: false
    // },
    {
      title: "Business Starter Plan",
      price: "0",
      features: [
           "1 User/Sole Proprietor",
        "Up to 5 Customers/Clients",
        "50 Quotations, Invoices, Delivery Notes per month",
        "Multi-Currency Billing",
        "Send Payment Reminders and Follow-ups",
        "Send custom invoices & quotes and purchase orders"
      ],
      delay: 200,
      link: "https://voitix.azacloud.com/signup",
      isFeatured: false
    },
    {
      title: "Business Plus Plan",
      price: "18",
      features: [
        "5 Account Users",
        "Up to 100 Customers",
        "Unlimited Quotations, Invoices, Purchase Orders, Delivery Notes",
        "Monthly Billing Flow and Income Summary Reportings",
        "Track Sales Tax and VAT"

       ],
      delay: 300,
      link: "https://voitix.azacloud.com/signup",
      isFeatured: true
    },
    {
      title: "Enterprise Solution Plan",
      price: "26",
      features: [
 
        "Unlimited Account Users",
        "Unlimited Customers",
        "Dedicated Account Support Manager",
        "Customized Features to Suit Your Business Requirements",
        "Multiple Companies under one account at no extra charge",
        "Free Access to All Mini Programs and Pilot Features"
      ],
      delay: 400,
      link: "https://voitix.azacloud.com/signup",
      isFeatured: false
    }
  ];

  return (
    <section id="pricing" className="pricing pt-0">
      <Container data-aos="fade-up">
        <div className="section-header">
          {/* <span>Pricing</span> */}
          <h2>Pricing</h2>
        </div>
        <Row className="gy-4">
          {pricingPlans.map((plan, index) => (
            <Col key={index} lg={4} data-aos="fade-up" data-aos-delay={plan.delay}>
              <div className={`pricing-item ${plan.isFeatured ? 'featured' : ''}`}>
                <h3>{plan.title}</h3>
                <h4>
                  <sup>USD</sup>{plan.price}<span> / month</span>
                </h4>
                <p>No Credit Card Required</p>
                <Button href={plan.link} className="buy-btn">
                  SIGN UP FOR FREE
                </Button>
                <ul>
                  {plan.features.map((feature, i) => (
                    <li key={i}><i className="bi bi-check-circle"></i> {feature}</li>
                  ))}
                </ul>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Pricing;
