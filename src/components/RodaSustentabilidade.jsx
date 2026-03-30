import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { sustentabilidadeItems } from '../mocks/sustentabilidadeDados';

const RodaSustentabilidade = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const n = sustentabilidadeItems.length;
  const sliceAngle = 360 / n;

  useEffect(() => {
    if (n <= 1) return; 

    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % n);
    }, 4000); 

    return () => clearInterval(interval);
  }, [n]);

 
  const corInativa = "#C0DDB6"; 

  // fatia ativa fica com a cor verdadeira, as demais ficam neutras.
  const wheelGradient = `conic-gradient(${sustentabilidadeItems
    .map((item, index) => {
      const isAtivo = activeIndex === index;
      const colorToUse = isAtivo ? item.color : corInativa;
      return `${colorToUse} ${index * sliceAngle}deg ${(index + 1) * sliceAngle}deg`;
    })
    .join(', ')})`;

  const currentRotation = -(activeIndex * sliceAngle);

  return (
    <section className="relative bg-white font-teiu w-full py-16 md:py-20 overflow-hidden">
      
      <div className="w-full flex flex-col items-center max-w-[1400px] mx-auto">

        {/* Cabeçalho */}
        <div className="text-center px-6 shrink-0 z-20 mb-10 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-4xl text-[#003366] font-extrabold mb-4">
            Sustentabilidade na Teiú
          </h2>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
            praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias.
          </p>
        </div>

        <div className="w-full flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 lg:gap-24 px-6">
          
          {/* Container da Roda */}
          <div
            className="
              relative flex items-center justify-center shrink-0
              w-[240px] h-[240px]
              sm:w-[300px] sm:h-[300px]
              md:w-[360px] md:h-[360px]
              lg:w-[420px] lg:h-[420px]
            "
          >
            {/* Roda que Gira */}
            <motion.div
              animate={{ rotate: currentRotation }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="absolute inset-0 rounded-full shadow-2xl"
            >
              {/* Cores Dinâmicas da Roda */}
              <div
                className="absolute inset-0 rounded-full transition-all duration-500"
                style={{ background: wheelGradient }}
              />

              {/* Ícones viajando com a roda */}
              {sustentabilidadeItems.map((item, index) => {
                const Icon = item.icon;
                const angleDeg = -90 + (index * sliceAngle) + (sliceAngle / 2);
                const angleRad = (angleDeg * Math.PI) / 180;
                const r = 36; 
                
                const isAtivo = activeIndex === index;

                return (
                  <div
                    key={item.id}
                    className="absolute z-20"
                    style={{
                      left: `${50 + r * Math.cos(angleRad)}%`,
                      top: `${50 + r * Math.sin(angleRad)}%`,
                      transform: 'translate(-50%, -50%)',
                    }}
                  >
                    {/* Mantém os ícones em pé */}
                    <motion.div
                      animate={{ rotate: -currentRotation }}
                      transition={{ duration: 0.8, ease: "easeInOut" }}
                    >
                      <Icon
                        className={`${isAtivo ? 'text-white drop-shadow-md' : 'text-gray-400'} w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 transition-colors duration-500`}
                        strokeWidth={2}
                      />
                    </motion.div>
                  </div>
                );
              })}
            </motion.div>

            {/* Círculo branco interno */}
            <div
              className="
                absolute bg-white rounded-full z-40 shadow-[inset_0_4px_10px_rgba(0,0,0,0.1)]
                inset-[60px]
                sm:inset-[75px]
                md:inset-[90px]
                lg:inset-[105px]
              "
            />
          </div>

          {/* Textos que alternam */}
          <div className="relative w-full max-w-md min-h-[160px] md:min-h-[200px] flex items-center z-20">
            <AnimatePresence mode="wait">
              {sustentabilidadeItems.map((item, index) =>
                activeIndex === index ? (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4, ease: 'easeOut' }}
                    className="w-full flex flex-col gap-3 md:gap-4 text-center md:text-left"
                  >
                    <span
                      className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight drop-shadow-sm"
                      style={{ color: item.color }}
                    >
                      {item.title}
                    </span>
                    <p className="text-sm md:text-base lg:text-lg leading-relaxed text-gray-700">
                      {item.description}
                    </p>
                  </motion.div>
                ) : null
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Paginação */}
        <div className="flex justify-center items-center gap-3 shrink-0 z-20 mt-12">
          {sustentabilidadeItems.map((item, index) => (
            <button
              key={item.id}
              onClick={() => setActiveIndex(index)} 
              className="rounded-full transition-all duration-300 shadow-sm cursor-pointer"
              style={{
                width: activeIndex === index ? '28px' : '10px',
                height: '10px',
                background: activeIndex === index ? item.color : '#E5E7EB',
              }}
              aria-label={`Ir para ${item.title}`}
            />
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default RodaSustentabilidade;