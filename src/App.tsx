/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Products from "./components/Products";
import WhyChooseUs from "./components/WhyChooseUs";
import Testimonials from "./components/Testimonials";
import Markets from "./components/Markets";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import PrivacyPolicy from "./components/PrivacyPolicy";
import TermsAndConditions from "./components/TermsAndConditions";
import { useState, useEffect } from "react";

export default function App() {
  const [currentHash, setCurrentHash] = useState(window.location.hash);

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentHash(window.location.hash);
    };
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const renderContent = () => {
    if (currentHash === "#privacy") {
      return <PrivacyPolicy />;
    }
    if (currentHash === "#terms") {
      return <TermsAndConditions />;
    }
    return (
      <main>
        <Hero />
        <About />
        <Products />
        <WhyChooseUs />
        <Testimonials />
        <Markets />
        <Contact />
      </main>
    );
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-brand-blue/20 selection:text-brand-blue">
      <Header />
      {renderContent()}
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
