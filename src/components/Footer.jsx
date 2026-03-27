import React from 'react'
import { Instagram, Youtube, Facebook } from 'lucide-react'

function Footer() {
  return (
    <footer className="relative w-full text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 pt-12 pb-8 relative z-10">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 items-start">
          
          <div className="flex flex-col items-center sm:items-start">
            <img 
              src="/assets/img/Logomarca.png" 
              alt="Logo Teiú" 
              className="h-20 md:h-24 w-auto object-contain" 
            />
          </div>

          <div className="text-center sm:text-left">
            <h4 className="font-bold text-base mb-5 uppercase tracking-wider font-teiu">Empresa</h4>
            <ul className="flex flex-col gap-3 text-white/80 font-light font-teiu">
              <li><a href="#" className="hover:text-white hover:underline transition-all">Nossas Marcas</a></li>
              <li><a href="/produtos" className="hover:text-white hover:underline transition-all">Nossos Produtos</a></li>
              <li><a href="/trabalheconosco" className="hover:text-white hover:underline transition-all">Trabalhe Conosco</a></li>
            </ul>
          </div>

          <div className="text-center sm:text-left">
            <h4 className="font-bold text-base mb-5 uppercase tracking-wider font-teiu">Contato</h4>
            <ul className="flex flex-col gap-3 text-white/80 font-light font-teiu">
              <li className="hover:text-white transition-colors cursor-default">+55 77 3333-3333</li>
              <li className="hover:text-white transition-colors cursor-default">+55 77 9 9852-6541</li>
              <li className="hover:text-white transition-colors cursor-default">teiu@teiu.com.br</li>
            </ul>
          </div>
          <div className="flex flex-col items-center sm:items-start">
            <h4 className="font-bold text-base mb-5 uppercase tracking-wider font-teiu">Siga-nos</h4>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/teiuoficial/" target="_blank" rel="noreferrer" 
                 className="p-2.5 border border-white/40 rounded-full hover:bg-white hover:text-blue-900 transition-all transform hover:-translate-y-1">
                <Instagram size={18} />
              </a>
              <a href="#" className="p-2.5 border border-white/40 rounded-full hover:bg-white hover:text-blue-900 transition-all transform hover:-translate-y-1">
                <Youtube size={18} />
              </a>
              <a href="#" className="p-2.5 border border-white/40 rounded-full hover:bg-white hover:text-blue-900 transition-all transform hover:-translate-y-1">
                <Facebook size={18} />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 mt-12 pt-8 text-center">
          <p className="text-white/60 text-[9px] md:text-[10px] uppercase tracking-[0.2em] font-teiu leading-relaxed">
            © {new Date().getFullYear()} Teiú Indústria e Comércio. <br className="sm:hidden" /> Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer