import { ExternalLink } from 'lucide-react';
import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';

function InstagramSection() {
  const { t } = useTranslation();
  const [visible, setVisible] = useState(false);
  const [isLeaving, setIsLeaving] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://elfsightcdn.com/platform.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      if (rect.top > windowHeight * 0.8) {
        setIsLeaving(true);
      } else {
        setIsLeaving(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative w-full py-20 px-4 md:px-16 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        
        <div className={`flex justify-between items-center mb-10 px-4 transition-all duration-1000 ${
          visible && !isLeaving 
            ? "opacity-100 translate-y-0" 
            : "opacity-0 translate-y-10"
        }`}>
          <h2 className="text-3xl font-bold text-white font-teiu tracking-tight">
                <a
                    href="https://www.instagram.com/teiuoficial/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:text-[#009FE3] transition-colors group w-fit"
                >
                    <span className="underline decoration-2 underline-offset-4 group-hover:decoration-[#009FE3]">
                    {t('titles.instagram')}
                    </span>
                    <ExternalLink className="w-5 h-5 opacity-70 group-hover:opacity-100 transition-opacity" />
                </a>
            </h2>
         
        </div>

        <div className={`rounded-[30px] overflow-hidden shadow-2xl bg-white/5 backdrop-blur-md p-4 border border-white/10 transition-all duration-1000 delay-200 ${
          visible && !isLeaving 
            ? "opacity-100 scale-100" 
            : "opacity-0 scale-95 translate-y-10"
        }`}>
          <div 
            className="elfsight-app-4e350cdb-802b-4f5d-823c-2a7dbc8acaa4" 
            data-elfsight-app-lazy
          ></div>
        </div>
      </div>
    </section>
  );
}

export default InstagramSection;