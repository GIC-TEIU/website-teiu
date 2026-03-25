import React, { useState, useEffect, useRef, useMemo } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useNavigate } from 'react-router-dom';
import { Navigation, Pagination } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {productsMock } from '../../mocks/Products';
import ProductCard from '../../components/products/ProductCard';

function ProductsSession() {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);
  const [isLeaving, setIsLeaving] = useState(false);
  const sectionRef = useRef(null);

 const produtosEmDestaque = useMemo(() => {
    return productsMock.filter(produto => 
        produto.variants.some(v => v.featured) 
    );
}, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.2 } 
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const exitStart = windowHeight * 0.85;

      if (rect.top > exitStart) {
        setIsLeaving(true);
      } else {
        setIsLeaving(false);
      }
    };

    const onScroll = () => requestAnimationFrame(handleScroll);
    window.addEventListener("scroll", onScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative -mt-24 z-30 bg-teiu-gray pt-10 pb-12 px-16 rounded-t-[50px] shadow-[0_-20px_50px_rgba(0,0,0,0.2)] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div 
          className={`flex justify-between items-center mb-10 px-4 transition-all duration-1000 ${
            visible && !isLeaving 
              ? "opacity-100 translate-y-0" 
              : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-2xl font-bold text-black tracking-tight font-teiu">
            Nossos Produtos
          </h2>
          <button 
            onClick={() => navigate('/produtos')} 
            className="flex items-center gap-2 text-sm font-medium border border-gray-300 rounded-full px-5 py-2 text-gray-700 hover:bg-white transition-all cursor-pointer shadow-sm font-teiu"
          >
            Ver todos <ChevronRight size={16} />
          </button>
        </div>

        <div 
          className={`relative group px-4 transition-all duration-1000 delay-200 ${
            visible && !isLeaving 
              ? "opacity-100 translate-y-0" 
              : "opacity-0 translate-y-10"
          }`}
        >
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            navigation={{
              nextEl: '.btn-next',
              prevEl: '.btn-prev',
            }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 4 },
            }}
            className="pb-16 !static" 
          >
            {produtosEmDestaque.map((item) => (
              <SwiperSlide 
                  key={item.id} 
                  className="h-full py-4"
              >
                  <ProductCard product={item} /> 
              </SwiperSlide>
              ))}
          </Swiper>

          <button className="btn-prev absolute left-[-20px] top-1/2 -translate-y-1/2 z-30 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-800 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-gray-50 cursor-pointer border border-gray-100">
            <ChevronLeft size={24} />
          </button>

          <button className="btn-next absolute right-[-20px] top-1/2 -translate-y-1/2 z-30 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-800 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-gray-50 cursor-pointer border border-gray-100">
            <ChevronRight size={24} />
          </button>
        </div>
      </div>

      <style>{`
        .swiper-button-next, .swiper-button-prev { display: none !important; }
        .swiper-pagination-bullet-active { background: #009FE3 !important; }
      `}</style>
    </section>
  );
}

export default ProductsSession;