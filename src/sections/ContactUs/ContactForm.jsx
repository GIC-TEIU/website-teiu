function ContactForm() {
    return (
      <section className="w-full py-20 px-6 sm:px-10 lg:px-32 bg-[#f5f5f5]">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          
          {/* Imagem */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="w-full max-w-[500px] aspect-[653/687]">
              <img
                src="/assets/img/faleconosco.jpg"
                alt="Contato"
                className="w-full h-full object-cover rounded-3xl shadow-md"
              />
            </div>
          </div>
  
          {/* Formulário */}
          <div className="w-full lg:w-1/2 max-w-[520px]">
            
            {/* Tag */}
            <span className="text-xs bg-gray-200 px-4 py-1 rounded-full text-gray-600">
              FALE COM A TEIU
            </span>
  
            {/* Título */}
            <h2 className="text-3xl sm:text-4xl font-semibold mt-4 leading-tight text-gray-900">
              ALGUMA DÚVIDA? <br />
              <span className="font-bold">ENTRE EM CONTATO</span>
            </h2>
  
            {/* Inputs */}
            <div className="mt-8 flex flex-col gap-4">
              
              <input
                type="text"
                placeholder="Seu nome Completo"
                className="w-full px-5 py-3 rounded-full border border-gray-300 bg-white outline-none focus:ring-2 focus:ring-green-400 transition"
              />
  
              <input
                type="email"
                placeholder="Digite seu e-mail"
                className="w-full px-5 py-3 rounded-full border border-gray-300 bg-white outline-none focus:ring-2 focus:ring-green-400 transition"
              />
  
              <input
                type="text"
                placeholder="Seu telefone"
                className="w-full px-5 py-3 rounded-full border border-gray-300 bg-white outline-none focus:ring-2 focus:ring-green-400 transition"
              />
  
              <textarea
                placeholder="Em que podemos te ajudar?"
                rows="4"
                className="w-full px-5 py-3 rounded-2xl border border-gray-300 bg-white outline-none resize-none focus:ring-2 focus:ring-green-400 transition"
              />
  
              {/* Botão */}
              <button className="mt-3 flex items-center justify-between bg-[#E0F896]  hover:opacity-90 transition px-6 py-3 rounded-full font-medium text-gray-900 shadow-sm">
                ENVIAR MENSAGEM
                  
                <span className="bg-white rounded-full w-8 h-8 flex items-center justify-center shadow">
                
                </span>
              </button>
  
            </div>
          </div>
        </div>
      </section>
    );
  }
  
  export default ContactForm;