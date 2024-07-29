import React from 'react';
import { Container ,Row,Col} from 'react-bootstrap';
// import heroImage from '../assets/images/istock-1371324023-2520w.jpg';  
import deliveryImageIcon from'../assets/images/icons/delivery--v1.png';
import purchaseImageIcon from'../assets/images/icons/purchase-img-icon.png';
import quotationImageIcon from'../assets/images/icons/invoice.png';
import invoiceImageIcon from'../assets/images/icons/invoice-1.png';

const Hero = () => {
  return ( 
    <>
      <section id="hero" className="hero d-flex align-items-center">
        <Container >
          <Row className="gy-4 d-flex justify-content-between">
            <Col lg={5} className="order-2 order-lg-1 d-flex flex-column justify-content-center">
              <h2 className="" data-aos="fade-up">
                Automate Your Entire Purchasing Process with
                <span> Invoicing Software</span> that Streamlines Your Processes
              </h2>
              <p data-aos="fade-up" data-aos-delay="100">
                Experience a streamlined purchasing process with our invoicing software. We provide solutions that simplify your workflow,
                centralize your purchases ensuring efficiency and accuracy.
              </p>
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
                 <img width={70} src={quotationImageIcon}
                 alt="invoice-1"
                  className="service-icon"
                />
                <h4 className="service-title">Quotations Management</h4>
                <p className="service-description">
                Create and manage quotations easily, providing detailed and accurate proposals to clients.  </p>
              </div>
            </Col>

            <Col lg={4} md={6} className="service-item text-center " data-aos="fade-up" data-aos-delay="200">
            <div className="  service-card">
                 <img width={70} src={invoiceImageIcon}
                 alt="invoice"
                  className="service-icon"
                />
                <h4 className="service-title">Effortless Invoicing
                </h4>
                <p className="service-description">
                Generate professional invoices with ease, ensuring accurate billing and timely payments. Create detailed and customizable invoices for your business transactions.</p>              </div>
            </Col>

            <Col lg={3} md={6} className="service-item d-flex align-items-center" data-aos="fade-up" data-aos-delay="200">
              <div className="text-center service-card">
                 <img width={70} src={purchaseImageIcon}
                alt="external-bag-ecommerce-anggara-line-anggara-putra"
                  className="service-icon"
                />
                <h4 className="service-title">Purchase Orders Management
                </h4>
                <p className="service-description">
                Efficiently manage purchase orders, streamlining the procurement process for better control. Maintain control over your purchasing process                </p>
              </div>
            </Col>

            <Col lg={3} md={6} className="service-item d-flex align-items-center" data-aos="fade-up" data-aos-delay="200">
              <div className="text-center service-card">
                <img width={70} src={deliveryImageIcon}
                  alt="delivery--v1"
                  className="service-icon"
                />
                <h4 className="service-title">Delivery Notes Managements</h4>
                <p className="service-description">
                Efficiently manage deliveries and logistics for a smooth supply chain. Track and coordinate the delivery process effortlessly.                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
     </>
  );
};

export default Hero;
