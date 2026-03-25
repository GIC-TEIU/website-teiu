import React, { useState, useEffect, useRef } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  animate,
} from "framer-motion";
import { useLocation, useParams } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { productsMock } from "../mocks/Products";
import Navbar from "../components/navbar";

function lerp(a, b, t) {
  return a + (b - a) * Math.max(0, Math.min(1, t));
}
function invlerp(a, b, v) {
  return (v - a) / (b - a);
}
function remap(inMin, inMax, outMin, outMax, v) {
  return lerp(outMin, outMax, invlerp(inMin, inMax, v));
}
function clamp01(t) {
  return Math.max(0, Math.min(1, t));
}

export default function ProductDetail() {
  const { id } = useParams();
  const location = useLocation();
  const produto = productsMock.find((p) => p.id === Number(id));

  const [activeVariantId, setActiveVariantId] = useState(
    location.state?.variantId || produto?.variants[0]?.id
  );

  const progressMV = useMotionValue(0); 
  const progressRef = useRef(0);         

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    progressRef.current = 0;
    progressMV.set(0);
  }, [id]);

  // Wheel → avança/recua o progresso suavemente
  useEffect(() => {
    const SPEED = 0.0012; // quão rápido 1 "clique" de scroll move o progresso

    const onWheel = (e) => {
      e.preventDefault();
      const next = clamp01(progressRef.current + e.deltaY * SPEED);
      progressRef.current = next;
      animate(progressMV, next, { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] });
    };

    // Touch
    let touchY = 0;
    const onTouchStart = (e) => {
      touchY = e.touches[0].clientY;
    };
    const onTouchMove = (e) => {
      e.preventDefault();
      const delta = touchY - e.touches[0].clientY;
      touchY = e.touches[0].clientY;
      const next = clamp01(progressRef.current + delta * SPEED * 2);
      progressRef.current = next;
      animate(progressMV, next, { duration: 0.3, ease: "easeOut" });
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: false });
    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
    };
  }, [progressMV]);

  const scaleImg = useTransform(
    progressMV,
    [0, 0.20, 0.42, 1],
    [1.25, 1, 0.9, 1.2]
  );

  // imagem desliza para direita
  const xImg = useTransform(
    progressMV,
    [0.28, 0.2],
    ["20vw", "-25vw"]
  );

  // Texto do Hero desaparece na fase 1
  const opacityHeroText = useTransform(progressMV, [0, 0.28], [1, 0]);
  const yHeroText = useTransform(progressMV, [0, 0.28], [0, -20]);

  // Modo de uso aparece durante a fase 2
  const opacityUsage = useTransform(progressMV, [0.38, 0.60, 0.9, 0.92], [0, 1, 1, 0]);
  
  const opacitySpecs = useTransform(progressMV, [0.85, 0.95], [0, 1]);
  const xSpecs = useTransform(progressMV, [0.85, 0.95], [-50, 0]);

  // Indicador de scroll some quando o usuário já scrollou
  const opacityScrollHint = useTransform(progressMV, [0, 0.08], [1, 0]);

  if (!produto)
    return (
      <div className="min-h-screen flex items-center justify-center font-teiu text-2xl">
        Produto não encontrado.
      </div>
    );

  const activeVariant =
    produto.variants.find((v) => v.id === activeVariantId) ||
    produto.variants[0];

  return (
    <div className="relative w-full h-screen overflow-hidden bg-white">
      <Navbar />

      {/*faixas de variação */}
      <div className="absolute top-0 right-0 h-full w-34 flex z-30 drop-shadow-xl">
        {produto.variants?.map((variant) => (
          <button
            key={variant.id}
            onClick={() => setActiveVariantId(variant.id)}
            className={`h-full flex-1 relative group transition-all duration-500 cursor-pointer
              shadow-[inset_0_0_25px_rgba(0,0,0,0.25)]
              ${activeVariantId === variant.id ? "flex-[2]" : "hover:flex-[1.5]"}`}
          >
            <div
                className={`h-full w-full transition-opacity
                  ${activeVariantId === variant.id
                    ? "opacity-100"
                    : "opacity-75 group-hover:opacity-100"}`}
                style={{ backgroundColor: variant.color }}
              />
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
              <motion.div
                animate={{
                  opacity: activeVariantId === variant.id ? 1 : 0,
                  x: activeVariantId === variant.id ? 0 : 10,
                }}
                className="mb-3"
              >
                <ChevronRight className="text-white w-6 h-6 animate-bounce" />
              </motion.div>
              <span className="whitespace-nowrap [writing-mode:vertical-lr] rotate-180 text-white font-semibold uppercase tracking-wider text-sm">
                {variant.label}
              </span>
            </div>
          </button>
        ))}
      </div>

      {/* tetxo principal do herop */}
      <motion.div
        className="absolute right-10 lg:right-32 top-1/2 -translate-y-1/2
                   w-5/12 font-teiu text-teiu-deep-blue z-10 pt-20 pr-4"
        style={{ opacity: opacityHeroText, y: yHeroText }}
      >
        <span className="font-medium text-md mb-4 block uppercase tracking-tighter">
          {produto.category}
        </span>
        <h1 className="text-6xl md:text-8xl font-extrabold mb-4 leading-none">
          {produto.title}
        </h1>
        <p className="text-5xl font-bold leading-tight">{produto.tagline}</p>
      </motion.div>

      {/* ── modo de uso */}
      <motion.div
        className="absolute left-10 lg:left-20 top-1/2 -translate-y-1/2
                   w-5/12 font-teiu text-teiu-deep-blue z-10 pt-20 pr-4"
        style={{ opacity: opacityUsage }}
      >
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
          Modo de uso
        </h2>
        <p className="text-xl leading-relaxed opacity-75">{produto.usage}</p>
      </motion.div>

      {/* ── imagem produto */}
      <div className="absolute inset-0 flex items-center justify-center
                      pointer-events-none z-20">
        <motion.img
          key={activeVariantId}
          src={activeVariant.image}
          alt={activeVariant.label}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          style={{
            scale: scaleImg,
            x: xImg,
            y: 80,
            filter: "drop-shadow(0 24px 48px rgba(0,0,0,0.18))",
          }}
          className="h-[520px] w-auto object-contain will-change-transform"
        />
      </div>

      {/* ── especificações*/}
      <motion.div
        className="absolute left-10 lg:left-32 top-1/2 -translate-y-1/2
                  w-5/12 font-teiu z-20 flex flex-col gap-8"
        style={{ opacity: opacitySpecs, x: xSpecs }}
      >
        {produto.specs.map((item, i) => (
          <div key={i} className="flex flex-row items-start gap-5">
            <span 
              className="text-7xl md:text-8xl font-black leading-[0.8] tracking-tighter"
              style={{ color: activeVariant.color }}
            >
              {item.value}
            </span>

            <div className="flex flex-col pt-1">
              <span className="text-xl md:text-2xl font-bold uppercase leading-[1.1] max-w-[180px] text-teiu-deep-blue text-left">
                {item.label}
              </span>
            </div>
          </div>
        ))}
      </motion.div>

      {/* ── scroll */}
      <motion.div
        className="absolute bottom-2 left-1/2 -translate-x-1/2 flex flex-col
                   items-center gap-2 font-teiu text-teiu-deep-blue text-xs
                   tracking-widest uppercase z-30"
        style={{ opacity: opacityScrollHint }}
      >
        <span>Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.4 }}
          className="w-px h-8 bg-current opacity-50"
        />
      </motion.div>
    </div>
  );
}