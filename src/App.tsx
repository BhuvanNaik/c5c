import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProblemStatement from './components/ProblemStatement';
import TargetUsers from './components/TargetUsers';
import Features from './components/Features';
import TechStack from './components/TechStack';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#182e4d] to-black">
      <Navbar />
      <Hero />
      <ProblemStatement />
      <TargetUsers />
      <Features />
      <TechStack />
      <Footer />
    </div>
  );
}

export default App;