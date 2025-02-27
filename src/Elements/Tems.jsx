import React, { useRef, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const PoliciesPage = () => {
  const termsRef = useRef(null);
  const refundRef = useRef(null);
  const privacyRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
      setMenuOpen(false); // Close mobile menu after clicking
    }
  };

  return (
    <div className="flex min-h-screen bg-transparent">
      {/* Sidebar for Desktop and Mobile */}
      <div
        className={`fixed h-full shadow-lg p-6 flex flex-col space-y-6 z-10 bg-transparent md:w-1/4 transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        <h2 className="text-2xl font-bold text-gray-300 text-center md:text-left">
          Policies
        </h2>
        <button
          onClick={() => scrollToSection(privacyRef)}
          className="px-6 py-2 bg-blue-500 text-white rounded-lg w-full hover:bg-blue-600 transition focus:outline-none focus:ring-0"
        >
          Privacy Policy
        </button>
        <button
          onClick={() => scrollToSection(termsRef)}
          className="px-6 py-2 bg-blue-500 text-white rounded-lg w-full hover:bg-blue-600 transition focus:outline-none focus:ring-0"
        >
          Terms & Conditions
        </button>
        <button
          onClick={() => scrollToSection(refundRef)}
          className="px-6 py-2 bg-blue-500 text-white rounded-lg w-full hover:bg-blue-600 transition focus:outline-none focus:ring-0"
        >
          Refund Policy
        </button>
      </div>

      {/* Mobile Menu Toggle Button */}
    
      {/* Content Section (Centered for Better Responsiveness) */}
      <div className="flex-1 p-6 max-w-3xl mx-auto space-y-12 md:ml-1/4">
        {/* Privacy Policy */}
        <div ref={privacyRef} className="shadow-lg rounded-lg p-8 ">
          <h1 className="text-3xl font-bold text-gray-200 mb-6">Privacy Policy</h1>
          <p className="text-gray-300 mb-4">
          Your privacy is important to us, and this policy explains how we collect, use, and protect your personal data. We collect personal information such as names, email addresses, and phone numbers, along with business details and website usage data. This data helps us provide and improve our services, communicate updates, and comply with legal obligations. We implement industry-standard security measures to safeguard personal information, though we cannot guarantee absolute security. We do not sell or share personal data with third parties except for necessary service providers or legal requirements. Users have the right to access, correct, or delete their personal data by contacting us. This privacy policy may be updated periodically, and we will notify users of significant changes.

          </p>
          
        </div>

        {/* Terms & Conditions */}
        <div ref={termsRef} className="shadow-lg rounded-lg p-8 ">
          <h1 className="text-3xl font-bold text-gray-200 mb-6">Terms and Conditions</h1>
          <p className="text-gray-200 mb-4">
          Welcome to RAN . By accessing our website or using our software development services, you agree to abide by these Terms and Conditions. If you do not agree, please do not use our services. Our company specializes in providing high-quality software solutions, including website and mobile application development, maintenance, and consultancy. Each project is tailored to meet the specific needs of our clients, ensuring an efficient and productive experience.

Clients engaging with our services are responsible for providing clear project requirements, ensuring timely communication, and supplying necessary assets for development. Payments must be made according to the agreed-upon schedule, and any delays may result in service suspension. Once work has commenced, no refunds will be provided. Intellectual property rights for custom software belong to the client upon full payment, while we retain the right to use generic code, libraries, or frameworks for future projects. We shall not be held liable for indirect, incidental, or consequential damages arising from the use of our services. Either party may terminate a project with prior notice, but fees for completed work must be paid in full.
          </p>
         
        </div>

        {/* Refund Policy */}
        <div ref={refundRef} className="shadow-lg rounded-lg p-8 ">
          <h1 className="text-3xl font-bold text-gray-200 mb-6">Refund and Cancellation Policy</h1>
          <p className="text-gray-200 mb-4">
          Clients may cancel a project before work begins for a full refund. However, once development has started, cancellation may incur fees based on the work completed. No refunds will be issued for completed work or delivered software. If a project is terminated early, a partial refund may be granted based on progress. Refunds will not be issued for changes of mind after project commencement, delays caused by the client, or third-party service failures. If you wish to request a refund or cancellation, please contact us at [Your Contact Email]. We strive to maintain fairness and transparency in our policies to ensure a smooth experience for our clients.

For any inquiries, please reach out to us at ranjunior05@gmail.com.

          </p>
         
        </div>
      </div>
    </div>
  );
};

export default PoliciesPage;
