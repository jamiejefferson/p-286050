
import React, { useState, useEffect } from "react";
import { Home, Building, Info, Search } from "lucide-react";

export const NavigationBar: React.FC = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      
      // Set visible based on scroll direction
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      
      // Update previous scroll position
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-10 bg-white shadow-sm py-3 px-6 flex justify-between items-center transition-transform duration-300 ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="flex items-center space-x-8">
        <a 
          href="#" 
          className="flex items-center gap-1.5 text-gray-700 hover:text-[#E10A0A] transition-colors"
        >
          <Home size={18} />
          <span className="text-sm font-medium">Home</span>
        </a>
        <a 
          href="#" 
          className="flex items-center gap-1.5 text-gray-700 hover:text-[#E10A0A] transition-colors"
        >
          <Building size={18} />
          <span className="text-sm font-medium">Facilities</span>
        </a>
        <a 
          href="#" 
          className="flex items-center gap-1.5 text-gray-700 hover:text-[#E10A0A] transition-colors"
        >
          <Info size={18} />
          <span className="text-sm font-medium">About</span>
        </a>
      </div>
      <div className="flex items-center">
        <button className="flex items-center gap-1.5 text-gray-700 hover:text-[#E10A0A] transition-colors">
          <Search size={18} />
          <span className="text-sm font-medium">Search</span>
        </button>
      </div>
    </nav>
  );
};
