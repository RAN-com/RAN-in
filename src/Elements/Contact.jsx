import React, { useState } from "react";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validatePhone = (phone) => {
    return /^[0-9+\s-]+$/.test(phone);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!validateEmail(formData.email)) {
      alert("Please enter a valid email address.");
      return;
    }

    if (!validatePhone(formData.phone)) {
      alert("Please enter a valid phone number.");
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSuccessMessage("Message Sent Successfully!");
      setFormData({ name: "", phone: "", email: "", message: "" });

      setTimeout(() => setSuccessMessage(""), 3000);
    }, 2000);
  };

  return (
    <div className="p-10">
      <div className="p-6 max-w-lg mx-auto bg-transparent text-white p-8 rounded-lg shadow-lg border border-gray-500">
        <h2 className="text-3xl font-bold mb-6 text-center">Contact Us</h2>

        {successMessage && (
          <p className="text-green-400 text-center mb-4">{successMessage}</p>
        )}

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
            className={`w-full font-bold py-3 rounded-lg transition ${
              isSubmitting ? "bg-gray-500" : "bg-blue-500 hover:bg-blue-600"
            }`}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
