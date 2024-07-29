import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import CallToAction from './components/CallToAction';
import WhyVoitix from './components/WhyVoitix';
import './App.css'; // You can add custom styles here
import './assets/css/voitix.css'; 
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      mirror: false,
    });
  }, []);

  return (
    <div className="App">
      <Header />
      <Hero />
      <Features />
      <CallToAction />
       <WhyVoitix />
       <Pricing />
       <FAQ />
       <Footer />
    </div>
  );
}

export default App;
