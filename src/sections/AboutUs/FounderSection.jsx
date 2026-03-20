import { useEffect, useRef, useState } from "react";

function FounderSection() {
  const [progress, setProgress] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;

      const rect = ref.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Quando começa a sair (quando encosta no final da tela)
      const start = windowHeight * 0.15;
      const end = windowHeight;

      // Progresso de saída (0 → 1)
      let value = (rect.top - start) / (end - start);

      value = Math.max(0, Math.min(1, value));

      setProgress(value);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Inverte pra usar como visibilidade
  const opacity = 1 - progress;
  const translateY = progress * 80; // move pra baixo enquanto some

  return (
    <section
      ref={ref}
      style={{
        opacity,
        transform: `translateY(${translateY}px)`,
      }}
      className="w-full py-16 sm:py-20 px-4 sm:px-6 md:px-10 lg:px-20 flex justify-center transition-all duration-200"
    >
      <div className="w-full max-w-5xl flex flex-col items-center gap-6">
        
        {/* IMAGEM */}
        <div className="w-full overflow-hidden transition-all duration-500">
          <img
            src="/assets/img/founder.jpg"
            alt="Fundador"
            className="w-full h-[250px] sm:h-[350px] md:h-[450px] object-contain rounded-xl shadow-lg"
          />
        </div>

        {/* TEXTO */}
        <div className="flex flex-col items-center text-center">
          <h4 className="font-bold text-lg sm:text-xl md:text-2xl mb-2">
            Risus commodo viverra maecenas accumsan lacus vel.
          </h4>

          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl">
            Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
            maecenas accumsan lacus vel.
          </p>
        </div>
      </div>
    </section>
  );
}

export default FounderSection;