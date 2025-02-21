import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Elements/Navbar"; // Import the Navbar component
import Home from "./Elements/Home";

import TermsAndConditions from "./Elements/Tems"; // Corrected import path and name
import PrivacyPolicy from "./Elements/Privacy"; // Corrected import path
import RefundPolicy from "./Elements/Refund"; // Corrected import path

const App = () => {
  return (
    <Router>
      <Navbar /> {/* Navbar should be inside Router */}
      <div className="p-5">
        <div className="bg-gray-300 w-full rounded-[50px] h-screen flex flex-col justify-center overflow-y-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            
            <Route path="/terms" element={<TermsAndConditions />} />
            <Route path="/policy" element={<PrivacyPolicy />} />
            <Route path="/refund" element={<RefundPolicy />} />
            {/* Add more routes as needed */}
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
