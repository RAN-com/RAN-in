import React from "react";
import { Link } from "react-router-dom";
import Logo from '../assets/RAN logo.png'

const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-300">
      {/* Logo */}
      <img src={Logo} alt="RAN Software Solutions Logo" className="w-40 h-auto mb-6" />
      
      {/* Text Content */}
      <div className="text-center p-6 rounded-2xl">
        <h1 className="text-8xl font-bold text-gray-800">RAN Software Solutions</h1>
        <p className="text-6xl text-gray-600 mt-8">Think, Plan, and Track</p>
        <p className="text-6xl text-gray-600 mt-2">All in One Place.</p>
      </div>

      {/* Buttons */}
      {/* <div className="mt-4 flex space-x-4">
        <Link to="/policy">
          <button className="px-4 py-2 border border-black text-black rounded-lg hover:bg-black hover:text-white font-bold">
            Policy
          </button>
        </Link>
        <Link to="/demo">
          <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-800 font-bold">
            Get Demo
          </button>
        </Link>
      </div> */}
    </div>
  );
};

export default Home;
