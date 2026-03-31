import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import LanguageToggle from './acessibilidade/LanguageToggle';

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [isProjectsOpen, setIsProjectsOpen] = useState(false);
  const { t } = useTranslation();
  const isActive = (path) => location.pathname === path;
  const isParentActive = (subItems) => subItems?.some(sub => isActive(sub.path));
  const linkStyle = (path, subItems = null) => `
    cursor-pointer transition-all duration-300 flex items-center gap-1
    ${isActive(path) || isParentActive(subItems)
        ? 'text-[#11215f] font-semibold drop-shadow-sm' 
        : 'text-white font-light hover:text-[#00cdf7]'} 
  `;

  const navItems = [
    { name: t('menu.empresa'), path: '/aempresa' },
    { name: t('menu.marcas', 'Nossas Marcas'), path: '/marcas' }, // O segundo argumento é o texto padrão se falhar
    { name: t('menu.produtos'), path: '/produtos' },
    { 
      name: t('menu.projetos', 'Nossos Projetos'), 
      subItems: [
        { name: t('menu.sustentabilidade', 'Sustentabilidade'), path: '/sustentabilidade' },
        { name: t('menu.teiuAdventure', 'Teiú Adventure'), path: '/teiu-adventure' },
      ]
    },
    { name: t('menu.trabalheConosco', 'Trabalhe Conosco'), path: '/trabalheconosco' },
    { name: t('menu.contato'), path: '/contato' },
  ];

  const handleNavigate = (path) => {
    if (path) {
      navigate(path);
      setIsOpen(false); 
      setIsProjectsOpen(false); 
    }
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
        <ul className="hidden lg:flex gap-6 xl:gap-8 justify-center items-center">
          {navItems.map((item) => (
            <li key={item.name} className="relative group">
              {item.subItems ? (
                <>
                  <div className={linkStyle('', item.subItems)}>
                    {item.name}
                    <ChevronDown size={16} className="transition-transform duration-300 group-hover:rotate-180" />
                  </div>
                  
                  <div className="absolute top-full left-0 w-full h-4 bg-transparent"></div>
                  <div className="absolute top-[calc(100%+10px)] left-1/2 -translate-x-1/2 w-56 bg-black/70 backdrop-blur-2xl border border-white/10 shadow-[0_15px_40px_rgba(0,0,0,0.4)] rounded-2xl p-2 opacity-0 invisible translate-y-3 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 ease-out">
                    <ul className="flex flex-col gap-1">
                      {item.subItems.map(sub => (
                        <li key={sub.path}>
                          <a 
                            onClick={() => handleNavigate(sub.path)}
                            className={`block px-4 py-3 rounded-xl transition-all duration-200 cursor-pointer text-sm
                              ${isActive(sub.path) 
                                ? 'bg-white/20 font-bold text-white shadow-sm' 
                                : 'text-white/80 hover:bg-white/10 hover:text-white'}`}
                          >
                            {sub.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </>
              ) : (
                <a onClick={() => handleNavigate(item.path)} className={linkStyle(item.path)}>
                  {item.name}
                </a>
              )}
            </li>
          ))}
        </ul>

        {/* Hambúrguer (Mobile) */}
        <div className="lg:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        <div className="hidden lg:flex justify-end w-[100px]">
          <LanguageToggle />
        </div> 
      </div>

      {/* Menu Mobile/Tablet Dropdown */}
      {isOpen && (
        <div className="lg:hidden bg-black/60 backdrop-blur-lg border-b border-white/10 max-h-[85vh] overflow-y-auto">
          <ul className="flex flex-col p-4 gap-4">
            {navItems.map((item) => (
              <li key={item.name} className="border-b border-white/5 pb-2 flex flex-col">
                {item.subItems ? (
                  <>
                    <div 
                      onClick={() => setIsProjectsOpen(!isProjectsOpen)} 
                      className={`${linkStyle('', item.subItems)} justify-between w-full`}
                    >
                      {item.name}
                      <ChevronDown size={20} className={`transition-transform duration-300 ${isProjectsOpen ? 'rotate-180' : ''}`} />
                    </div>
                    
                    <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isProjectsOpen ? 'max-h-40 mt-3' : 'max-h-0'}`}>
                      <ul className="flex flex-col gap-2 pl-4 border-l-2 border-white/20 ml-2">
                        {item.subItems.map(sub => (
                          <li key={sub.path}>
                            <a 
                              onClick={() => handleNavigate(sub.path)}
                              className={`block py-2 text-sm transition-colors cursor-pointer
                                ${isActive(sub.path) ? 'text-[#00cdf7] font-medium' : 'text-white/70 hover:text-white'}`}
                            >
                              {sub.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </>
                ) : (
                  <a onClick={() => handleNavigate(item.path)} className={linkStyle(item.path)}>
                    {item.name}
                  </a>
                )}
              </li>
            ))}
          </ul>
          
          <div className="p-4 border-t border-white/10 flex justify-center pb-8">
            <LanguageToggle />
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;