import Navbar from "../components/navbar";
import Footer from "../components/Footer";
import { ExternalLink } from "lucide-react";

function TrabalheConosco() {
    return (
        <div className="min-h-screen bg-[#009FE3] flex flex-col font-sans">
            <Navbar />

            {/* SEÇÃO 1 - HERO */}
            <section className="relative w-full h-[85vh] min-h-[600px] overflow-hidden bg-white">
                <div className="absolute inset-0 w-full h-full">
                    <img
                        src="assets/img/work-with-us.jpeg"
                        alt="Trabalhe Conosco Teiú"
                        className="w-full h-full object-contain object-right"
                    />

                    {/* Overlay: Faixa branca sólida na esquerda que esfuma no final */}
                    <div className="absolute inset-0 bg-gradient-to-r from-white from-[10%] via-white/10 via-[35%] to-transparent w-full z-10"></div>
                </div>

                <div className="container mx-auto px-12 lg:px-32 h-full relative z-20 flex flex-col justify-center">
                    <div className="flex items-start gap-1 lg:gap-2 mt-8 lg:mt-16">
                        <span className="text-[#009FE3] text-9xl lg:text-[240px] font-light leading-[0.7] select-none transform translate-y-10 lg:translate-y-20">
                            #
                        </span>

                        <div className="flex flex-col mt-4 lg:mt-10">
                            <h2 className="text-[#003366] text-5xl lg:text-[90px] font-bold leading-none tracking-tighter">
                                Vem
                            </h2>

                            <div className="flex items-baseline gap-2 lg:gap-4 -mt-1 lg:-mt-2">
                                <span className="text-[#009FE3] text-3xl lg:text-[60px] font-light">
                                    ser
                                </span>
                                <span className="text-[#003366] text-5xl lg:text-[100px] font-bold tracking-tighter">
                                    Teiú
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="mt-16 lg:mt-24 ml-20 lg:ml-36">
                        <img
                            src="/assets/img/Logomarca.png"
                            alt="Teiú Logo com Facilita sua Vida"
                            className="w-24 lg:w-32 object-contain"
                        />
                    </div>
                </div>
            </section>

            {/* WRAPPER DO GRADIENTE ÚNICO (Novas cores: #02D1FF -> #074B9A) */}
            <div className="bg-gradient-to-br from-[#02D1FF] to-[#074B9A]">

                {/* SEÇÃO 2 */}
                <section className="py-16 lg:py-24">
                    <div className="container mx-auto px-6 lg:px-20 max-w-[1400px]">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

                            <div className="lg:col-span-7">
                                <h2 className="text-white text-3xl lg:text-5xl font-bold mb-6 leading-[1.1]">
                                    Lorem ipsum dolor sit amet,
                                </h2>
                                <p className="text-white text-base lg:text-lg leading-relaxed opacity-90 max-w-xl">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
                                    suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
                                    lacus vel facilis.
                                </p>
                            </div>

                            <div className="lg:col-span-5 flex justify-end">
                                <div className="bg-[#003366] p-8 lg:p-12 rounded-[45px] shadow-2xl text-white w-full max-w-[500px]">

                                    <h3 className="text-2xl lg:text-3xl font-bold mb-5">
                                        <a
                                            href="https://grupomarinhodeandrade.vagas.solides.com.br/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 hover:text-[#009FE3] transition-colors group w-fit"
                                        >
                                            <span className="underline decoration-2 underline-offset-4 group-hover:decoration-[#009FE3]">
                                                Vagas
                                            </span>
                                            <ExternalLink className="w-5 h-5 opacity-70 group-hover:opacity-100 transition-opacity" />
                                        </a>
                                    </h3>

                                    <p className="text-sm lg:text-base leading-relaxed opacity-80 mb-2">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                        tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
                                        suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus.
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                <Footer />
            </div>

        </div>
    );
}

export default TrabalheConosco;