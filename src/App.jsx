import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Hero from "./Elements/Home";
import Services from "./Elements/Policy";
import Pricing from "./Elements/Pricing";
import Footer from "./Elements/Footer";
import Navbar from "./Elements/Navbar";
import Layout from "./Elements/Layout";
import PoliciesPage from "./Elements/Tems";
import AskUs from "./Elements/Pricing";
import ContactForm from "./Elements/Contact";

// Navbar Component


// Hero Component


// Services Component


// Pricing Component


// FAQ Component


// Footer Component


// Main App Component
function App() {
  return (
    <Router>
      <div className="   text-white ">
        <Navbar />
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="/home" element={<Layout />} />
          <Route path="/Policy" element={<PoliciesPage />} />
          <Route path="/services" element={<Services />} />
          <Route path="/Q&A" element={<AskUs />} />
          <Route path="/contact" element={<ContactForm />} />
          
          

    
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
