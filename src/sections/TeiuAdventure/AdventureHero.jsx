import React from 'react';

function AdventureHero() {
  return (
    <section className="relative w-full min-h-[100vh] flex flex-col items-center justify-center bg-[#003366] overflow-hidden pt-24 pb-12">
      <div className="absolute inset-0 z-0">
        <img 
          src="/assets/img/capa-adventure.png"
          alt="Ciclistas Teiú Adventure"
          className="w-full h-full object-cover"
        />
        {/* <div className="absolute inset-0 bg-gradient-to-b from-[#003366]/80 via-transparent to-[#003366]" /> */}
      </div>

      {/* Conteúdo Central */}
      {/* <div className="relative z-10 container mx-auto px-6 flex flex-col items-center text-center">
        <div className="bg-white text-[#003366] font-bold py-3 px-8 rounded-full shadow-lg text-sm md:text-lg">
          Incentivando apaixonados por esportes e gerando bem-estar.
        </div>
      </div> */}
    </section>
  );
}

export default AdventureHero;