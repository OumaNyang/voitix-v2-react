import React, { useState, useEffect, useRef } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import Footer from '../components/Footer';
import placeholderImage from '../assets/images/placeholder.jpeg'; // Local placeholder image

const ArticlesPage = () => {
  const [imagesLoaded, setImagesLoaded] = useState({});
  const [cardHeight, setCardHeight] = useState('auto');
  const popularArticlesRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      if (popularArticlesRef.current) {
        setCardHeight(popularArticlesRef.current.clientHeight + 'px');
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial call to set the height

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleImageError = (index) => {
    setImagesLoaded((prev) => ({ ...prev, [index]: true }));
  };

  const featuredArticles = [
    {
      title: "The Future of Accounting Software",
      description: " Lorem ipsum odor amet, consectetuer adipiscing elit. Suscipit ut suscipit tempus porta, taciti facilisis risus. Aliquam consequat ullamcorper imperdiet eleifend rutrum quisque potenti per phasellus? Fusce ligula lacinia; leo litora tincidunt sit. Convallis dignissim aliquam pulvinar rutrum elementum sociosqu sit. Dignissim parturient eget gravida pellentesque ipsum neque morbi hendrerit. Quam netus elit venenatis sagittis semper at. Et ac consectetur aenean sed faucibus mattis aliquet tristique. Hac curabitur eros sed ante, ultricies feugiat habitant.Tortor rhoncus elementum nascetur, velit platea mattis? Lacinia commodo euismod primis quam conubia suspendisse pulvinar. Vivamus justo orci; faucibus sem massa iaculis. Dis consequat ultrices hac donec himenaeos; libero quisque. Scelerisque vitae facilisi lacus neque venenatis class molestie. Sagittis imperdiet mi curabitur mi est dictum nullam ante nibh. Turpis lectus habitasse sit nec augue primis est eleifend. Ornare nisi dapibus aliquam dictumst odio habitasse lobortis habitasse.",
      date: "August 2, 2024",
      image: "path_to_image1.jpg",
      link: "/articles/future-of-accounting-software",
    },
    {
      title: "How to Optimize Your Invoicing Process",
      description: "Learn effective strategies to streamline your invoicing process and improve cash flow.",
      date: "July 25, 2024",
      image: "path_to_image2.jpg",
      link: "/articles/optimize-invoicing-process",
    },
    {
      title: "Benefits of Multi-Currency Billing",
      description: "Understand the advantages of multi-currency billing for businesses engaged in international transactions.",
      date: "July 15, 2024",
      image: "path_to_image3.jpg",
      link: "/articles/multi-currency-billing-benefits",
    },
    // Added more articles for display
    {
      title: "How to Improve Financial Forecasting",
      description: "Discover tips and tools to enhance your financial forecasting for better business planning.",
      date: "June 30, 2024",
      image: "path_to_image4.jpg",
      link: "/articles/improve-financial-forecasting",
    },
    {
      title: "The Importance of Regular Financial Audits",
      description: "Learn why regular financial audits are crucial for maintaining business health and compliance.",
      date: "June 20, 2024",
      image: "path_to_image5.jpg",
      link: "/articles/importance-financial-audits",
    },
  ];

  const popularArticles = [
    {
      title: "Understanding VAT and Sales Tax",
      link: "/articles/vat-sales-tax",
    },
    {
      title: "5 Tips for Effective Business Expense Tracking",
      link: "/articles/business-expense-tracking",
    },
    {
      title: "Top Accounting Software Features to Look For",
      link: "/articles/accounting-software-features",
    },
    {
      title: "How to Prepare for Tax Season",
      link: "/articles/prepare-for-tax-season",
    },
    {
      title: "The Benefits of Cloud-Based Accounting",
      link: "/articles/cloud-based-accounting",
    },
    {
      title: "Managing Cash Flow Effectively",
      link: "/articles/manage-cash-flow",
    },
    {
      title: "Key Metrics for Business Success",
      link: "/articles/key-metrics-business-success",
    },
    {
      title: "Understanding Financial Statements",
      link: "/articles/understanding-financial-statements",
    },
  ];

return (
  <>
    <Helmet>
      <title>Articles and News | Voitix</title>
      <meta
        name="description"
        content="Read the latest articles and news on accounting, invoicing, and financial management. Stay informed with Voitix."
      />
      <meta
        name="keywords"
        content="Voitix, articles, news, accounting, invoicing, financial management"
      />
      <meta name="author" content="Voitix" />
      <meta property="og:title" content="Articles and News | Voitix" />
      <meta
        property="og:description"
        content="Explore the latest articles and news on accounting, invoicing, and financial management with Voitix."
      />
      <meta property="og:url" content="https://www.voitix.azacloud.com/articles" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://www.voitix.azacloud.com/images/articles-og-image.png" />
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "http://schema.org",
          "@type": "Blog",
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://www.voitix.azacloud.com/articles"
          },
          "headline": "Articles and News",
          "description": "Read the latest articles and news on accounting, invoicing, and financial management. Stay informed with Voitix.",
          "image": "https://www.voitix.azacloud.com/images/articles-og-image.png",
          "author": {
            "@type": "Organization",
            "name": "Voitix"
          },
          "publisher": {
            "@type": "Organization",
            "name": "Voitix",
            "logo": {
              "@type": "ImageObject",
              "url": "https://www.voitix.azacloud.com/images/logo.png"
            }
          },
          "datePublished": "2024-08-02"
        })}
      </script>
    </Helmet>
    <section id="articles" className="articles">
      <Container data-aos="fade-up">
        {/* <div className="section-header">
          <span>Articles and News</span>
          <h2>Articles and News</h2>
          <p>
            Stay updated with the latest insights, trends, and tips in the world of accounting and finance. Our articles cover a wide range of topics to help you stay informed and make better financial decisions.
          </p>
        </div> */}
        <Row className="justify-content-between" >
          <Col lg={7} data-aos="fade-up" data-aos-delay="200">
            {/* Large Box for the First Article */}
            <Card className="mb-4 large-article" style={{ height: cardHeight }}>
              <Card.Img
                variant="top"
                src={imagesLoaded[0] ? placeholderImage : featuredArticles[0].image}
                alt={featuredArticles[0].title}
                onError={() => handleImageError(0)}
                loading="lazy"
              />
              <Card.Body className="article-body">
                <Card.Title>
                  <a href={featuredArticles[0].link}> 
                    {featuredArticles[0].title}
                  </a> 
                </Card.Title>
                {/* <Card.Text  >{featuredArticles[0].description}</Card.Text> */}
                {/* <small className="text-muted">Published on {featuredArticles[0].date}</small> */}
                <div className='mt-2 author'>John Keens  <span> {featuredArticles[0].date}</span> </div>

              </Card.Body>
              {/* <Card.Footer>
                <small className="text-muted">Published on {featuredArticles[0].date}</small>
              </Card.Footer> */}
            </Card>
          </Col>
          <Col lg={5} data-aos="fade-up" data-aos-delay="400" ref={popularArticlesRef}>
            <div className="sidebar">
              <h3>Popular Articles</h3>
              <ul className="list-unstyled">
                {popularArticles.map((article, index) => (
                  <li key={index} className="mb-2">
                    <a href={article.link}>{article.title}</a>
                    <div className='mt-2 author'>John Keens  <span>13th July 2020</span> </div>
                  </li>
                ))}
              </ul>
            </div>
          </Col>
          <Col md={12} data-aos="fade-up" data-aos-delay="300">
             <Row>
              {featuredArticles.slice(1).map((article, index) => (
                <Col md={3} key={index} className="mb-1">
                  <Card className="h-100 small-cards ">
                    <Card.Img
                      variant="top"
                      src={imagesLoaded[index + 1] ? placeholderImage : article.image}
                      alt={article.title}
                      onError={() => handleImageError(index + 1)}
                      loading="lazy"
                    />
                    <Card.Body>
                      <Card.Title>
                        <a href={article.link}>
                          {article.title}
                        </a>
                      </Card.Title>
                      <Card.Text>{article.description}</Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <div className='mt-2 author'>John Keens  <span>{article.date}</span> </div>

                      {/* <small className="text-muted">Published on {article.date}</small> */}
                    </Card.Footer>
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
    <Footer />
  </>
);
};
export default ArticlesPage;
