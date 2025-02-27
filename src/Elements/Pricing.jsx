import React, { useState } from "react";
import { FaEnvelope, FaUser, FaCommentDots, FaPlus, FaMinus } from "react-icons/fa";

function AskUs() {
  const [openIndex, setOpenIndex] = useState(null);

  const questions = [
    { q: "What services do you offer?", a: "We offer Web Development, Digital Marketing, and Branding services." },
    { q: "How can I contact you?", a: "You can reach us via email at ranjunior05@gmail.com or call us at +91 9789057604" },
    { q: "Do you offer custom solutions?", a: "Yes! We provide tailored solutions based on your business needs." },
    { q: "What is your pricing model?", a: "Our pricing is project-based and varies depending on complexity and requirements." },
    { q: "How long does a project take?", a: "Project duration depends on scope, but we always aim for timely delivery." },
  ];

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="p-10 bg-black text-white text-center">
      {/* Title & Description */}
      <div className="mb-6">
        <h2 className="text-4xl font-bold">Ask Us   <span className="text-blue-500">Anything</span></h2>
        
      </div>

      {/* FAQ Section */}
      <div className="max-w-3xl mx-auto text-left space-y-4">
        {questions.map((item, index) => (
          <div
            key={index}
            className={`pb-3 p-5 rounded-lg transition duration-300 ${
              openIndex === index ? "bg-blue-800" : "hover:bg-gray-800"
            }`}
          >
            <button
              onClick={() => toggleQuestion(index)}
              className="w-full flex justify-between items-center text-lg font-semibold py-2 focus:outline-none transition duration-300 hover:text-blue-400"
            >
              {item.q}
              {openIndex === index ? <FaMinus className="text-blue-500" /> : <FaPlus className="text-white" />}
            </button>
            {openIndex === index && <p className="mt-2 text-gray-300">{item.a}</p>}
          </div>
        ))}
      </div>

      
   
    </section>
  );
}

export default AskUs;
