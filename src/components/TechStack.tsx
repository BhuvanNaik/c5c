import React from 'react';
import { Server, Database, MessageCircle, MessageSquareShare, CreditCard } from 'lucide-react';
import BrainCircuit from './BrainCircuit';

const TechStack = () => {
  const technologies = [
    {
      icon: <Server className="h-6 w-6" />,
      name: "MERN Stack"
    },
    {
      icon: <MessageCircle className="h-6 w-6" />,
      name: "GPT-4o for AI Financial Insights"
    },
    {
      icon: <BrainCircuit className="h-6 w-6" />,
      name: "Uptiq AI Workbench"
    },
    {
      icon: <Database className="h-6 w-6" />,
      name: "Vector DBs"
    },
    {
      icon: <MessageSquareShare className="h-6 w-6" />,
      name: "Twilio & Meta APIs"
    },
    {
      icon: <CreditCard className="h-6 w-6" />,
      name: "Razorpay / PayPal APIs"
    }
  ];

  return (
    <div className="py-16 px-6 md:px-12 bg-black">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white">Our Technology Stack</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-8">
          {technologies.map((tech, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-[#6A00A0] to-[#9400D8] p-[1px] rounded-lg"
            >
              <div className="flex flex-col items-center p-4 bg-black rounded-lg text-center h-full">
                <div className="mb-3 p-3 bg-[#4B0082] rounded-full text-[#9400D8]">
                  {tech.icon}
                </div>
                <span className="text-sm font-medium text-white">{tech.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStack;