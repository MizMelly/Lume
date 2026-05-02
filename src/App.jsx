import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustedCompanies from "./components/TrustedCompanies";
import Features from "./components/Features";
import DashboardSection from "./components/DashboardSection";
import Pricing from "./components/Pricing";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-background text-foreground min-h-screen">
      <Navbar />
      <Hero />
      <TrustedCompanies />
      <Features />
      <DashboardSection />
      <Pricing />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;