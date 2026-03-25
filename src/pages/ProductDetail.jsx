import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { useLocation, useParams } from "react-router-dom";
import { produtosTeiuAgrupados } from "../mocks/Products";
import ProductHero from "../sections/DetailProduct/ProductHero";
import ProductInfo from "../sections/DetailProduct/ProductInfo";
import ProductSpecs from "../sections/DetailProduct/ProductSpecs";
import Navbar from "../components/navbar";
import Footer from "../components/Footer";

function ProductDetail() {
  const { id } = useParams();
  const location = useLocation();
  const produto = produtosTeiuAgrupados.find((p) => p.id === Number(id));

  const infoRef = useRef(null);
  const [landed, setLanded] = useState(false);

  const { scrollYProgress } = useScroll();

  const yImage     = useTransform(scrollYProgress, [0, 0.45], [25, 100]);
  const xImage     = useTransform(scrollYProgress, [0, 0.45], [-350, 450]);
  const scaleImage = useTransform(scrollYProgress, [0, 0.45], [1, 0.7]);

  const borderRadiusBg = useTransform(scrollYProgress, [0, 0.2], ["0%", "50%"]);
  const opacityBg      = useTransform(scrollYProgress, [0, 0.3], [0.1, 0]);

  useEffect(() => {
  const handleScroll = () => {
    if (!infoRef.current) return;
    const rect = infoRef.current.getBoundingClientRect();
    setLanded(rect.top < window.innerHeight * 0.5);
  };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); 
    return () => window.removeEventListener("scroll", handleScroll);
  }, [id]);

  useEffect(() => {
    window.scrollTo(0, 0);
    setLanded(false);
  }, [id]);

  const initialVariantId = location.state?.variantId || produto?.defaultVariantId;
  const [activeVariantId, setActiveVariantId] = useState(initialVariantId);

  useEffect(() => {
    window.scrollTo(0, 0);
    setLanded(false);
  }, [id]);

  if (!produto)
    return (
      <div className="min-h-screen flex items-center justify-center font-teiu text-2xl">
        Produto não encontrado.
      </div>
    );

  const activeVariant =
    produto.variants.find((v) => v.id === activeVariantId) || produto.variants[0];

  return (
    <>
      <Navbar />
      <main className="relative bg-white min-h-[150vh]">

        <div className="fixed inset-0 pointer-events-none z-50 flex items-center justify-center">
          <motion.img
            src={activeVariant.image}
           animate={{ 
              opacity: landed ? 0 : 1,
              scale: landed ? 0.8 : 1,
            }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            style={{
              y: yImage,
              x: xImage,
              scale: scaleImage,
              filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.15))",
            }}
            className="w-auto h-[500px] object-contain will-change-transform"
          />
        </div>

        <motion.div
          className="fixed inset-0 bg-blue-100 -z-10"
          style={{ borderRadius: borderRadiusBg, opacity: opacityBg }}
        />

        <ProductHero
          product={produto}
          activeVariantId={activeVariantId}
          setActiveVariantId={setActiveVariantId}
          hideImage={true}
        />

        <div className="h-[20vh]" />

        <div ref={infoRef}>
          <ProductInfo
            usage={produto.usage}
            image={activeVariant.image}
            landed={landed}
          />
        </div>

        {produto.specs && (
          <ProductSpecs
            specs={produto.specs}
            activeColor={activeVariant.textColor}
          />
        )}
      </main>

      <div className="w-full bg-gradient-to-r from-[#009FE3] to-[#03479A]">
        <Footer />
      </div>
    </>
  );
}

export default ProductDetail;