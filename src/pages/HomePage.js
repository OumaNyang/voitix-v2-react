import React from "react";
import { Helmet } from "react-helmet";
import Hero from "../components/Hero";
import CallToAction from "../components/CallToAction";
import WhyVoitix from "../components/WhyVoitix";
import Pricing from "../components/Pricing";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Voitix | Comprehensive Enterprise Accounting Software</title>
        <meta
          name="description"
          content="Voitix provides an all-in-one solution for managing invoices, quotations, delivery notes, purchase orders, payments, accounting, and payroll. Discover our advanced features and competitive pricing plans."
        />
        <meta
          name="keywords"
          content="Enterprise Accounting Software, Invoicing, Quotations, Delivery Notes, Purchase Orders, Payments, Accounting, Payroll, Voitix"
        />
        <meta name="author" content="Voitix" />
        <meta
          property="og:title"
          content="Voitix | Comprehensive Enterprise Accounting Software"
        />
        <meta
          property="og:description"
          content="Discover Voitix, the complete solution for enterprise accounting needs, including invoicing, quotations, delivery notes, purchase orders, payments, and payroll management."
        />
        <meta property="og:url" content="https://www.voitix.azacloud.com/" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://www.voitix.azacloud.com/images/og-image.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Voitix | Comprehensive Enterprise Accounting Software" />
        <meta name="twitter:description" content="Explore Voitix's features for managing invoices, quotations, delivery notes, purchase orders, payments, accounting, and payroll." />
        <meta name="twitter:image" content="https://www.voitix.azacloud.com/images/og-image.png" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Voitix",
            "url": "https://www.voitix.azacloud.com/",
            "logo": "https://www.voitix.azacloud.com/images/og-image.png",
            "sameAs": [
              "https://www.facebook.com/voitix",
              "https://twitter.com/voitix",
              "https://www.linkedin.com/company/voitix"
            ],
            "description": "Voitix provides an all-in-one solution for managing invoices, quotations, delivery notes, purchase orders, payments, accounting, and payroll.",
            })}
        </script>
      </Helmet>
      <Hero />
      <CallToAction />
      <WhyVoitix />
      <Pricing />
      <FAQ />
      <Footer />
    </>
  );
};

export default HomePage;
