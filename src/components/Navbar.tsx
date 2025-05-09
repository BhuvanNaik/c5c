import React from 'react';
import { CircleDollarSign } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-black text-white py-4 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <CircleDollarSign className="h-8 w-8 text-[#9400D8]" />
          <span className="text-2xl font-bold">FinGo</span>
        </div>
        
        <div className="hidden md:flex space-x-8">
          <a href="#" className="hover:text-[#9400D8] transition-colors">Products</a>
          <a href="#" className="hover:text-[#9400D8] transition-colors">Solutions</a>
          <a href="#" className="hover:text-[#9400D8] transition-colors">Pricing</a>
        </div>
        
        <div className="flex space-x-4">
          <button className="px-4 py-2 rounded-full border border-[#8000BF] hover:bg-[#6A00A0] transition-colors">
            Log In
          </button>
          <button className="px-4 py-2 bg-gradient-to-r from-[#6A00A0] to-[#9400D8] text-white rounded-full hover:opacity-90 transition-opacity">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;