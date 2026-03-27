import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const eventos = [
  {
    id: 1,
    hashtag: '#RESET_RUN',
    img: '/assets/img/reset-run.png', 
  },
  {
    id: 2,
    hashtag: '#PEDALA_TEIU',
    img: '/assets/img/pedala-teiu.png', 
  },
  {
    id: 3,
    hashtag: '#2PEDALA_TEIU',
    img: '/assets/img/pedala-teiu2.png', 
  },
  {
    id: 4,
    hashtag: '#CORRIDA_RUSTICA',
    img: '/assets/img/corrida.png',
  },
  {
    id: 5,
    hashtag: '#CORRIDA_RUSTICA_3', 
    img: '/assets/img/corrida.png',
  },
  {
    id: 5,
    hashtag: '#CORRIDA_RUSTICA_4', 
    img: '/assets/img/corrida.png',
  }
];

function AdventureEvents() {
  return (
    <section className="w-full pb-24 px-6 lg:px-20 container mx-auto max-w-[1400px]">
      <h2 className="text-white text-3xl md:text-4xl font-bold mb-8">
        Eventos
      </h2>

      <div className="relative group">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1.2}
          loop={true} 
          autoplay={{
            delay: 3000,
            disableOnInteraction: false, 
          }}
          navigation={{
            nextEl: '.btn-next-evento',
            prevEl: '.btn-prev-evento',
          }}
          pagination={{ 
            clickable: true, 
            el: '.swiper-pagination-eventos' 
          }}
          breakpoints={{
            640: { slidesPerView: 2.2 },
            1024: { slidesPerView: 3.2 },
            1280: { slidesPerView: 4 },
          }}
          className="pb-6 !static"
        >
          {eventos.map((evento) => (
            <SwiperSlide key={evento.id} className="h-auto py-4">
              <div className="bg-white p-8 pb-6 rounded-lg shadow-xl h-full flex flex-col cursor-pointer transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl">
                <div className="w-full aspect-square overflow-hidden rounded mb-4">
                  <img 
                    src={evento.img} 
                    alt={evento.hashtag}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="flex justify-center items-center mt-auto">
                  <span className="text-black font-black text-sm lg:text-base tracking-widest">
                    {evento.hashtag}
                  </span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <button className="btn-prev-evento absolute left-[-10px] md:left-[-25px] top-1/2 -translate-y-1/2 z-30 w-12 h-12 bg-white rounded-full shadow-[0_5px_15px_rgba(0,0,0,0.3)] flex items-center justify-center text-[#003366] opacity-0 lg:group-hover:opacity-100 transition-all duration-300 hover:bg-gray-100 cursor-pointer">
          <ChevronLeft size={24} />
        </button>

        <button className="btn-next-evento absolute right-[-10px] md:right-[-25px] top-1/2 -translate-y-1/2 z-30 w-12 h-12 bg-white rounded-full shadow-[0_5px_15px_rgba(0,0,0,0.3)] flex items-center justify-center text-[#003366] opacity-0 lg:group-hover:opacity-100 transition-all duration-300 hover:bg-gray-100 cursor-pointer">
          <ChevronRight size={24} />
        </button>

        <div className="swiper-pagination-eventos flex justify-center mt-6 gap-2 w-full"></div>
      </div>

    </section>
  );
}

export default AdventureEvents;