import React, { useState } from "react";
import { PersonStanding } from "lucide-react";

function AcessibilidadeBar() {
  const [altoContraste, setAltoContraste] = useState(false);
  const [tamanhoFonte, setTamanhoFonte] = useState(100);
  const [isOpen, setIsOpen] = useState(false);

  const toggleContraste = () => {
    setAltoContraste(!altoContraste);
    if (!altoContraste) {
      document.body.classList.add("alto-contraste");
    } else {
      document.body.classList.remove("alto-contraste");
    }
  };

  const aumentarFonte = () => {
    const novoTamanho = tamanhoFonte + 10;
    setTamanhoFonte(novoTamanho);
    document.documentElement.style.fontSize = `${novoTamanho}%`;
  };

  const diminuirFonte = () => {
    const novoTamanho = Math.max(70, tamanhoFonte - 10);
    setTamanhoFonte(novoTamanho);
    document.documentElement.style.fontSize = `${novoTamanho}%`;
  };

  return (
    <>
      <div className="absolute top-0 left-0">
        <a 
          href="#conteudo" 
          className="sr-only focus:not-sr-only focus:absolute focus:p-2 focus:bg-white focus:text-teiu-primary-dark focus:z-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Ir para o conteúdo (Alt + 1)
        </a>
        <a
          href="#menu"
          className="sr-only focus:not-sr-only focus:absolute focus:p-2 focus:bg-white focus:text-teiu-primary-dark focus:z-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Ir para o menu (Alt + 2)
        </a>
      </div>
      <div className="fixed bottom-6 left-6 z-50 flex flex-col-reverse items-start gap-3">
        {/* Botão Principal Flutuante */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600 cursor-pointer transition-all"
          aria-label="Menu de Acessibilidade"
          aria-expanded={isOpen}
        >
          <PersonStanding size={28} />
        </button>

        {/* Menu de Opções */}
        {isOpen && (
          <div className="bg-white text-gray-800 shadow-xl rounded-lg p-4 flex flex-col gap-2 border border-gray-200 animate-fade-in-up">
            <p className="text-xs font-bold text-gray-500 uppercase mb-1">Acessibilidade</p>
            
            <button 
              onClick={aumentarFonte} 
              aria-label="Aumentar fonte"
              className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded font-medium text-sm transition-colors text-left"
            >
              A+ Aumentar fonte
            </button>
            
            <button 
              onClick={diminuirFonte} 
              aria-label="Diminuir fonte"
              className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded font-medium text-sm transition-colors text-left"
            >
              A- Diminuir fonte
            </button>
            
            <button 
              onClick={toggleContraste} 
              aria-label="Ativar Alto Contraste"
              className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded font-medium text-sm transition-colors text-left"
            >
              {altoContraste ? "Baixo Contraste" : "Alto Contraste"}
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default AcessibilidadeBar;