import React from "react";

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <div className="max-w-3xl bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Terms and Conditions</h1>
        <p className="text-gray-600 mb-4">
          Welcome to <strong>RAN Software Solutions</strong> ("Company," "we," "our," or "us"). By accessing our website or using our software development services, you agree to abide by these Terms and Conditions. If you do not agree, please do not use our services. Our company specializes in providing high-quality software solutions, including website and mobile application development, maintenance, and consultancy. Each project is tailored to meet the specific needs of our clients, ensuring an efficient and productive experience.
        </p>
        <p className="text-gray-600 mb-4">
          Clients engaging with our services are responsible for providing clear project requirements, ensuring timely communication, and supplying necessary assets for development. Payments must be made according to the agreed-upon schedule, and any delays may result in service suspension. Once work has commenced, no refunds will be provided. Intellectual property rights for custom software belong to the client upon full payment, while we retain the right to use generic code, libraries, or frameworks for future projects.
        </p>
        <p className="text-gray-600 mb-4">
          We shall not be held liable for indirect, incidental, or consequential damages arising from the use of our services. Either party may terminate a project with prior notice, but fees for completed work must be paid in full. 
        </p>
      </div>
    </div>
  );
};

export default TermsAndConditions;
