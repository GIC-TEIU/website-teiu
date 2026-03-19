import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import ProductCard from '../components/ProductCard';
import { produtosTeiu } from '../mocks/Products';

function ProductsSession() {
  return (
    <section className="relative -mt-12 z-20 bg-white p-12 px-16 rounded-t-[50px]">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-2xl font-semibold text-black tracking-tight">
            Nossos Produtos
          </h2>
          <button className="text-sm font-medium border rounded-full shadow-sm px-2 py-2 text-gray-500 hover:text-teiu-blue-medium">
            Ver todos
          </button>
        </div>

        {/* Container do Swiper com a classe 'group' para controlar o hover dos botões */}
        <div className="relative group">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            navigation={true}
            pagination={{ clickable: true }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 4 },
            }}
            className="pb-12" // Espaço para as bolinhas da paginação
          >
            {produtosTeiu.map((item) => (
              <SwiperSlide key={item.id} className="h-full">
                <ProductCard {...item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default ProductsSession;