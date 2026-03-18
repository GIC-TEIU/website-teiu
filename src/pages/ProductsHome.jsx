import React from 'react'
import ProductCard from '../components/ProductCard'
import { produtosTeiu } from '../mocks/produtos';

function ProductsSession() {
  return (
    <section className="relative -mt-12 z-20 bg-white p-12 px-16 rounded-t-[50px]">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-2xl font-semibold text-black tracking-tight">
            Nossos Produtos
          </h2>
          <button className="text-sm font-medium border rounded-full shadow-sm px-2 py-2 text-gray-500 hover:text-teiu-ocean">
            Ver todos
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {produtosTeiu.map(item => (
            <ProductCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProductsSession