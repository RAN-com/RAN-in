import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import  logo from '../assets/RAN.png'
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Fixed Navbar with Dynamic Background */}
      <div
        className={`px-6 md:px-1 fixed top-0 left-0 w-full z-50 shadow-lg transition-all overfolw-hidden duration-300 ${
          isScrolled ? 'bg-blue-900' : 'bg-transparent'
        }`}
      >
        <nav className="p-6 border-b border-gray-700">
          <div className="container mx-auto flex justify-between items-center">
            {/* Logo */}
            <img src={logo} className='w-24 h-auto'/>

            {/* Desktop Menu */}
            <ul className="hidden md:flex space-x-6">
              {['Home', 'Services', 'Q&A','policy', 'Contact'].map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.toLowerCase()}
                    className="text-white relative transition-all duration-300 
                      after:content-[''] after:absolute after:left-0 after:bottom-[-2px] 
                      after:w-0 after:h-[2px] after:bg-blue-500 after:transition-all after:duration-300
                      hover:after:w-full"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white text-2xl md:hidden focus:outline-none"
            >
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>

          {/* Mobile Dropdown Menu */}
          {isOpen && (
            <ul className="md:hidden flex flex-col items-center space-y-4 py-4 bg-gray-800 rounded-lg mt-2">
              {['Home', 'Services', 'Q&A','policy', 'Contact'].map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.toLowerCase()}
                    className="text-white text-lg transition duration-300 hover:text-blue-400"
                    onClick={() => setIsOpen(false)}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </nav>
      </div>

      {/* To prevent content from being hidden behind the fixed navbar */}
      <div className="h-20"></div>
    </>
  );
}

export default Navbar;
