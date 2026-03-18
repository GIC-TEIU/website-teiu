import React from 'react'

function Footer() {
  return (
    <footer className="bg-teiu-primary-dark text-white pt-16 pb-8 px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        
        <div className="flex flex-col gap-4">
          <img 
            src="/assets/img/Logomarca.png" 
            alt="Logo Teiú" 
            className="h-44 w-auto object-contain self-start" 
          />
          <p className="text-gray-400 text-sm leading-relaxed">
            Desde 1957, levando qualidade e confiança para a limpeza do seu lar.
          </p>
        </div>

        <div>
          <h4 className="font-bold text-lg mb-6 text-teiu-secondary">A Empresa</h4>
          <ul className="flex flex-col gap-3 text-gray-300">
            <li><a href="#" className="hover:text-white transition-colors">Sobre Nós</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Nossas Marcas</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Trabalhe Conosco</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Sustentabilidade</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-lg mb-6 text-teiu-secondary">Contato</h4>
          <ul className="flex flex-col gap-3 text-gray-300 text-sm">
            <li>(11) 1111111</li>
            <li>(11) 1111111</li>
            <li>✉️ sac@teiu.com.br</li>
          </ul>
          {/* Espaço para ícones*/}
          <div className="flex gap-4 mt-6">
            <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-teiu-secondary cursor-pointer transition-all">
              <span className="text-xs italic">insta</span>
            </div>
            <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-teiu-secondary cursor-pointer transition-all">
              <span className="text-xs italic">youtube</span>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto border-t border-white/10 mt-16 pt-8 text-center text-gray-500 text-xs">
        <p>© {new Date().getFullYear()} Teiú Indústria e Comércio. Todos os direitos reservados.</p>
      </div>
    </footer>
  )
}

export default Footer