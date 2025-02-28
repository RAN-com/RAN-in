import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Hero from "./Elements/Home";
import Services from "./Elements/Policy";
import Pricing from "./Elements/Pricing";
import Footer from "./Elements/Footer";
import Navbar from "./Elements/Navbar";
import Layout from "./Elements/Layout";
import PoliciesPage from "./Elements/Tems";
import AskUs from "./Elements/Pricing";
import ContactForm from "./Elements/Contact";

function App() {
  return (
    <Router>
      <div className="bg-black text-white min-h-screen flex flex-col">
        {/* Fixed Navbar for Mobile & Desktop */}
        <div className="fixed top-0 w-full z-50 bg-black shadow-md">
          <Navbar />
        </div>

        {/* Main Content with Proper Padding for Fixed Navbar */}
        <div className="pt-16 md:pt-20 flex-1">
          <Routes>
            <Route path="/" element={<Layout />} />
            <Route path="/home" element={<Layout />} />
            <Route path="/Policy" element={<PoliciesPage />} />
            <Route path="/services" element={<Services />} />
            <Route path="/Q&A" element={<AskUs />} />
            <Route path="/contact" element={<ContactForm />} />
          </Routes>
        </div>

        {/* Footer Section */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
