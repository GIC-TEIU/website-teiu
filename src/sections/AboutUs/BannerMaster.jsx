import { useEffect, useRef, useState } from "react";

function BannerMaster({ title, text }) {
  const [visible, setVisible] = useState(false);
  const bannerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (bannerRef.current) {
      observer.observe(bannerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={bannerRef}
      className="relative bg-[url('/assets/img/A-empresa.jpg')] bg-cover bg-[80%_center] md:bg-right h-[70vh] md:h-[90vh] w-full flex items-center justify-start text-white px-6 sm:px-12 md:px-[100px] lg:px-[150px]"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent md:hidden" />

      {title && text && (
        <div
          className={`relative z-10 w-[85%] sm:w-[70%] max-w-xl bg-black/60 md:bg-black/50 p-6 md:p-8 rounded-lg backdrop-blur-sm transition-all duration-1000 ease-out ${
            visible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
            {title}
          </h1>

          <p className="text-sm md:text-lg text-gray-200 leading-relaxed">
            {text}
          </p>
        </div>
      )}
    </section>
  );
}

export default BannerMaster;