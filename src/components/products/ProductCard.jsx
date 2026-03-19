const ProductCard = ({ title, imageUrl }) => {
    return (
        <div className="relative bg-[#E7EBEF] rounded-[35px] pt-8 pb-12 px-6 flex flex-col items-center justify-between shadow-[0_8px_30px_rgb(0,0,0,0.12)] max-w-[310px] w-full mx-auto mt-6 mb-8">

            <div className="w-full flex justify-center mb-5 h-[220px]">
                <img
                    src={imageUrl}
                    alt={title}
                    className="h-full w-auto object-contain drop-shadow-xl"
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