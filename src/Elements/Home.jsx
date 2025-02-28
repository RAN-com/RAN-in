import React, { useState, useEffect } from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

function Hero() {
  // Animated Stats Logic
  const statsData = [
    { target: 6, text: "Projects" },
    { target: 10, text: "Clients" },
  ];
  const [counts, setCounts] = useState(statsData.map(() => 0));

  useEffect(() => {
    const intervals = statsData.map((stat, index) => {
      return setInterval(() => {
        setCounts((prevCounts) => {
          const newCounts = [...prevCounts];
          if (newCounts[index] < stat.target) {
            newCounts[index] += 1;
          }
          return newCounts;
        });
      }, 100);
    });

    return () => intervals.forEach(clearInterval);
  }, []);

  return (
    <section className="flex flex-col p-6 md:p-20 min-h-screen w-full justify-between ">
      
      {/* Section 1: Title + Social Media & Button */}
      <div className="flex flex-col md:flex-row items-center justify-between w-full">
        
        {/* Left: Title & Button */}
        <div className="flex flex-col space-y-3 text-center md:text-left">
          <h2 className="text-4xl md:text-7xl font-bold text-white leading-tight font-serif">
            Bigger, <br className="hidden md:block"/> Bolder and <br className="hidden md:block "/> Better.
          </h2>

          {/* Social Media Icons */}
         
        </div>

        {/* Right: Message & Button */}
        <div className="flex flex-col py-10 w-96  border-b border-gray-700 items-center md:items-start space-y-4 text-center md:text-left">
          <p className="text-lg max-w-80 text-gray-300">
            Custom Software Development – Tailored applications to meet specific business needs. <br/>
            System Integration – Connecting different software for seamless operation. <br/>
            Automation & Optimization – Enhancing efficiency by reducing manual tasks.
          </p>

          {/* Button with Hover Effect */}
          <button className="relative px-6 py-3 text-white transition duration-300 border border-white hover:bg-white hover:text-black w-fit rounded-lg group">
            Learn More
            </button>
        </div>
      </div>

      {/* Section 2: Contact & Animated Stats */}
      <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left space-y-8 md:space-y-0">
      <div className="flex justify-center md:justify-start gap-4 ">
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
                className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-800 text-white text-2xl hover:bg-gray-600 transition"
              >
                {icon}
              </a>
            ))}
          </div>
        {/* Animated Stats */}
        <div className="flex  justify-center gap-12 md:gap-1">
          {statsData.map(({ text }, index) => (
            <div key={index} className="text-center">
              <p className="text-5xl md:text-7xl font-bold text-white">
                {counts[index]}+
              </p>
              <p className="text-lg md:text-2xl text-gray-300">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;
