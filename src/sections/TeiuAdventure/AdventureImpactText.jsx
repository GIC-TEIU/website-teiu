import React, { useEffect } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';

const CursorBlinker = () => (
  <motion.span
    animate={{ opacity: [0, 1, 0] }}
    transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
    className="inline-block w-[3px] md:w-[5px] h-[1em] bg-[#003366] ml-1 align-middle -mt-1"
  />
);

function AdventureImpactText() {
  const baseText = "ESPORTE";
  
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayText = useTransform(rounded, (latest) => baseText.slice(0, latest));

  useEffect(() => {
    const controls = animate(count, baseText.length, {
      type: "tween",
      duration: 1.3, // Velocidade da digitação
      ease: "easeInOut",
      repeat: Infinity, // Faz a animação nunca parar
      repeatType: "reverse", // Faz o texto ser "apagado" antes de digitar de novo
      repeatDelay: 1.5,
    });
    
    return controls.stop;
  }, [count, baseText.length]);

  return (
    <section className="relative -mt-1 z-30 w-full py-20 md:py-28 bg-white flex justify-center items-center rounded-t-[50px]">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-[#eeb111] mb-4 uppercase">
            Transformando
          </h2>
          
          <h3 className="text-2xl md:text-4xl lg:text-5xl font-bold text-[#003366] uppercase flex flex-wrap justify-center items-center gap-x-2">
            <span>O amanhã através do</span>
            
            <span className="relative inline-flex items-center px-2 py-1 mx-1 min-w-[150px] md:min-w-[240px] justify-center">
              
              <span className="relative z-10 text-[#003366] flex items-center">
                <motion.span>{displayText}</motion.span>
                <CursorBlinker />
              </span>

              {/* Marca-texto amarelo que entra uma vez e fica no fundo */}
              <motion.span
                initial={{ width: "0%" }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeInOut", delay: 0.5 }}
                className="absolute bottom-1 md:bottom-2 left-0 h-[50%] md:h-[60%] bg-[#eeb111]/60 z-0"
              />
            </span>

          </h3>
        </motion.div>

      </div>
    </section>
  );
}

export default AdventureImpactText;