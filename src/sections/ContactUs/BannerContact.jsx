import CardContact from "../../components/CardContact";
import Navbar from "../../components/navbar";

function BannerContactSession() {
  return (
    <div className="w-full h-[90vh] relative">
      <Navbar />
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/assets/img/banner-contact.jpeg')", // troca pelo caminho da sua imagem
        }}
      />


      <div className="absolute inset-0" />

      {/* Conteúdo */}
      <div className="relative z-10 flex flex-col justify-center h-full px-6 sm:px-10 lg:px-70">
        {/* Título */}
        <h1 className="text-white text-3xl sm:text-5xl font-semibold max-w-xl leading-tight mt-40 mb-10">
          PRECISA FALAR <br /> COM A TEIU?
        </h1>

        {/* Cards */}
        <div className="flex flex-col sm:flex-row gap-6">
          
        <CardContact
        icon="/assets/img/email.svg"
        title="Por Email"
        description="teiu@teiu.com.br"
        />

        <CardContact
        icon="/assets/img/wpp.svg"
        title="No WhatsApp"
        description="(00) 00000-0000"
        />

        <CardContact
        icon="/assets/img/instagram.svg"
        title="Nas Redes"
        description="@teiuoficial"
        />

         

        </div>
      </div>
    </div>
  );
}

export default BannerContactSession;