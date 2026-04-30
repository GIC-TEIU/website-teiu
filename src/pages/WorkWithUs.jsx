import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ExternalLink } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

function TrabalheConosco() {
    const bannerImages = [
        "assets/img/trabalhe-conosco-marinho-andrade.png", 
        "assets/img/work-with-us.png",
        "assets/img/trabalhe-conosco-itfaber.png"
    ];

    return (
        <div className="min-h-screen bg-[#009FE3] flex flex-col font-sans overflow-x-hidden">
            <Navbar />
            
            {/* Banner Carrossel */}
            <section className="relative w-full h-[70vh] md:h-[90vh] min-h-[500px] overflow-hidden bg-white">
                <Swiper
                    modules={[Autoplay, EffectFade, Pagination]}
                    effect="fade"
                    autoplay={{ delay: 5000, disableOnInteraction: false }}
                    pagination={{ clickable: true }}
                    className="h-full w-full"
                >
                    {bannerImages.map((img, index) => (
                        <SwiperSlide key={index}>
                            <div className="relative w-full h-full">
                                <img
                                    src={img}
                                    alt={`Trabalhe Conosco Teiú ${index + 1}`}
                                    className="w-full h-full object-cover object-center"
                                />
                                {/* Overlay de gradiente*/}
                                {/* <div className="absolute inset-0 bg-gradient-to-r from-white/40 via-transparent to-transparent z-10"></div> */}
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </section>

            <div className="bg-gradient-to-br from-[#02D1FF] to-[#074B9A] rounded-t-[40px] -mt-8 relative z-30">
                <section className="py-16 lg:py-24">
                    <div className="container mx-auto px-6 lg:px-20 max-w-[1400px]">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                            <div className="lg:col-span-7">
                                <h2 className="text-white text-3xl lg:text-5xl font-bold mb-6 leading-tight">
                                    Trabalhe com propósito e inovação
                                </h2>
                                <p className="text-white text-base lg:text-lg leading-relaxed opacity-90 max-w-xl">
                                    Na Teiú, acreditamos que pessoas talentosas são o nosso maior ativo. 
                                    Se você busca um ambiente dinâmico, moderno e focado em resultados, 
                                    seu lugar é aqui conosco.
                                </p>
                            </div>

                            <div className="lg:col-span-5 flex justify-center lg:justify-end">
                                <div className="bg-[#003366] p-8 lg:p-12 rounded-[30px] md:rounded-[45px] shadow-2xl text-white w-full max-w-[500px]">
                                    <h3 className="text-2xl lg:text-3xl font-bold mb-5">
                                        <a
                                            href="https://grupomarinhodeandrade.vagas.solides.com.br/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 hover:text-[#009FE3] transition-colors group w-fit"
                                        >
                                            <span className="underline decoration-2 underline-offset-4 group-hover:decoration-[#009FE3]">
                                                Vagas Abertas
                                            </span>
                                            <ExternalLink className="w-5 h-5 opacity-70 group-hover:opacity-100 transition-opacity" />
                                        </a>
                                    </h3>
                                    <p className="text-sm lg:text-base leading-relaxed opacity-80">
                                        Clique no link acima para conferir nossas oportunidades no portal de vagas 
                                        e venha fazer parte da nossa história.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <Footer />
            </div>

            {/* Estilização customizada para as bullets do Swiper ficarem brancas/azuis */}
            <style>{`
                .swiper-pagination-bullet { background: #009FE3; opacity: 0.5; }
                .swiper-pagination-bullet-active { background: #003366; opacity: 1; }
            `}</style>
        </div>
    );
}

export default TrabalheConosco;