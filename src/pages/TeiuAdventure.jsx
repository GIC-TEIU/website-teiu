import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AdventureContent from '../sections/TeiuAdventure/AdventureContent';
import AdventureHero from '../sections/TeiuAdventure/AdventureHero';
import AdventureImpactText from '../sections/TeiuAdventure/AdventureImpactText';
import AdventureVideo from '../sections/TeiuAdventure/AdventureVideo';
import AdventureAthletes from '../sections/TeiuAdventure/AdventureAthletes';
import AdventureEvents from '../sections/TeiuAdventure/AdventureEvents';

function TeiuAdventure() {
  return (
    <div className="min-h-screen flex flex-col bg-white overflow-x-hidden">
      <Navbar />
      
      <main className="flex-grow w-full">
        <AdventureHero />
        <AdventureImpactText />
        <AdventureContent />
        <AdventureVideo />

        <div className="relative w-full bg-gradient-to-b  from-[#009FE3] to-[#03479A] overflow-hidden">
          <div 
            className="absolute inset-0 z-0 opacity-30 pointer-events-none"
            style={{
              backgroundImage: "url('/assets/img/coracao.png')", 
              backgroundSize: '150%', 
              backgroundPosition: 'center ', 
              backgroundRepeat: 'no-repeat'
            }}
          />

          <div className="relative z-10">
            <AdventureAthletes />
            <AdventureEvents />
            <Footer />
          </div>

        </div>
      </main>
    </div>
  );
}

export default TeiuAdventure;