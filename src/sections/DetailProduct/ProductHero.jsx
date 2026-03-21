import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

function ProductHero({ product, activeVariantId, setActiveVariantId }) {
  const activeVariant = product.variants.find(v => v.id === activeVariantId);

  return (
    <section className="relative min-h-screen bg-white text-black overflow-hidden pt-32 pb-15 px-6 lg:px-16">
      
      {/* faixas */}
      <div className="absolute top-0 right-0 h-full w-26 flex z-20 drop-shadow-xl">
        {product.variants?.map((variant) => (
          <button 
            key={variant.id} 
            onClick={() => setActiveVariantId(variant.id)}
            className={`h-full flex-1 relative group transition-all duration-500 cursor-pointer shadow-[inset_0_0_25px_rgba(0,1,0,1)] ${
              activeVariantId === variant.id ? 'flex-[2]' : 'hover:flex-[1.5]'
            }`}
          >
            {/* cor da faixa */}
            <div className={`h-full w-full ${variant.color} transition-opacity ${
              activeVariantId === variant.id ? 'opacity-100' : 'opacity-80 group-hover:opacity-100'
            }`} />
            
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
              <motion.div
                initial={{ opacity: 0, x: 10 }}
                animate={{ 
                  opacity: activeVariantId === variant.id ? 1 : 0, 
                  x: activeVariantId === variant.id ? 0 : 10 
                }}
                className="mb-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
              >
                <ChevronRight className="text-white w-8 h-8 animate-bounce" />
              </motion.div>

              {/* fragrância */}
              <span className={`whitespace-nowrap [writing-mode:vertical-lr] rotate-180 text-white font-semibold transition-opacity duration-300 tracking-normal uppercase ${
                activeVariantId === variant.id ? 'opacity-100 text-lg' : 'opacity-0 group-hover:opacity-100'
              }`}>
                {variant.label}
              </span>
            </div>
          </button>
        ))}
      </div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16 relative z-10 pr-24">
        {/* Troca de imagens */}
        <div className="w-full md:w-1/2 flex justify-center items-center h-[500px] relative">
          <AnimatePresence mode="wait">
            <motion.img 
              key={activeVariant.id}
              initial={{ opacity: 0, x: 40, scale: 0.8 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -40, scale: 0.8 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              src={activeVariant.image} 
              className="absolute w-auto h-[450px] md:h-[530px] mb-8 object-contain drop-shadow-2xl"
            />
          </AnimatePresence>
        </div>

        {/* Texto */}
        <div className="w-full md:w-1/2 font-teiu text-teiu-deep-blue">
           <span className="font-medium text-xl mb-4 block uppercase tracking-tighter">{product.category}</span>
           <h1 className="text-6xl md:text-8xl font-teiu font-extrabold mb-4 leading-none">{product.title}</h1>
           <p className="text-5xl font-bold leading-tight">{product.tagline}</p>
        </div>
      </div>
    </section>
  );
}

export default ProductHero;