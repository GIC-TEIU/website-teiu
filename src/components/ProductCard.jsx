import React from 'react'

function ProductCard({ title, author, description, imageUrl }) {
  return (
    <div className="relative w-full max-w-[280px] aspect-[3/4] rounded-[20px] bg-white shadow-sm 
                    hover:shadow-xl transition-shadow duration-500 flex flex-col items-center p-8 
                    cursor-pointer overflow-hidden border border-gray-100">
      
      <div className="z-10 text-center mb-6">
        <h3 className="font-teiu font-bold text-2xl leading-tight text-teiu-primary-dark">
          {title}
        </h3>
      </div>

      <div className="relative flex-grow w-full flex items-center justify-center">
        {imageUrl ? (
          <img 
            className="h-full w-auto object-contain transition-all ransition-all duration-500 ease-in-out 
                    hover:scale-[1.06] 
                       hover:drop-shadow-[0_20px_20px_rgba(0,0,0,0.15)]" 
            src={imageUrl} 
            alt={title} 
          />
        ) : (
          <div className="w-full h-32 bg-gray-50 flex items-center justify-center text-gray-400 rounded-xl">
            Sem imagem
          </div>
        )}
      </div>
    </div>
  )
}

export default ProductCard;