import React from 'react';
import { CircleDollarSign } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-black text-white py-4 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <CircleDollarSign className="h-8 w-8 text-[#558B2F]" />
          <span className="text-2xl font-bold">FinGo</span>
        </div>
        
        <div className="hidden md:flex space-x-8">
          <a href="#" className="hover:text-[#558B2F] transition-colors">Products</a>
          <a href="#" className="hover:text-[#558B2F] transition-colors">Solutions</a>
          <a href="#" className="hover:text-[#558B2F] transition-colors">Pricing</a>
        </div>
        
        <div className="flex space-x-4">
          <button className="px-4 py-2 rounded-full border border-[#558B2F] hover:bg-[#558B2F] transition-colors">
            Log In
          </button>
          <button className="px-4 py-2 bg-gradient-to-r from-[#558B2F] to-[#41691A] text-white rounded-full hover:opacity-90 transition-opacity">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar