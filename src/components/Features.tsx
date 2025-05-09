import React from 'react';
import { FileText, Users, MessageSquare, TrendingUp, AlertTriangle } from 'lucide-react';
import BrainCircuit from './BrainCircuit';

const Features = () => {
  const features = [
    {
      icon: <FileText className="h-8 w-8" />,
      title: "Automated Invoice Tracking",
      description: "Fetches invoices from accounting tools, extracts details, categorizes as Paid, Due, or Overdue."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Group Users by Payment Status",
      description: "Enables segmented follow-ups (Paid, Due, Overdue)."
    },
    {
      icon: <MessageSquare className="h-8 w-8" />,
      title: "Automated Email/WhatsApp Reminders",
      description: "Reduces missed payments, improves cash flow."
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Cash Flow Insights",
      description: "AI forecasts trends, suggests better decisions."
    },
    {
      icon: <BrainCircuit className="h-8 w-8" />,
      title: "AI Chat (Agentic AI)",
      description: "Personalized financial advice based on user behavior."
    },
    {
      icon: <AlertTriangle className="h-8 w-8" />,
      title: "Debt Risk Alerts",
      description: "Detects risks and prioritizes payment suggestions."
    }
  ];

  return (
    <div className="py-16 px-6 md:px-12 bg-black">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white">Core Features</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-gradient-to-br from-[#6A00A0] to-[#9400D8] p-[1px] rounded-xl"
            >
              <div className="bg-black p-6 rounded-xl h-full">
                <div className="flex items-center mb-4">
                  <div className="mr-4 text-[#9400D8]">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                </div>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;