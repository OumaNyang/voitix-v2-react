import React from 'react';
import { Container, Row, Col, Accordion } from 'react-bootstrap';
 
const FAQ = () => {
  const faqs = [
    {
      question: "How does Voitix help in simplifying the invoicing process?",
      answer: "Voitix automates the entire invoicing process, making it easy to create, send, and track invoices. It streamlines your invoicing workflow, saving you time and reducing the chances of errors.",
      id: "faq-content-1"
    },
    {
      question: "Can Voitix handle multiple currencies for international transactions?",
      answer: "Yes, Voitix supports multi-currency billing, allowing you to invoice clients in their preferred currency. This feature is essential for businesses engaged in international transactions.",
      id: "faq-content-2"
    },
    {
      question: "How secure is the payment process within Voitix?",
      answer: "Voitix ensures secure payment processing, employing encryption and industry-standard security measures. Your financial data and transactions are protected, providing peace of mind for both you and your clients.",
      id: "faq-content-3"
    },
    {
      question: "Can I customize invoices and other documents in Voitix?",
      answer: "Absolutely! Voitix allows you to customize your invoices, quotes, and other documents to reflect your brand. You can add your logo, choose colors, and tailor the layout to create professional and personalized documents.",
      id: "faq-content-4"
    },
    {
      question: "How does Voitix assist in tracking business expenditures and profits?",
      answer: "Voitix provides detailed reports that help you track expenditures and profits. You can gain valuable insights into your business finances, enabling better financial decision-making.",
      id: "faq-content-5"
    },
    {
      question: "Where is Voitix accessible?",
      answer: "Voitix is an online application accessible globally. It supports multi-currency and operates in multiple countries. Additionally, it requires no installation and can be used on any device.",
      id: "faq-content-6"
    }
  ];

  return (
    <section id="faq" className="faq">
      <Container data-aos="fade-up">
        <div className="section-header">
          <span>Frequently Asked Questions</span>
          <h2>Frequently Asked Questions</h2>
        </div>
        <Row className="justify-content-center" data-aos="fade-up" data-aos-delay="200">
          <Col lg={10}>
            <Accordion defaultActiveKey="0" className="accordion-flush" id="faqlist">
              {faqs.map((faq, index) => (
                <Accordion.Item eventKey={index.toString()} key={faq.id} className="accordion-item">
                  <Accordion.Header>
                    <i className="bi bi-question-circle question-icon"></i>
                    {faq.question}
                  </Accordion.Header>
                  <Accordion.Body>
                    {faq.answer}
                  </Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default FAQ;
