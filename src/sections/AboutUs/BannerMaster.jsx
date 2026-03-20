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
      { threshold: 0.3 }
    );

    if (bannerRef.current) {
      observer.observe(bannerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div
        ref={bannerRef}
        className="bg-[url('/assets/img/capa-aboutus.jpg')] bg-cover bg-center h-[90vh] w-screen flex items-center justify-start text-white px-[150px]"
      >
        {title && text && (
          <div
            className={`content-title max-w-[500px] bg-[#00000091] p-4 rounded-sm transition-all duration-1000 ${
              visible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h1 className="text-4xl font-bold mb-4">
              {title}
            </h1>

            <p className="text-[#e1e1e1]">
              {text}
            </p>
          </div>
        )}
      </div>
    </>
  );
}

export default BannerMaster;