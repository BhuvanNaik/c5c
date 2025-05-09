import React from 'react';
import { CircleDollarSign } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-black text-white py-4 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <CircleDollarSign className="h-8 w-8 text-[#289dbc]" />
          <span className="text-2xl font-bold">FinGo</span>
        </div>
        
        <div className="hidden md:flex space-x-8">
          <a href="#" className="hover:text-[#289dbc] transition-colors">Products</a>
          <a href="#" className="hover:text-[#289dbc] transition-colors">Solutions</a>
          <a href="#" className="hover:text-[#289dbc] transition-colors">Pricing</a>
        </div>
        
        <div className="flex space-x-4">
          <button className="px-4 py-2 rounded-full border border-[#289dbc] hover:bg-[#094089] transition-colors">
            Log In
          </button>
          <button className="px-4 py-2 bg-gradient-to-r from-[#094089] to-[#289dbc] text-white rounded-full hover:opacity-90 transition-opacity">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;