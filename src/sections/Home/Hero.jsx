import React, { useEffect, useState } from 'react'

function Hero({data}) {
  const [img , setImg] = useState(' ');
 
  useEffect(()=>{
      setImg(data?.components?.banner?.assets?.banner_home?.url)
    },[data])
  
 return (
    <section className="relative h-[100vh] w-full overflow-hidden bg-teiu-primary-dark">
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/60 via-transparent to-transparent h-1/3" />
      
      <video 
        src={`http://127.0.0.1:8080/storage/${img}`}
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