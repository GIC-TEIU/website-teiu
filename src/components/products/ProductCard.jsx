import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const ProductCard = ({ product }) => {
    const displayVariant = product.variants?.find(v => v.featured) || product.variants?.[0];

    if (!displayVariant) return null;

    return (
        <Link
        to={`/produto/${product.id}`}
                state={{ variantId: displayVariant.id }}
                >
                <div className="group relative bg-[#E7EBEF] bg-card-teiu-watermark rounded-[35px] pt-8 pb-12 px-6 flex flex-col items-center justify-between 
                shadow-[0_20px_50px_rgba(0,0,0,0.2)] hover:shadow-[0_30px_60px_rgba(0,0,0,0.25)] 
                max-w-[310px] w-full mx-auto mt-6 mb-8 transition-all duration-300 ease-in-out">

            <div className="w-full flex justify-center mb-5 h-[220px] overflow-visible relative z-10">
                <img
                    src={displayVariant.image}
                    alt={product.title}
                    className="h-full w-auto object-contain 
                    transition-transform duration-500 ease-in-out 
                    group-hover:scale-110
                    filter drop-shadow-[8px_15px_15px_rgba(0,0,0,0.2)]"
                />
            </div>

            {product.title}
              <span className="block text-sm font-medium opacity-60 mt-1 uppercase">
                {product.volume}
                </span>

                <div
                
                className="absolute -bottom-4 left-6 bg-[#009FE3] hover:bg-[#0096ce] text-white font-bold py-2 px-6 rounded-full text-sm shadow-lg transition-transform hover:scale-105 whitespace-nowrap"
                >
                Saiba mais
            </div>
        </div>
    </Link>
    );
};

export default ProductCard;