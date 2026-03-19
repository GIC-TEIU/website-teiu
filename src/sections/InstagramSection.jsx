import React, { useEffect } from 'react';

function InstagramSection() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://elfsightcdn.com/platform.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <section className="relative w-full py-20 px-4 md:px-16 overflow-hidden">
      <div className="max-auto relative z-10">
        <div className="flex justify-between items-center mb-10 px-4">
          <h2 className="text-3xl font-bold text-white font-teiu tracking-tight">
            Nosso Instagram
          </h2>
          <a 
            href="https://www.instagram.com/teiuoficial/"
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-medium border border-white rounded-full px-6 py-2 text-white hover:bg-white hover:text-teiu-secondary-light transition-all shadow-md font-teiu"
          >
            Ver Instagram
          </a>
        </div>

        <div className="rounded-[30px] overflow-hidden shadow-2xl bg-white/5 backdrop-blur-md p-4 border border-white/10">
          <div 
            className="elfsight-app-4e350cdb-802b-4f5d-823c-2a7dbc8acaa4" 
            data-elfsight-app-lazy
          ></div>
        </div>
      </div>
    </section>
  );
}

export default InstagramSection;