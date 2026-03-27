import React from 'react';

function AdventureContent() {
  return (
    <section className="w-full py-16 bg-white">
      <div className="container mx-auto px-6 lg:px-20 max-w-[1200px]">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          
          {/* Imagem Esquerda */}
          <div className="w-full md:w-1/2">
            <img 
              src="/assets/img/grupo-ciclistas.png" 
              alt="Multidão de Ciclistas"
              className="w-full h-auto rounded-xl shadow-2xl object-cover"
            />
          </div>

          {/* Texto Direita */}
          <div className="w-full md:w-1/2 flex flex-col justify-center">
            <h3 className="text-[#003366] text-2xl lg:text-3xl font-bold mb-6 uppercase tracking-tight">
              Movendo sonhos, <br/> transformando realidades.
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed text-justify font-teiu">
              Na Teiú, acreditamos que o esporte é muito mais do que competição; 
              é uma ferramenta poderosa de transformação social, disciplina e saúde. 
              Por isso, assumimos o compromisso de estar lado a lado com quem busca superação, 
              seja nas trilhas, nas pistas ou nas ruas.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default AdventureContent;