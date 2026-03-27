import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const atletas = [
  {
    id: 1,
    nome: 'Diogo Cruz',
    texto: 'Atleta Teiú Adventure',
    esporte: 'PILOTO DE KART',
    img: '/assets/img/piloto.png', 
  },
  {
    id: 2,
    nome: 'Vanderlan Bonfim',
    texto: 'Atleta Teiú Adventure',
    esporte: 'CORREDOR',
    img: '/assets/img/corredor.png',
  },
  {
    id: 3,
    nome: 'José Luiz Marinho',
    texto: 'Atleta Teiú Adventure',
    esporte: 'TRIATLETA',
    img: '/assets/img/triatleta.png',
  },
  {
    id: 4,
    nome: 'Ana Silva',
    texto: 'Atleta Teiú Adventure',
    esporte: 'CICLISTA',
    img: '/assets/img/multidao-ciclistas.jpg', 
  },
  {
    id: 4,
    nome: 'Stéfani',
    texto: 'Atleta Teiú Adventure',
    esporte: 'CICLISTA',
    img: '/assets/img/multidao-ciclistas.jpg',
  },
  {
    id: 4,
    nome: 'Andersen',
    texto: 'Atleta Teiú Adventure',
    esporte: 'CICLISTA',
    img: '/assets/img/multidao-ciclistas.jpg', 
  }
  
];

function AdventureAthletes() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (atletas.length <= 3) return; // Se tiver 3 ou menos, não precisa animar

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 3) % atletas.length);
    }, 5000); 

    return () => clearInterval(interval); 
  }, []);

  const getVisibleAthletes = () => {
    if (atletas.length <= 3) return atletas;
    
    return [
      atletas[currentIndex % atletas.length],
      atletas[(currentIndex + 1) % atletas.length],
      atletas[(currentIndex + 2) % atletas.length],
    ];
  };

  const visibleAthletes = getVisibleAthletes();

  return (
    <section className="w-full pt-16 pb-12 px-6 lg:px-20 container mx-auto max-w-[1400px]">
      <h2 className="text-white text-3xl md:text-4xl font-bold mb-8">
        Nossos Atletas
      </h2>

      <AnimatePresence mode="wait">
        <motion.div 
          key={currentIndex} 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {visibleAthletes.map((atleta) => (
            <div key={atleta.id} className="flex flex-col h-full group cursor-pointer shadow-lg">
              {/* Imagem do Atleta com de Texto */}
              <div className="relative w-full aspect-[3/4] overflow-hidden rounded-t-sm bg-[#003366]">
                <img 
                  src={atleta.img} 
                  alt={atleta.nome}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-transparent pointer-events-none" />
                
                {/* Texto Superior (Nome) */}
                <div className="absolute top-6 left-6 text-white drop-shadow-md">
                  <h3 className="text-3xl lg:text-4xl font-bold leading-none tracking-tight mb-1 w-2/3">
                    {atleta.nome}
                  </h3>
                  <p className="text-sm font-medium opacity-90 leading-tight w-2/3">
                    {atleta.texto}
                  </p>
                </div>
              </div>

              {/* Faixa Inferior (Esporte) */}
              <div className="bg-[#009FE3] py-2 px-4 flex justify-end rounded-b-sm">
                <span className="text-white font-bold text-xs tracking-wider">
                  {atleta.esporte}
                </span>
              </div>
            </div>
          ))}
        </motion.div>
      </AnimatePresence>
    </section>
  );
}

export default AdventureAthletes;