import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import RodaSustentabilidade from '../sections/sustainability/RodaSustentabilidade';
import ExposeItem from '../sections/sustainability/ExposeItem';
import Stamp from '../sections/sustainability/Stamp';
import Features from '../sections/sustainability/Features';

const SustentabilidadePage = () => {
  return (
    <div className="bg-white flex flex-col">
      <Navbar />
      
      <div className="relative w-full h-[60vh] md:h-screen flex flex-col items-center justify-center text-center"> 
        <div className="absolute inset-0 z-0">
          <img 
            src="/assets/img/aguasanitariaverde.jpeg" 
            alt="Natureza e Sustentabilidade" 
            className="w-full h-full object-cover object-center" 
          />
          <div className="absolute inset-0 bg-black/10 md:bg-transparent"></div>
        </div>
      </div>
      <ExposeItem/>
      <Features/>
      <Stamp/>
      
      <RodaSustentabilidade />

      <div className="w-full bg-gradient-to-r from-[#009FE3] to-[#03479A]">
          <Footer />
      </div>
    </div>
  );
};

export default SustentabilidadePage;