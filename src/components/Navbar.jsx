import React from 'react'

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="bg-black/32 backdrop-blur-md border-b border-white/20 shadow-lg p-4 px-8 flex justify-between items-center">
        <div className="flex justify-start">
          <img 
            src="/assets/img/Logomarca.png" 
            alt="Logo Teiú" 
            className="h-12 w-auto" 
          />
        </div>
        <ul className="flex gap-8 justify-center items-center">
          <li>
            <a href="#" className="text-white hover:text-teiu-secondary transition-colors font-light">
                A Empresa
            </a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-teiu-secondary-light transition-colors font-light">
              Nossas Marcas
            </a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-teiu-secondary-light transition-colors font-light">
              Nossos Produtos
            </a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-teiu-secondary-light transition-colors font-light">
              Trabalhe Conosco
            </a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-teiu-secondary-light transition-colors font-light">
              Fale Conosco
            </a>
          </li>
        </ul>
        <div className="flex justify-end">
        </div>

      </div>
    </nav>
  )
}

export default Navbar