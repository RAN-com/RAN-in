import React from "react";

const RefundPolicy = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <div className="max-w-3xl bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Refund and Cancellation Policy</h1>
        <p className="text-gray-600 mb-4">
          Clients may cancel a project before work begins for a full refund. However, once development has started, cancellation may incur fees based on the work completed. No refunds will be issued for completed work or delivered software. If a project is terminated early, a partial refund may be granted based on progress.
        </p>
        <p className="text-gray-600 mb-4">
          Refunds will not be issued for changes of mind after project commencement, delays caused by the client, or third-party service failures. If you wish to request a refund or cancellation, please contact us at <strong>[Your Contact Email]</strong>.
        </p>
        <p className="text-gray-600 mb-6">
          We strive to maintain fairness and transparency in our policies to ensure a smooth experience for our clients. For any inquiries, please reach out to us at <strong>ranjunior05@gmail.com</strong>.
        </p>
      </div>
    </div>
  );
};

export default RefundPolicy;
