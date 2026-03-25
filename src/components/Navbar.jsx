import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react'; 

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (path) => location.pathname === path;

  const linkStyle = (path) => `
    cursor-pointer transition-colors font-light
    ${isActive(path) ? 'text-primary-dark font-medium' : 'text-white hover:text-teiu-secondary-light'}
  `;

  const navItems = [
    { name: 'A Empresa', path: '/aempresa' },
    { name: 'Nossas Marcas', path: '/marcas' },
    { name: 'Nossos Produtos', path: '/produtos' },
    { name: 'Trabalhe Conosco', path: '/trabalheconosco' },
    { name: 'Fale Conosco', path: '/contato' },
  ];

  const handleNavigate = (path) => {
    navigate(path);
    setIsOpen(false); 
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="bg-black/32 backdrop-blur-md border-b border-white/20 shadow-lg p-4 px-8 flex justify-between items-center">
        
        {/* Logo */}
        <div className="flex justify-start">
          <img 
            src="/assets/img/Logomarca.png" 
            alt="Logo Teiú" 
            className="h-12 w-auto cursor-pointer"
            onClick={() => handleNavigate('/')}
          />
        </div>

        {/* Menu Desktop */}
        <ul className="hidden md:flex gap-8 justify-center items-center">
          {navItems.map((item) => (
            <li key={item.path}>
              <a onClick={() => handleNavigate(item.path)} className={linkStyle(item.path)}>
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Botão Mobile (Hambúrguer) */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        <div className="hidden md:flex justify-end w-[100px]"></div> 
      </div>

      {/* Menu Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-black/60 backdrop-blur-lg border-b border-white/10">
          <ul className="flex flex-col p-4 gap-4">
            {navItems.map((item) => (
              <li key={item.path} className="border-b border-white/5 pb-2">
                <a onClick={() => handleNavigate(item.path)} className={linkStyle(item.path)}>
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;