import React from 'react'

function Hero() {
 return (
    <section className="relative h-[100vh] w-full overflow-hidden bg-teiu-primary-dark">
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/60 via-transparent to-transparent h-1/3" />
      
      <video 
        src="/assets/video/capa-animada.mp4" 
        autoPlay 
        loop 
        muted 
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      />

    </section>
  )
}

export default Hero