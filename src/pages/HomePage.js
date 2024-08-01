import React from 'react';
import Hero from '../components/Hero';
import CallToAction from '../components/CallToAction';
import WhyVoitix from '../components/WhyVoitix';
import Pricing from '../components/Pricing';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <>
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
