import { useEffect, useRef, useState } from "react";

function FounderSection() {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className={`w-full py-20 px-4 sm:px-8 lg:px-[150px] flex justify-center transition-all duration-1000 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="relative max-w-[70%] flex flex-col items-center">
        
        {/* IMAGEM (zoom + fade) */}
        <div
          className={`overflow-hidden transition-all duration-1000 ${
            visible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          <img
            src="/assets/img/founder.jpg"
            alt="Fundador"
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </div>

        <div
          className={`flex flex-col items-center text-center transition-all duration-1000 delay-300 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h4 className="font-bold mt-[20px] mb-[5px] text-xl">
            Risus commodo viverra maecenas accumsan lacus vel.
          </h4>

          <p className="text-xl text-gray-600">
            Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
            maecenas accumsan lacus vel.
          </p>
        </div>
      </div>
    </section>
  );
}

export default FounderSection;