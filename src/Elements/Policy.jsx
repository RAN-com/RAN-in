import { FaCode, FaBullhorn, FaPaintBrush, FaLaptopCode, FaDesktop } from "react-icons/fa";

const services = [
  { name: "Software Development", tools: "Java, Python, C#", icon: <FaLaptopCode /> },
  { name: "PC Build", tools: "Hardware Setup, Custom Builds, Maintenance", icon: <FaDesktop /> },

  { name: "Web Development", tools: "React, Next.js, Node.js", icon: <FaCode /> },
  { name: "Digital Marketing", tools: "SEO, Google Ads, Analytics", icon: <FaBullhorn /> },
  { name: "Branding", tools: "Photoshop, Illustrator, Figma", icon: <FaPaintBrush /> },
];

// Mobile View Component
function MobileView() {
  return (
    <div className="md:hidden space-y-6">
      {services.map((service, index) => (
        <div key={index} className="bg-gray-800 p-6 rounded-xl shadow-lg flex items-center gap-4 hover:bg-gray-700 transition duration-300">
          <span className="text-4xl text-blue-400">{service.icon}</span>
          <div>
            <h3 className="text-2xl font-semibold relative pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-1 after:bg-blue-500">
              {service.name}
            </h3>
            <p className="text-gray-300">{service.tools}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

function Services() {
    const services = [
      { name: "Web Development", tools: "React, Next.js, Node.js", icon: <FaCode /> },
      { name: "Digital Marketing", tools: "SEO, Google Ads, Analytics", icon: <FaBullhorn /> },
      { name: "Branding", tools: "Photoshop, Illustrator, Figma", icon: <FaPaintBrush /> },
    ];
  
    return (
      <section className="p-10 w-full h-full bg-services bg-cover bg-center bg-black text-white text-center">
        
        {/* Title & Description */}
        <div className="mb-6">
        <h2 className="text-4xl font-bold">
    Our <span className="text-blue-500 font-semib">Services</span>
  </h2>
          
        </div>
        <MobileView/>
  
        {/* Full-Width Table Container */}
        <div className="w-full  hidden md:block  overflow-hidden">
          <table className="w-full table-auto border-collapse">
            <tbody>
              {services.map((service, index) => (
                <tr 
                  key={index} 
                  className="group hover:bg-gray-700/80 transition duration-300 relative overflow-hidden"
                >
                  {/* Service Name with Border Animation & Icon */}
                  <td className="relative p-6 border-b text-8xl font-bold flex items-center gap-4 justify-center cursor-pointer transition-all duration-300 ease-in-out transform group-hover:scale-105 group-hover:text-blue-400">
                    
                    {service.name}
                    {/* Border Animation */}
                    <span className="absolute left-0 bottom-0 w-0 h-1 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
                  </td>
  
                  {/* Tools Used Column */}
                  <td className="p-6 border-b text-gray-300 transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                    {service.tools}
                  </td>
                  <td className="p-6 border-b text-gray-300 transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                  <span className="text-4xl">{service.icon}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
  
      </section>
    );
  }
  export default Services