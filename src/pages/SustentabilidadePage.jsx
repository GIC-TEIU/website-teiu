import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import RodaSustentabilidade from '../components/RodaSustentabilidade';

const SustentabilidadePage = () => {
  return (
    <div className="bg-white flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative w-full h-[80vh] md:h-[100vh] flex flex-col items-center justify-center text-center"> 
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img 
            src="/assets/img/capa-sustentabilidade.png" 
            alt="Natureza e Sustentabilidade" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      
      <RodaSustentabilidade />

      <div className="w-full bg-gradient-to-r from-[#009FE3] to-[#03479A]">
          <Footer />
      </div>
    </div>
  );
};

export default SustentabilidadePage;