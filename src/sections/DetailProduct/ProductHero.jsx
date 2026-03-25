import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

function ProductHero({ product, activeVariantId, setActiveVariantId }) {
  const activeVariant = product.variants.find(v => v.id === activeVariantId);
  const { scrollYProgress } = useScroll();
  const opacityText = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <section className="relative min-h-screen bg-white text-black pt-32 pb-15 px-6 lg:px-16">
      
      {/* Faixas Laterais */}
      <div className="absolute top-0 right-0 h-full w-26 flex z-20 drop-shadow-xl">
        {product.variants?.map((variant) => (
          <button 
            key={variant.id} 
            onClick={() => setActiveVariantId(variant.id)}
            className={`h-full flex-1 relative group transition-all duration-500 cursor-pointer shadow-[inset_0_0_25px_rgba(0,1,0,0.3)] ${
              activeVariantId === variant.id ? 'flex-[2]' : 'hover:flex-[1.5]'
            }`}
          >
            <div className={`h-full w-full ${variant.color} transition-opacity ${
              activeVariantId === variant.id ? 'opacity-100' : 'opacity-80 group-hover:opacity-100'
            }`} />
            
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
              <motion.div
                animate={{ 
                  opacity: activeVariantId === variant.id ? 1 : 0, 
                  x: activeVariantId === variant.id ? 0 : 10 
                }}
                className="mb-4"
              >
                <ChevronRight className="text-white w-8 h-8 animate-bounce" />
              </motion.div>
              <span className="whitespace-nowrap [writing-mode:vertical-lr] rotate-180 text-white font-semibold uppercase tracking-wider">
                {variant.label}
              </span>
            </div>
          </button>
        ))}
      </div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16 relative z-10 pr-24">
        
        <div className="w-full md:w-1/2 flex justify-center items-center h-[500px] relative">

          <motion.div 
            className="absolute w-64 h-64 -z-10 rounded-3xl"
            style={{ 
              rotate: useTransform(scrollYProgress, [0, 1], [0, 180]),
              scale: useTransform(scrollYProgress, [0, 0.5], [1, 1.5]),
              opacity: useTransform(scrollYProgress, [0, 0.3], [0.5, 0])
            }}
          />
        </div>

        {/* texto */}
        <motion.div 
          className="w-full md:w-1/2 font-teiu text-teiu-deep-blue"
          style={{ opacity: opacityText }}
        >
           <span className="font-medium text-xl mb-4 block uppercase tracking-tighter">{product.category}</span>
           <h1 className="text-6xl md:text-8xl font-teiu font-extrabold mb-4 leading-none">{product.title}</h1>
           <p className="text-5xl font-bold leading-tight">{product.tagline}</p>
        </motion.div>
      </div>
    </section>
  );
}

export default ProductHero;