import React, { useState } from "react";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message Sent Successfully!");
    setFormData({ name: "", phone: "", email: "", message: "" });
  };

  return (
    <div className="p-10">
    <div className="p-6 max-w-lg mx-auto bg-transparent text-white p-8 rounded-lg shadow-lg border border-gray-500">
      <h2 className="text-2xl font-bold mb-6 text-center">Contact Us</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name Field */}
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full p-3 rounded-lg bg-transparent border border-gray-400 text-white placeholder-gray-300 focus:outline-none focus:border-blue-500"
        />

        {/* Phone Field */}
        <input
          type="tel"
          name="phone"
          placeholder="Your Phone Number"
          value={formData.phone}
          onChange={handleChange}
          required
          className="w-full p-3 rounded-lg bg-transparent border border-gray-400 text-white placeholder-gray-300 focus:outline-none focus:border-blue-500"
        />

        {/* Email Field */}
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full p-3 rounded-lg bg-transparent border border-gray-400 text-white placeholder-gray-300 focus:outline-none focus:border-blue-500"
        />

        {/* Message Field */}
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
          rows="4"
          className="w-full p-3 rounded-lg bg-transparent border border-gray-400 text-white placeholder-gray-300 focus:outline-none focus:border-blue-500"
        ></textarea>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 transition text-white font-bold py-3 rounded-lg"
        >
          Send Message
        </button>
      </form>
    </div></div>
  );
}

export default ContactForm;
