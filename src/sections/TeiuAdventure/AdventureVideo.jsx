import React, { useRef, useEffect } from 'react';

function AdventureVideo() {
  const videoRef = useRef(null);

  useEffect(() => {
    const options = { threshold: 0.5 };

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          videoRef.current?.play().catch(() => {});
        } else {
          videoRef.current?.pause();
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, options);
    if (videoRef.current) observer.observe(videoRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative w-full h-[60vh] md:h-[100vh] overflow-hidden bg-black flex items-center justify-center">
      <video
        ref={videoRef}
        src="/assets/video/video-ciclista.mp4" 
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover opacity-60"
      />
    </section>
  );
}

export default AdventureVideo;