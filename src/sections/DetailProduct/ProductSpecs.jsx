import React from 'react';
import { motion } from 'framer-motion';

function ProductSpecs({ specs, activeColor }) {
  return (
    <section className="bg-white py-20 px-12 lg:px-24 font-teiu">
      <div className="max-w-xl flex flex-col gap-8 text-teiu-deep-blue">
        {specs.map((item, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="flex flex-row items-start gap-5"
          >
            <span 
              className="text-7xl md:text-8xl font-black leading-[0.8] tracking-tighter"
              style={{ color: activeColor }} 
            >
              {item.value}
            </span>

            <div className="flex flex-col mt-1">
              <span className="text-xl md:text-2xl font-bold uppercase leading-[1.1] max-w-[180px] text-left">
                {item.label}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default ProductSpecs;