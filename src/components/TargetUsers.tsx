import React from 'react';
import { Building2, UsersRound, Building, LineChart } from 'lucide-react';

const TargetUsers = () => {
  const users = [
    {
      icon: <Building2 size={32} />,
      title: "Small & Medium Enterprises",
      description: "Complete financial management solution for growing businesses"
    },
    {
      icon: <UsersRound size={32} />,
      title: "Freelancers & Consultants",
      description: "Simplified invoicing and payment tracking for independents"
    },
    {
      icon: <Building size={32} />,
      title: "Large Enterprises",
      description: "Seamless integration with QuickBooks and Zoho Books"
    },
    {
      icon: <LineChart size={32} />,
      title: "Accountants & Financial Advisors",
      description: "Advanced tools to better serve your clients"
    }
  ];

  return (
    <div className="py-16 px-6 md:px-12 bg-black">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white">Who It's For</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {users.map((user, index) => (
            <div 
              key={index} 
              className="bg-gradient-to-br from-[#6A00A0] to-[#9400D8] p-[1px] rounded-xl"
            >
              <div className="bg-black p-6 rounded-xl h-full">
                <div className="mb-4 text-[#9400D8]">{user.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-white">{user.title}</h3>
                <p className="text-gray-300">{user.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TargetUsers;