import React from 'react';
import { CircleDollarSign } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div className="flex items-center space-x-2 mb-6 md:mb-0">
            <CircleDollarSign className="h-8 w-8 text-[#FF69B4]" />
            <span className="text-2xl font-bold">FinGo</span>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8">
            <a href="#" className="hover:text-[#FF69B4] transition-colors">Home</a>
            <a href="#" className="hover:text-[#FF69B4] transition-colors">Features</a>
            <a href="#" className="hover:text-[#FF69B4] transition-colors">Solutions</a>
            <a href="#" className="hover:text-[#FF69B4] transition-colors">Pricing</a>
            <a href="#" className="hover:text-[#FF69B4] transition-colors">Contact</a>
          </div>
          
          <div className="mt-6 md:mt-0">
            <button className="px-6 py-3 bg-gradient-to-r from-[#FF69B4] to-[#8B458B] rounded-full font-medium hover:opacity-90 transition-opacity">
              Start Free
            </button>
          </div>
        </div>
        
        <div className="border-t border-[#8B458B] pt-8 text-center text-sm text-gray-400">
          <p className="mb-2">Team: Log2-Devs | JSS Science and Technology University, Mysore</p>
          <p>Project: CODE4Change 2025</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;