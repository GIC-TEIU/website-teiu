import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { sustentabilidadeItems } from '../mocks/sustentabilidadeDados';

const RodaSustentabilidade = () => {
  const sectionRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  });

  const rotateWheel = useTransform(scrollYProgress, [0, 1], [0, -162]);

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    const n = sustentabilidadeItems.length;
    const index = Math.min(Math.floor(latest * n), n - 1);
    setActiveIndex(index);
  });

  const wheelGradient = `conic-gradient(${sustentabilidadeItems
    .map((item, i) => `${item.color} ${i * 90}deg ${(i + 1) * 90}deg`)
    .join(', ')})`;

  return (
    <section ref={sectionRef} className="relative min-h-[100vh] bg-white font-teiu w-full">
      <div className="sticky top-0 h-screen w-full flex flex-col bg-white overflow-hidden">

        {/* Cabeçalho */}
        <div className="text-center pt-12 px-6 shrink-0">
          <h2 className="text-3xl md:text-4xl font-extrabold text-black mb-3">
            Sustentabilidade na Teiú
          </h2>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
            praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias.
          </p>
        </div>

        {/* Conteúdo principal: roda à esquerda, texto à direita */}
        <div className="flex-1 flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16 px-6 py-8">

          {/* roda*/}
          <div
            className="
              relative flex items-center justify-center shrink-0
              w-[280px] h-[280px]
              sm:w-[340px] sm:h-[340px]
              md:w-[420px] md:h-[420px]
            "
          >
            <motion.div
              style={{ rotate: rotateWheel }}
              className="relative w-full h-full rounded-full shadow-2xl"
            >
              <div
                className="absolute inset-0 rounded-full"
                style={{ background: wheelGradient }}
              />

              <div
                className="
                  absolute bg-white rounded-full z-10
                  inset-[70px]
                  sm:inset-[85px]
                  md:inset-[105px]
                "
              />

              {sustentabilidadeItems.map((item, index) => {
                const Icon = item.icon;
                const angleDeg = -90 + index * 90 + 45;
                const angleRad = (angleDeg * Math.PI) / 180;
                const r = 35; 

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
                    <Icon
                      className="
                        text-white
                        w-6 h-6
                        sm:w-7 sm:h-7
                        md:w-9 md:h-9
                      "
                      strokeWidth={2}
                    />
                  </div>
                );
              })}
            </motion.div>
          </div>

          {/*textos */}
          <div className="relative w-full max-w-md min-h-[180px] md:min-h-[220px] flex items-center">
            <AnimatePresence mode="wait">
              {sustentabilidadeItems.map((item, index) =>
                activeIndex === index ? (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -24 }}
                    transition={{ duration: 0.35, ease: 'easeOut' }}
                    className="w-full flex flex-col gap-4 text-center md:text-left"
                  >
                    <span
                      className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight"
                      style={{ color: item.color }}
                    >
                      {item.title}
                    </span>
                    <p className="text-base md:text-lg leading-relaxed text-gray-700">
                      {item.description}
                    </p>
                  </motion.div>
                ) : null
              )}
            </AnimatePresence>
          </div>
        </div>

        <div className="flex justify-center gap-2 pb-6 shrink-0">
          {sustentabilidadeItems.map((item, index) => (
            <div
              key={item.id}
              className="rounded-full transition-all duration-300"
              style={{
                width: activeIndex === index ? '20px' : '8px',
                height: '8px',
                background: activeIndex === index ? item.color : '#D1D5DB',
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RodaSustentabilidade;