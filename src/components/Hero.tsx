import React, { useEffect } from 'react';

const Hero = () => {
  useEffect(() => {
    document.title = 'FinGo - AI-Powered Financial Management';
  }, []);

  return (
    <div className="bg-black text-white py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-12 md:mb-0">
            <div className="mb-6">
              <p className="text-sm mb-2">2M+ Users</p>
              <p className="text-sm">AI-Powered Financial Management for Small Businesses</p>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#FF69B4] to-[#FFB6C1] text-transparent bg-clip-text">
              Track,<br />
              Predict and<br />
              Optimize
            </h1>
            
            <p className="mb-8 text-lg">
              Streamline your financial management and boost cash flow with AI-powered insights
            </p>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="px-6 py-3 bg-gradient-to-r from-[#FF69B4] to-[#8B458B] rounded-full font-medium hover:opacity-90 transition-opacity">
                Start Free
              </button>
              <button className="px-6 py-3 border border-[#FF69B4] rounded-full font-medium hover:bg-[#8B458B] transition-colors">
                Explore Demo
              </button>
            </div>
          </div>
          
          <div className="md:w-1/2 flex justify-center md:justify-end relative">
            <div className="relative">
              <div className="absolute -left-24 top-12 bg-[#8B458B] rounded-lg px-4 py-2 shadow-lg flex items-center text-white">
                <div className="w-8 h-8 bg-[#FF69B4] rounded-full flex items-center justify-center text-white mr-2">
                  <span className="text-xs">£</span>
                </div>
                <span className="font-medium">2,000 GBP</span>
              </div>
              
              <div className="absolute -right-24 top-0 bg-[#8B458B] rounded-lg px-4 py-2 shadow-lg flex items-center text-white">
                <div className="w-8 h-8 bg-[#FF69B4] rounded-full flex items-center justify-center text-white mr-2">
                  <span className="text-xs">$</span>
                </div>
                <span className="font-medium">3,400 USD</span>
              </div>
              
              <div className="bg-gradient-to-br from-[#FF69B4] to-[#8B458B] rounded-3xl p-1 shadow-xl">
                <div className="bg-black rounded-3xl overflow-hidden w-64 md:w-72">
                  <div className="bg-[#8B458B] p-4 border-b border-[#FF69B4]">
                    <p className="text-white font-medium">Send Payment</p>
                  </div>
                  
                  <div className="p-4 text-white">
                    <div className="mb-4">
                      <p className="text-xs text-gray-300 mb-1">PAYMENT AMOUNT</p>
                      <div className="flex justify-between items-center bg-[#8B458B] p-2 rounded-lg">
                        <span className="font-medium">2,000</span>
                        <span className="text-sm bg-[#FF69B4] px-2 py-1 rounded">GBP</span>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <p className="text-xs text-gray-300 mb-1">RECIPIENT RECEIVES</p>
                      <div className="flex justify-between items-center bg-[#8B458B] p-2 rounded-lg">
                        <span className="font-medium">3,400</span>
                        <span className="text-sm bg-[#FF69B4] px-2 py-1 rounded">USD</span>
                      </div>
                    </div>
                    
                    <div className="mb-4 bg-[#8B458B] p-2 rounded-lg flex justify-between items-center">
                      <span className="text-sm">Processing fee</span>
                      <span className="text-sm font-medium">1.50% only</span>
                    </div>
                    
                    <button className="w-full bg-gradient-to-r from-[#FF69B4] to-[#8B458B] py-3 rounded-full hover:opacity-90 transition-opacity">
                      Send Instantly
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;