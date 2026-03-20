import { Lightbulb, Rocket, Box } from "lucide-react";
import { useEffect, useRef, useState } from "react";

function SocialProof() {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="w-full py-16 px-4 sm:px-8 flex justify-center"
    >
      <div className="w-full max-w-6xl flex flex-col md:flex-row gap-6">
        
        {/* Card 1 */}
        <div
          className={`flex-1 max-w-[380px] aspect-[5/4.6] bg-[rgba(255,255,255,0.31)] backdrop-blur-md rounded-2xl shadow-md border border-white/30 p-6 text-center relative flex flex-col justify-center items-center transition-all duration-700 ${
            visible
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 translate-y-10 scale-95"
          }`}
        >
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
        <div
          className={`flex-1 max-w-[380px] aspect-[5/4.6] bg-[rgba(255,255,255,0.31)] backdrop-blur-md rounded-2xl shadow-md border border-white/30 p-6 text-center relative flex flex-col justify-center items-center transition-all duration-700 delay-200 ${
            visible
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 translate-y-10 scale-95"
          }`}
        >
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
        <div
          className={`flex-1 max-w-[380px] aspect-[5/4.6] bg-[rgba(255,255,255,0.31)] backdrop-blur-md rounded-2xl shadow-md border border-white/30 p-6 text-center relative flex flex-col justify-center items-center transition-all duration-700 delay-500 ${
            visible
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 translate-y-10 scale-95"
          }`}
        >
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
    </section>
  );
}

export default SocialProof;