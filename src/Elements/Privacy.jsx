import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <div className="max-w-3xl bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Privacy Policy</h1>
        <p className="text-gray-600 mb-4">
          Your privacy is important to us, and this policy explains how we collect, use, and protect your personal data. We collect personal information such as names, email addresses, phone numbers, business details, and website usage data. This data helps us provide and improve our services, communicate updates, and comply with legal obligations.
        </p>
        <p className="text-gray-600 mb-4">
          We implement industry-standard security measures to safeguard personal information, though we cannot guarantee absolute security. We do not sell or share personal data with third parties except for necessary service providers or legal requirements. Users have the right to access, correct, or delete their personal data by contacting us.
        </p>
        <p className="text-gray-600 mb-6">
          This privacy policy may be updated periodically, and we will notify users of significant changes.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
