import React, { useRef, useEffect } from 'react';

function InstitutionalVideo({ videoUrl, posterUrl }) {
  const videoRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      threshold: 0.3,
    };

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          videoRef.current?.play().catch(() => {
          });
        } else {
          videoRef.current?.pause();
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, options);
    
    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="w-full bg-white py-10 flex justify-center">
      <div className="w-full max-w-7xl px-4">
        <div className="relative aspect-video rounded-[40px] overflow-hidden shadow-xl bg-gray-100">
            <video
            ref={videoRef}
            src="/assets/video/Eternità.mp4" 
            poster={posterUrl}
            muted
            loop
            playsInline
            disablePictureInPicture
            className="w-full h-full object-cover"
            />
        
          <div className="absolute inset-0 bg-black/5 pointer-events-none" />
        </div>
      </div>
    </section>
  );
}

export default InstitutionalVideo;