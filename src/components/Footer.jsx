import React from 'react'
import { Instagram, Youtube, Facebook } from 'lucide-react'

function Footer() {
  return (
    <footer className="relative w-full text-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-[#0082c9] to-[#0054a6] -z-10" />
      <div className="max-w-7xl mx-auto px-10 pt-20 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
          <div className="flex flex-col items-start gap-2">
            <img 
              src="/assets/img/Logomarca.png" 
              alt="Logo Teiú" 
              className="h-28 w-auto object-contain" 
            />
          </div>

          {/*Empresa */}
          <div>
            <h4 className="font-bold text-lg mb-6 uppercase tracking-wider">Empresa</h4>
            <ul className="flex flex-col gap-3 text-white/90 font-light">
              <li><a href="#" className="hover:underline transition-all">Nossas Marcas</a></li>
              <li><a href="#" className="hover:underline transition-all">Nossos Produtos</a></li>
              <li><a href="#" className="hover:underline transition-all">Trabalhe Conosco</a></li>
            </ul>
          </div>

          <div className="flex flex-col md:flex-row gap-10 md:gap-14">
            <div>
              <h4 className="font-bold text-lg mb-6 uppercase tracking-wider">Contato</h4>
              <ul className="flex flex-col gap-3 text-white/90 font-light whitespace-nowrap">
                <li>+55 77 3333-3333</li>
                <li>+55 77 9 9852-6541</li>
                <li>teiu@teiu.com.br</li>
              </ul>
            </div>

            <div className="flex gap-4 items-start md:mt-12">
              <a href="#" className="p-2 border border-white rounded-full hover:bg-white hover:text-[#0054a6] transition-all">
                <Instagram size={20} />
              </a>
              <a href="#" className="p-2 border border-white rounded-full hover:bg-white hover:text-[#0054a6] transition-all">
                <Youtube size={20} />
              </a>
              <a href="#" className="p-2 border border-white rounded-full hover:bg-white hover:text-[#0054a6] transition-all">
                <Facebook size={20} />
              </a>
            </div>
          </div>
        </div>

        {/*Copyright */}
        <div className="border-t border-white/20 mt-16 pt-8 text-center text-white/80 text-[10px] uppercase tracking-[0.2em]">
          <p>© {new Date().getFullYear()} Teiú Indústria e Comércio. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer