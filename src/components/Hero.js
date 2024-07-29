import React from 'react';
import { Container ,Row,Col} from 'react-bootstrap';
import heroImage from '../assets/images/voitix-bg.png';  

const Hero = () => {
  return (
    <>
      <section id="hero" className="hero d-flex align-items-center">
        <Container >
          <Row className="gy-4 d-flex justify-content-between">
            <Col className="order-2 order-lg-2 d-flex flex-column justify-content-center">
              <h2 className="h6" data-aos="fade-up">
                Automate Your Entire Purchasing Process with
                <span> Invoicing Software</span> that Streamlines Your Processes
              </h2>
              <p data-aos="fade-up" data-aos-delay="100">
                Experience a streamlined purchasing process with our invoicing software. We provide solutions that simplify your workflow,
                centralize your purchases ensuring efficiency and accuracy.
              </p>
              </Col>

         <Col lg={5} className="order-1 order-lg-1 hero-img" data-aos="zoom-out">
            <img src={heroImage} className="img-fluid mb-3 mb-lg-0" alt="Illustration" />
             </Col>


            </Row>
        </Container>
      </section>

         <section id="featured-services" className="featured-services">
          <Container  >
            <Row >
            <Col className="col-lg-3 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay="200">
            <div className="icon flex-shrink-0">
            <i className="bi bi-card-checklist"></i>                </div>
                <div>
                  <h4 className="title">Quotations</h4>
                  <p className="description">
                    Simplify your invoicing process and manage financial transactions seamlessly.
                  </p>
                </div>
              </Col>

              <Col lg={3} md={6} className="service-item d-flex" data-aos="fade-up" data-aos-delay="200">
                <div className="icon flex-shrink-0">
                <i className="bi bi-receipt-cutoff"></i>
                </div>
                <div>
                  <h4 className="title">Invoices</h4>
                  <p className="description">Efficiently manage and track your invoices.</p>
                </div>
              </Col>

              <Col lg={3} md={6} className="service-item d-flex" data-aos="fade-up" data-aos-delay="200">
                <div className="icon flex-shrink-0">
                  <i className="bi bi-bag-check"></i>
                </div>
                <div>
                  <h4 className="title">Purchase Orders</h4>
                  <p className="description">
                    Effortlessly create and manage purchase orders for your business needs.
                  </p>
                </div>
              </Col>

              <Col lg={3} md={6} className="service-item d-flex" data-aos="fade-up" data-aos-delay="200">
                <div className="icon flex-shrink-0">
                <i className="bi bi-truck"></i>
                </div>
                <div>
                  <h4 className="title">Delivery Notes</h4>
                  <p className="description">Efficiently manage and track your delivery notes.</p>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
     </>
  );
};

export default Hero;
