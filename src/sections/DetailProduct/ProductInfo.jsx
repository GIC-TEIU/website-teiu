import React from "react";
import { motion } from "framer-motion";

function ProductInfo({ usage, image, landed }) {
  return (
    <section className="py-20 px-6 lg:px-20 font-teiu text-teiu-deep-blue">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start gap-18">
        <motion.div
          className="w-full md:w-1/2"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-lg leading-relaxed mx-auto px-4">
            <strong className="font-bold">Modo de uso:</strong> {usage}
          </p>
        </motion.div>
        <div className="w-full md:w-1/2 flex justify-center sticky top-[50vh] -translate-y-1/4 self-start">
          <motion.img
            src={image}
            alt="Uso do produto"
            animate={{ 
              opacity: landed ? 1 : 0,
              scale: landed ? 1 : 0.5,
            }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            style={{ filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.15))" }}
            className="w-auto h-[220px] md:h-[340px] object-contain"
          />
        </div>

      </div>
    </section>
  );
}

export default ProductInfo;