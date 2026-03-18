import React from 'react'

function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-teiu-primary-dark">
      <video 
        src="/assets/video/capa-animada.mp4" 
        autoPlay 
        loop 
        muted 
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
    </section>
  )
}

export default Hero