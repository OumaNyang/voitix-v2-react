import React from 'react';
import { Container, Row, Col, Accordion } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import Footer from '../components/Footer';
import BreadCrumbSection from '../components/BreadcrumbSection';

const FAQPage = () => {
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
},
{
question: "Is there a mobile app available for Voitix?",
answer: "Yes, Voitix offers a mobile app for both iOS and Android devices, allowing you to manage your accounting tasks on the go. The app includes features like invoicing, expense tracking, and reporting.",
id: "faq-content-7"
},
{
question: "What kind of support does Voitix offer?",
answer: "Voitix provides comprehensive support through various channels including email, chat, and phone. Additionally, we offer a detailed knowledge base and tutorials to help you get the most out of the software.",
id: "faq-content-8"
},
{
question: "Can I import my existing data into Voitix?",
answer: "Yes, Voitix supports data import from other accounting software or spreadsheets. Our support team can assist you with the data migration process to ensure a smooth transition.",
id: "faq-content-9"
},
{
question: "Does Voitix comply with accounting standards?",
answer: "Voitix adheres to international accounting standards and practices. It includes features for tax calculations, financial reporting, and compliance with regulatory requirements.",
id: "faq-content-10"
}
];

return (
<>
<Helmet>
<title>FAQs | Voitix - Your Questions Answered</title>
<meta
name="description"
content="Get answers to frequently asked questions about Voitix. Learn how our accounting software can help your business manage invoices, expenses, and more."
/>
<meta
name="keywords"
content="Voitix, FAQs, accounting software, invoicing, expense tracking, support"
/>
<meta name="author" content="Voitix" />
<meta property="og:title" content="FAQs | Voitix - Your Questions Answered" />
<meta
property="og:description"
content="Find answers to common questions about Voitix, including features, security, support, and more. Learn how our software can streamline your business accounting."
/>
<meta property="og:url" content="https://www.voitix.azacloud.com/faq" />
<meta property="og:type" content="website" />
<meta property="og:image" content="https://www.voitix.azacloud.com/images/faq-og-image.png" />
<script type="application/ld+json">
{JSON.stringify({
"@context": "http://schema.org",
"@type": "FAQPage",
"mainEntity": faqs.map((faq, index) => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
    "@type": "Answer",
    "text": faq.answer
    }
}))
})}
</script>
</Helmet>
<BreadCrumbSection />
<section id="faq" className="faq">
<Container data-aos="fade-up">
<div className="section-header">
<span>Frequently Asked Questions</span>
<h2>Frequently Asked Questions</h2>
<p>
    At Voitix, we understand that choosing the right accounting software for your business is crucial. Here are some of the most common questions we receive from our users. If you have any other questions, feel free to contact our support team.
</p>
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
<Footer />
</>
);
};

export default FAQPage;
