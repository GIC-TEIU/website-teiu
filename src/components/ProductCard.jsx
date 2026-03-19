import React from 'react'

function ProductCard({ title, author, description, imageUrl, price }) {
  return (
    <div className="group max-w-sm rounded-2xl overflow-hidden bg-white border border-none shadow-md
                    flex flex-col h-full cursor-pointer">
      
      <div className="px-6 py-6 flex flex-col items-center text-center flex-grow">
        
        {/* Título */}
        <div className="font-teiu font-bold text-xl mb-4 text-teiu-primary-dark group-hover:text-teiu-ocean transition-colors duration-300">
          {title}
        </div>
        <div className="h-56 w-full flex items-center justify-center overflow-hidden mb-4">
          {imageUrl ? (
            <img 
              className=" h-58 w-38 object-contain transition-all duration-500 ease-in-out 
                    hover:scale-[1.06] hover:hover:drop-shadow-[0_15px_15px_rgba(0,0,0,0.15)]" 
              src={imageUrl} 
              alt={title} 
            />
          ) : (
            <div className="w-full h-full bg-gray-50 flex items-center justify-center text-gray-400 rounded-xl">
              Sem imagem
            </div>
          )}
        </div>

        <span className="text-xs font-bold text-teiu-secondary uppercase tracking-[0.2em] mb-3">
          {author}
        </span>
        <p className="text-gray-500 text-sm leading-relaxed line-clamp-3">
          {description}
        </p>
      </div>
    </div>
  )
}

export default ProductCard;