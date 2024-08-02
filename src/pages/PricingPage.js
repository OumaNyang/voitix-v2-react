import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import Footer from '../components/Footer';
import BreadCrumbSection from '../components/BreadcrumbSection';

const PricingPage = () => {
const pricingPlans = [
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
    "Monthly Billing Flow and Income Summary Reports",
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
<>
    <Helmet>
    <title>Pricing | Voitix - Enterprise Accounting Software</title>
    <meta
        name="description"
        content="Check out Voitix's flexible pricing plans for businesses of all sizes. From free starter plans to comprehensive enterprise solutions, we have the right plan for your accounting needs."
    />
    <meta
        name="keywords"
        content="Voitix, pricing plans, accounting software, invoicing, quotations, purchase orders"
    />
    <meta name="author" content="Voitix" />
    <meta property="og:title" content="Pricing | Voitix - Enterprise Accounting Software" />
    <meta
        property="og:description"
        content="Explore Voitix's pricing plans designed to fit the needs of any business. Find out more about our Business Starter, Business Plus, and Enterprise Solution plans."
    />
    <meta property="og:url" content="https://www.voitix.azacloud.com/pricing" />
    <meta property="og:type" content="website" />
    <meta property="og:image" content="https://www.voitix.azacloud.com/images/pricing-og-image.png" />
    <script type="application/ld+json">
        {JSON.stringify({
        "@context": "http://schema.org",
        "@type": "WebPage",
        "name": "Pricing | Voitix - Enterprise Accounting Software",
        "description": "Explore Voitix's pricing plans designed to fit the needs of any business.",
        "url": "https://www.voitix.azacloud.com/pricing",
        "image": "https://www.voitix.azacloud.com/images/pricing-og-image.png",
        "publisher": {
            "@type": "Organization",
            "name": "Voitix",
            "logo": {
            "@type": "ImageObject",
            "url": "https://www.voitix.azacloud.com/images/logo.png"
            }
        }
        })}
    </script>
    </Helmet>
    <BreadCrumbSection />
    <section id="pricing" className="pricing pt-0">
    <Container data-aos="fade-up">
        <div className="section-header">
        <span>Pricing</span>
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
        <Row className="mt-5">
        <Col lg={12} className="text-center">
            <h3>Additional Benefits</h3>
            <p>Subscribing to any of our plans gives you access to exclusive features and services:</p>
            <ul className="list-unstyled">
            <li><i className="bi bi-check-circle"></i> 24/7 customer support</li>
            <li><i className="bi bi-check-circle"></i> Regular software updates and new features</li>
            <li><i className="bi bi-check-circle"></i> Access to our educational resources and webinars</li>
            <li><i className="bi bi-check-circle"></i> Data security and compliance with industry standards</li>
            </ul>
        </Col>
        </Row>
    </Container>
    </section>
    <Footer />
</>
);
};

export default PricingPage;
