// import React, { useEffect } from 'react';
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import Header from './components/Header';
// import Hero from './components/Hero';
// // import Features from './components/Features';
// import CallToAction from './components/CallToAction';
// import WhyVoitix from './components/WhyVoitix';
// import './App.css'; // You can add custom styles here
// // import './assets/css/voitix.css';
// import Pricing from './components/Pricing';
// import FAQ from './components/FAQ';
// import Footer from './components/Footer';
//  import withScriptInit from './components/withScriptInit';
// function App() {
//   useEffect(() => {
//     AOS.init({
//       duration: 800,
//       easing: 'ease-in-out',
//       once: true,
//       mirror: false,
//     });
//   }, []);

//   return (
//     <div className="App">
//        <Header />
//       <Hero />
//       {/* <Features /> */}
//       <CallToAction />
//        <WhyVoitix />
//        <Pricing />
//        <FAQ />
//        <Footer />

//     </div>
//   );
// }

//  export default withScriptInit(App);

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import withScriptInit from "./components/withScriptInit";
import HomePage from "./pages/HomePage";
import Header from "./components/Header";
import FAQPage from "./pages/FAQPage";
import './assets/css/voitix.css';
import PricingPage from "./pages/PricingPage";
import AccountingPage from "./pages/AccountingPage";
import DocumentationPage from "./pages/DocumentationPage";
import BlogsPage from "./pages/ArticlesPage";
import PageNotFound from "./pages/PageNotFound";
// import ProjectsPage from "./app_pages/ProjectsPage";
import CreateInvoicePage from "./app_pages/ProjectsPage";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
  }, []);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/accounting" element={<AccountingPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/documentation" element={<DocumentationPage />} />
        <Route path="/blogs" element={<BlogsPage />} />
        <Route path="/login" element={<BlogsPage />} />
        <Route path="/projects" element={<CreateInvoicePage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default withScriptInit(App);
