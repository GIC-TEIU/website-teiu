import React from 'react';
import { motion } from 'framer-motion';

function ProductInfo({ usage, image }) {
  return (
    <section className="bg-transparent py-20 px-6 lg:px-20 font-teiu text-teiu-deep-blue">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-18">
        
        <motion.div 
          className="w-full md:w-1/2"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-lg leading-relaxed max-w-xl">
            <strong className="font-bold">Modo de uso:</strong> {usage}
          </p>
        </motion.div>
        
        <motion.div
        className="w-full md:w-1/2 flex justify-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <img src={image} alt="Uso do produto" className="w-auto h-[300px] md:h-[400px] object-contain drop-shadow-xl/50" />
        </motion.div>
      </div>
    </section>
  );
}

export default ProductInfo;