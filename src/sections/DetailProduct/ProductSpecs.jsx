import React from 'react';
import { motion } from 'framer-motion';

function ProductSpecs({ specs, activeColor }) {
  const items = [
    { value: specs.volumes, label: "Volumes disponíveis" },
    { value: specs.fragrancias, label: "Fragrâncias disponíveis" },
    { value: specs.especial, label: "Edição Especial" },
  ];

  return (
    <section className="bg-white py-20 px-12 lg:px-24 font-teiu">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center text-teiu-deep-blue">
        {items.map((item, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="flex flex-col items-center"
          >
            <span 
              className="text-8xl md:text-9xl font-black leading-none items-center"
              style={{ color: activeColor }} 
            >
              {item.value}
            </span>
            <span className="text-xl font-bold mt-4 uppercase max-w-[150px] leading-tight text-center">
              {item.label}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default ProductSpecs;