import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="p-8 bg-black border-t border-gray-700 text-white">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
        
        {/* Column 1 - About */}
        <div>
          <h2 className="text-xl font-bold mb-3">About Us</h2>
          <p className="text-gray-300">
            We provide top-notch services in software development and consulting.
          </p>
        </div>

        {/* Column 2 - Quick Links */}
        <div>
          <h2 className="text-xl font-bold mb-3">Links</h2>
          <ul className="text-gray-300 space-y-2">
            {["Home", "Services", "Q&A", "Contact"].map((link, index) => (
              <li key={index}>
                <a href="#" className="hover:text-blue-400 transition duration-300">{link}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3 - Subscribe */}
        <div>
          <h2 className="text-xl font-bold mb-3">Subscribe to Our Newsletter</h2>
          <form className="flex flex-col md:flex-row gap-2 justify-center md:justify-start">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 rounded-lg border border-gray-500 bg-transparent text-gray-300 w-full md:w-auto"
            />
            <button className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-800 transition duration-300">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Social Icons & Copyright */}
      <div className="flex flex-col md:flex-row justify-between items-center mt-6 border-t border-gray-700 pt-4">
        <p className="text-gray-400">&copy; 2025 MyWebsite. All rights reserved.</p>

        {/* Social Icons */}
        <div className="flex justify-center space-x-6 mt-4 md:mt-0">
          {[
            { icon: <FaFacebookF />, label: "Facebook" },
            { icon: <FaTwitter />, label: "Twitter" },
            { icon: <FaInstagram />, label: "Instagram" },
            { icon: <FaLinkedin />, label: "LinkedIn" },
          ].map(({ icon, label }, index) => (
            <a
              key={index}
              href="#"
              aria-label={label}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 text-white text-xl hover:bg-gray-600 transition duration-300"
            >
              {icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
