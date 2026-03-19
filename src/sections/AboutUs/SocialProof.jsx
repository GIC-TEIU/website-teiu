import { Lightbulb, Rocket, Box } from "lucide-react";

function SocialProof() {
  return (
    <section className="w-full py-16 px-4 sm:px-8 flex justify-center">
      <div className="w-full max-w-6xl flex flex-col md:flex-row gap-6">
        
        {/* Card 1 */}
        <div className="opacity-0 animate-fadeInUp delay-[0ms] flex-1 max-w-[380px] aspect-[5/4.6] bg-[rgba(255,255,255,0.31)] backdrop-blur-md rounded-2xl shadow-md border border-white/30 p-6 text-center relative flex flex-col justify-center items-center">
          
          <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-white rounded-full p-3 shadow-md border border-white/30">
            <Lightbulb className="w-9 h-9 text-gray-700" />
          </div>

          <h3 className="mt-6 font-bold text-blue-900 uppercase text-2xl">
            INOVAÇÃO
          </h3>

          <p className="mt-2 text-xl text-gray-600">
            O parque industrial mais moderno do setor
          </p>
        </div>

        {/* Card 2 */}
        <div className="opacity-0 animate-fadeInUp delay-[150ms] flex-1 max-w-[380px] aspect-[5/4.6] bg-[rgba(255,255,255,0.31)] backdrop-blur-md rounded-2xl shadow-md border border-white/30 p-6 text-center relative flex flex-col justify-center items-center">
          
          <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-white rounded-full p-3 shadow-md border border-white/30">
            <Rocket className="w-9 h-9 text-gray-700" />
          </div>

          <h3 className="mt-6 font-bold text-blue-900 uppercase text-2xl">
            IMPACTO
          </h3>

          <p className="mt-2 text-xl text-gray-600">
            X cidades na Bahia<br />
            X cidades em mais de X estados
          </p>
        </div>

        {/* Card 3 */}
        <div className="opacity-0 animate-fadeInUp delay-[300ms] flex-1 max-w-[380px] aspect-[5/4.6] bg-[rgba(255,255,255,0.31)] backdrop-blur-md rounded-2xl shadow-md border border-white/30 p-6 text-center relative flex flex-col justify-center items-center">
          
          <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-white rounded-full p-3 shadow-md border border-white/30">
            <Box className="w-9 h-9 text-gray-700" />
          </div>

          <h3 className="mt-6 font-bold text-blue-900 uppercase text-2xl">
            PRODUÇÃO
          </h3>

          <p className="mt-2 text-xl text-gray-600">
            16 milhões de kg produzidos mensalmente
          </p>
        </div>

      </div>

      {/* Animação */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease forwards;
        }
      `}</style>
    </section>
  );
}

export default SocialProof;