import { useEffect, useRef, useState } from "react";

function ExposeItem() {
  const [offset, setOffset] = useState(0);
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;

      const rect = ref.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // quando entra na tela
      if (rect.top < windowHeight * 0.8) {
        setVisible(true);
      }

      // parallax suave
      if (rect.top <= windowHeight && rect.bottom >= 0) {
        setOffset(rect.top);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <section
      ref={ref}
      className="w-full min-h-[70vh] md:min-h-screen flex flex-col items-center justify-start pt-10 overflow-hidden text-[#012C57]"
    >
      <h1
        className={`px-4 text-3xl md:text-6xl font-bold text-center transition-all duration-1000 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        Água{" "}
        <span className="block md:inline-block bg-gradient-to-r from-white to-[#099C2B] px-3 rounded">
          Sanitária Teiú
        </span>
      </h1>

      <div className="px-6">
        <p className={`mt-3 text-center text-lg md:text-2xl transition-all duration-1000 delay-200 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          Cuidado com a sua casa.
        </p>
        <p className={`text-center text-lg md:text-2xl transition-all duration-1000 delay-300 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          Responsabilidade com o planeta.
        </p>
      </div>

      <div className="w-full mt-6 md:mt-10 flex justify-center">
        <img
          src="/assets/img/aguasanitaria-water.jpeg"
          alt=""
          className="w-full h-[400px] md:h-auto object-cover md:object-contain transition-all duration-1000 ease-out"
          style={{
            transform: `
              translateY(${offset * -0.04}px) 
              scale(${visible ? 1.1 : 1}) 
            `,
            opacity: visible ? 1 : 0,
          }}
        />
      </div>
    </section>
  );
}

export default ExposeItem;