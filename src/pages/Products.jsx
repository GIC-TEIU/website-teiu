import Navbar from "../components/navbar";
import { produtosTeiu } from "../mocks/Products";
import ProductCard from "../components/products/ProductCard";
import { Filter, ChevronUp } from "lucide-react";

function ProductsPage() {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />

            <div className="container mx-auto px-6 md:px-16 lg:px-12 pt-32 pb-24 max-w-7xl">

                <div className="flex justify-between items-center mb-12">
                    <h1 className="text-3xl font-black text-black tracking-tighter">
                        Produtos
                    </h1>

                    <button className="bg-[#009FE3] p-3 rounded-full text-white hover:bg-[#0096ce] transition-colors shadow-sm">
                        <Filter className="h-5 w-5" />
                    </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-16">
                    {produtosTeiu.map((produto) => (
                        <ProductCard
                            key={produto.id}
                            title={produto.title}
                            imageUrl={produto.imageUrl}
                        />
                    ))}
                </div>
            </div>

            <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="fixed bottom-8 right-8 flex flex-col items-center text-[#003366] font-bold text-xs hover:scale-105 transition-transform"
            >
                <div className="border-2 border-[#003366] rounded-full p-1.5 mb-1 bg-white">
                    <ChevronUp className="h-5 w-5" strokeWidth={3} />
                </div>
                Voltar ao topo
            </button>
        </div>
    );
}

export default ProductsPage;