import { ChevronLeft, ChevronRight } from "lucide-react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    if (totalPages <= 1) return null;

    return (
        <div className="flex justify-center mt-10 w-full">
            <div className="flex items-center gap-2 bg-white/40 backdrop-blur-md border border-white/50 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-full px-3 py-1">
                
                {/* Botão Anterior */}
                <button
                    onClick={() => onPageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="p-2 rounded-full text-[#003366] hover:bg-white/60 disabled:opacity-40 disabled:hover:bg-transparent transition-all duration-300 ease-in-out cursor-pointer"
                >
                    <ChevronLeft className="h-4 w-4" />
                </button>

                {/* Números das Páginas */}
                <div className="flex gap-1 sm:gap-2">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                        <button
                            key={page}
                            onClick={() => onPageChange(page)}
                            className={`w-8 h-8 flex items-center justify-center rounded-full font-semibold transition-all duration-300 ease-in-out cursor-pointer ${
                                currentPage === page
                                    ? "bg-gradient-to-r from-[#009FE3] to-[#03479A] text-white shadow-md scale-110"
                                    : "text-[#003366] hover:bg-white/60 hover:scale-105"
                            }`}
                        >
                            {page}
                        </button>
                    ))}
                </div>

                {/* Botão Próximo */}
                <button
                    onClick={() => onPageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="p-2 rounded-full text-[#003366] hover:bg-white/60 disabled:opacity-40 disabled:hover:bg-transparent transition-all duration-300 ease-in-out cursor-pointer"
                >
                    <ChevronRight className="h-5 w-5" />
                </button>
            </div>
        </div>
    );
};

export default Pagination;