import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ExternalLink } from "lucide-react";

function TrabalheConosco() {
    return (
        <div className="min-h-screen bg-[#009FE3] flex flex-col font-sans overflow-x-hidden">
            <Navbar />
            <section className="relative w-full h-[70vh] md:h-[85vh] min-h-[500px] overflow-hidden bg-white">
                <div className="absolute inset-0 w-full h-full">
                    <img
                        src="assets/img/work-with-us.jpeg"
                        alt="Trabalhe Conosco Teiú"
                        className="w-full h-full object-cover object-[80%_center] md:object-right"
                    />
                    
                    <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/70 to-transparent md:from-white md:via-white/40 md:to-transparent w-[85%] md:w-full z-10"></div>
                </div>

                <div className="container mx-auto px-6 md:px-12 lg:px-32 h-full relative z-20 flex flex-col justify-center">
                    <div className="w-[75%] sm:w-full flex items-start gap-1 lg:gap-2">
                        <span className="text-[#009FE3] text-6xl md:text-9xl lg:text-[240px] font-light leading-[0.7] select-none transform translate-y-6 md:translate-y-10 lg:translate-y-20">
                            #
                        </span>

                        <div className="flex flex-col mt-2 md:mt-4 lg:mt-10">
                            <h2 className="text-[#003366] text-3xl sm:text-4xl md:text-6xl lg:text-[90px] font-bold leading-none tracking-tighter">
                                Vem
                            </h2>

                            <div className="flex items-baseline gap-1 sm:gap-2 lg:gap-4 -mt-1 lg:-mt-2">
                                <span className="text-[#009FE3] text-xl sm:text-2xl md:text-4xl lg:text-[60px] font-light">
                                    ser
                                </span>
                                <span className="text-[#003366] text-3xl sm:text-4xl md:text-6xl lg:text-[100px] font-bold tracking-tighter">
                                    Teiú
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 md:mt-16 lg:mt-24 ml-8 md:ml-20 lg:ml-36">
                        <img
                            src="/assets/img/Logomarca.png"
                            alt="Teiú Logo"
                            className="w-16 sm:w-20 md:w-24 lg:w-32 object-contain"
                        />
                    </div>
                </div>
            </section>

            <div className="bg-gradient-to-br from-[#02D1FF] to-[#074B9A] rounded-t-[40px] -mt-10 relative z-30">
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
        </div>
    );
}

export default TrabalheConosco;