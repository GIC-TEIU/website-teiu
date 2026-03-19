import { useState, useMemo } from "react";
import Navbar from "../components/navbar";
import { produtosTeiu } from "../mocks/Products";
import ProductCard from "../components/products/ProductCard";
import SidebarFilters from "../components/products/SidebarFilters";
import { Filter, ChevronUp } from "lucide-react";
import Footer from "../components/Footer";

function ProductsPage() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [filters, setFilters] = useState({
        search: '',
        category: '',
        brand: '',
        volume: '',
        fragrance: ''
    });

    const options = useMemo(() => ({
        brands: [...new Set(produtosTeiu.map(p => p.brand))],
        categories: [...new Set(produtosTeiu.map(p => p.category))],
        volumes: [...new Set(produtosTeiu.map(p => p.volume))],
    }), []);

    const filteredProducts = useMemo(() => {
        return produtosTeiu.filter(product => {
            const matchesSearch = product.title.toLowerCase().includes(filters.search.toLowerCase());
            const matchesCategory = !filters.category || product.category === filters.category;
            const matchesBrand = !filters.brand || product.brand === filters.brand;
            const matchesVolume = !filters.volume || product.volume === filters.volume;
            const matchesFragrance = !filters.fragrance || 
                product.title.toLowerCase().includes(filters.fragrance.toLowerCase());

            return matchesSearch && matchesCategory && matchesBrand && matchesVolume && matchesFragrance;
        });
    }, [filters]);

    return (
        <div className="min-h-screen bg-white flex flex-col">
            <Navbar />

            {isSidebarOpen && (
                <div 
                    className="fixed inset-0 bg-black/30 z-[45] lg:hidden backdrop-blur-sm"
                    onClick={() => setIsSidebarOpen(false)}
                />
            )}

            {/* Reduzi o pt-32 para pt-24 e o pb-24 para pb-12 para ganhar espaço no topo */}
            <div className="container mx-auto px-4 lg:px-8 pt-24 pb-12 max-w-[1400px] flex-grow">
                
                {/* Reduzi o gap-12 para gap-6 para aproximar a sidebar dos cards */}
                <div className="flex flex-col lg:flex-row gap-6">
                    
                    <SidebarFilters 
                        filters={filters} 
                        setFilters={setFilters} 
                        options={options}
                        isOpen={isSidebarOpen}
                        onClose={() => setIsSidebarOpen(false)}
                    />

                    <main className="flex-1">
                        {/* Margem inferior do título reduzida de mb-10 para mb-6 */}
                        <div className="flex justify-between items-center mb-6">
                            <div>
                                <h1 className="text-2xl lg:text-3xl font-normal text-black">
                                    Nossos Produtos
                                </h1>
                                <p className="text-gray-400 text-xs mt-1">
                                    {filteredProducts.length} itens encontrados
                                </p>
                            </div>
                            
                            <button 
                                onClick={() => setIsSidebarOpen(true)}
                                className="lg:hidden bg-[#009FE3] p-3 rounded-xl text-white shadow-md active:scale-95"
                            >
                                <Filter className="h-5 w-5" />
                            </button>
                        </div>

                        {filteredProducts.length > 0 ? (
                            /* Gap-y-16 reduzido para gap-y-10 para os cards ficarem mais próximos verticalmente */
                            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-x-6 gap-y-10">
                                {filteredProducts.map((produto) => (
                                    <ProductCard
                                        key={produto.id}
                                        title={produto.title}
                                        imageUrl={produto.imageUrl}
                                    />
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-20 border-2 border-dashed border-gray-100 rounded-3xl">
                                <p className="text-gray-400">Nenhum produto encontrado.</p>
                                <button 
                                    onClick={() => setFilters({ search: '', category: '', brand: '', volume: '', fragrance: '' })}
                                    className="mt-2 text-[#009FE3] text-sm font-bold hover:underline"
                                >
                                    Limpar filtros
                                </button>
                            </div>
                        )}
                    </main>
                </div>
            </div>

            <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="fixed bottom-6 right-6 flex flex-col items-center text-[#003366] font-bold text-[10px] hover:scale-110 transition-transform z-40 bg-white/90 p-2 rounded-xl shadow-md border border-gray-100"
            >
                <div className="border-2 border-[#003366] rounded-full p-1 mb-1 bg-white">
                    <ChevronUp className="h-4 w-4" strokeWidth={3} />
                </div>
                TOPO
            </button>

            <div className="w-full bg-gradient-to-r from-[#009FE3] to-[#03479A]">
                <Footer />
            </div>
        </div>
    );
}

export default ProductsPage;