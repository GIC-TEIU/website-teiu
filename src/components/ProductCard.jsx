import React from 'react'

function ProductCard({ title, author, description, imageUrl, price }) {
  return (
    <div className="max-w-sm rounded-2xl overflow-hidden shadow-xl bg-white border border-gray-100 transition-transform hover:scale-105 duration-300">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-1 text-teiu-primary-dark">{title}</div>
      {/* Imagem do Produto */}
      <div className="h-48 overflow-hidden">
        {imageUrl ? (
          <img className="w-32 h-full object-cover" src={imageUrl} alt={title} />
        ) : (
          <div className="w-full h-full bg-teiu-gray flex items-center justify-center text-gray-400">
            Sem imagem
          </div>
        )}
      </div>
        <span className="text-sm font-medium text-teiu-secondary uppercase tracking-wider">
          {author}
        </span>
        
        <p className="text-gray-600 text-sm mt-3 line-clamp-3">
          {description}
        </p>
      </div>

      <div className="px-6 pb-6 flex items-center justify-between">
        <span className="text-2xl font-bold text-teiu-primary-dark">
          {price}
        </span>
        <button className="bg-teiu-ocean text-white px-4 py-2 rounded-lg font-medium hover:bg-teiu-deep transition-colors">
          Ver detalhes
        </button>
      </div>
    </div>
  )
}

export default ProductCard;