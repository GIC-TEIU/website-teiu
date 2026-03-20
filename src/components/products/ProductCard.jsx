const ProductCard = ({ title, imageUrl }) => {
    return (
        <div className="group relative bg-[#E7EBEF] rounded-[35px] pt-8 pb-12 px-6 flex flex-col items-center justify-between 
                        shadow-[0_20px_50px_rgba(0,0,0,0.2)] hover:shadow-[0_30px_60px_rgba(0,0,0,0.25)] 
                        max-w-[310px] w-full mx-auto mt-6 mb-8 transition-all duration-300 ease-in-out">

            <div className="w-full flex justify-center mb-5 h-[220px] overflow-visible">
                <img
                    src={imageUrl}
                    alt={title}
                    className="h-full w-auto object-contain 
                               transition-transform duration-500 ease-in-out 
                               group-hover:scale-110
                               /* Sombra ajustada: deslocamento para a direita e para baixo */
                               filter drop-shadow-[8px_15px_15px_rgba(0,0,0,0.4)]"
                />
            </div>

            <h3 className="text-[#003366] text-xl font-bold text-center leading-tight w-full">
                {title}
            </h3>

            <button className="absolute -bottom-4 left-6 bg-[#009FE3] hover:bg-[#0096ce] text-white font-bold py-2 px-6 rounded-full text-sm shadow-lg transition-transform hover:scale-105 whitespace-nowrap">
                Saiba mais
            </button>
        </div>
    );
};

export default ProductCard;