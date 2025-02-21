import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/RAN logo.png";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav
      style={{ fontFamily: "Montserrat, sans-serif" }}
      className="flex items-center justify-between px-6 py-4 bg-white shadow-md"
    >
      {/* Left Side - Logo */}
      <div className="text-xl">
        <Link to="/">
          <img src={logo} className="w-24 h-auto" alt="RAN Logo" />
        </Link>
      </div>

      {/* Center - Navigation Links (Desktop) */}
      <ul className="hidden md:flex space-x-6 text-gray-700 font-bold">
        <li>
          <Link
            to="/"
            className="relative hover:text-red-500 after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:w-0 after:h-[2px] after:bg-red-500 after:transition-all after:duration-300 hover:after:w-full"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/services"
            className="relative hover:text-red-500 after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:w-0 after:h-[2px] after:bg-red-500 after:transition-all after:duration-300 hover:after:w-full"
          >
            Services
          </Link>
        </li>
        <li>
          <Link
            to="/pricing"
            className="relative hover:text-red-500 after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:w-0 after:h-[2px] after:bg-red-500 after:transition-all after:duration-300 hover:after:w-full"
          >
            Pricing
          </Link>
        </li>
        
        {/* Dropdown Menu */}
        <li className="relative">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="relative hover:text-red-500 after:content-[''] after:absolute after:left-0 after:bottom-[-2px] 
              after:w-0 after:h-[2px] after:bg-red-500 after:transition-all after:duration-300 hover:after:w-full"
          >
            Company Policies ▼
          </button>

          {isDropdownOpen && (
            <ul className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-lg border border-gray-200 z-10">
              <li>
                <Link
                  to="/policy"
                  className="block px-4 py-2 hover:bg-red-500 hover:text-white transition"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/terms"
                  className="block px-4 py-2 hover:bg-red-500 hover:text-white transition"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  to="/refund"
                  className="block px-4 py-2 hover:bg-red-500 hover:text-white transition"
                  onClick={() => setIsDropdownOpen(false)}
                >
                   Refund Policy
                </Link>
              </li>
            </ul>
          )}
        </li>
      </ul>

      {/* Right Side - Buttons (Desktop) */}
      {/* <div className="hidden md:flex space-x-4">
        <Link to="/signup">
          <button className="px-4 py-2 border border-black text-black rounded-md hover:bg-black hover:text-white font-bold">
            Sign Up
          </button>
        </Link>
        <Link to="/demo">
          <button className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-800 font-bold">
            Get Demo
          </button>
        </Link>
      </div> */}

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-700 text-2xl">
          ☰
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-lg md:hidden">
          <ul className="flex flex-col space-y-4 p-4 text-gray-700 font-bold">
            <li>
              <Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
            </li>
            <li>
              <Link to="/services" onClick={() => setIsMenuOpen(false)}>Services</Link>
            </li>
            <li>
              <Link to="/pricing" onClick={() => setIsMenuOpen(false)}>Pricing</Link>
            </li>
            
            {/* Dropdown for Mobile */}
            <li className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="hover:text-red-500"
              >
                Company Policies ▼
              </button>

              {isDropdownOpen && (
                <ul className="mt-2 bg-white shadow-md rounded-lg border border-gray-200">
                  <li>
                    <Link
                      to="/privacy"
                      className="block px-4 py-2 hover:bg-red-500 hover:text-white transition"
                      onClick={() => { setIsDropdownOpen(false); setIsMenuOpen(false); }}
                    >
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/terms"
                      className="block px-4 py-2 hover:bg-red-500 hover:text-white transition"
                      onClick={() => { setIsDropdownOpen(false); setIsMenuOpen(false); }}
                    >
                      Terms & Conditions
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/security"
                      className="block px-4 py-2 hover:bg-red-500 hover:text-white transition"
                      onClick={() => { setIsDropdownOpen(false); setIsMenuOpen(false); }}
                    >
                      Security Policy
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            {/* Mobile Buttons */}
            <li>
              <Link to="/signup" onClick={() => setIsMenuOpen(false)}>
                <button className="w-full px-4 py-2 border border-black text-black rounded-md hover:bg-black hover:text-white font-bold">
                  Sign Up
                </button>
              </Link>
            </li>
            <li>
              <Link to="/demo" onClick={() => setIsMenuOpen(false)}>
                <button className="w-full px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-800 font-bold">
                  Get Demo
                </button>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
