import React, { useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { produtosTeiuAgrupados } from '../mocks/Products';
import ProductHero from '../sections/DetailProduct/ProductHero';
import ProductInfo from '../sections/DetailProduct/ProductInfo';
import ProductSpecs from '../sections/DetailProduct/ProductSpecs';
import Navbar from '../components/navbar';
import Footer from '../components/Footer';

function ProductDetail() {
  const { id } = useParams();
  const location = useLocation();

  const produto = produtosTeiuAgrupados.find(p => p.id === Number(id));
  const initialVariantId = location.state?.variantId || produto?.defaultVariantId;
  const [activeVariantId, setActiveVariantId] = useState(initialVariantId);
  if (!produto) {
    return (
      <div className="min-h-screen flex items-center justify-center font-teiu text-2xl">
        Produto não encontrado.
      </div>
    );
  }

  const activeVariant = produto.variants.find(v => v.id === activeVariantId) || produto.variants[0];

  return (
    <>
      <Navbar />
      <main className="animate-page-fade-in bg-white">
        <ProductHero 
          product={produto}
          activeVariantId={activeVariantId} 
          setActiveVariantId={setActiveVariantId} 
        />

        <ProductInfo 
          usage={produto.usage}
          image={activeVariant.image} 
        />

        {produto.specs && (
          <ProductSpecs 
            specs={produto.specs}
            activeColor={activeVariant.textColor} 
          />
        )}
      </main>
      <div className="w-full bg-gradient-to-r from-[#009FE3] to-[#03479A]">
        <Footer />
    </div>
    </>
  );
}

export default ProductDetail;