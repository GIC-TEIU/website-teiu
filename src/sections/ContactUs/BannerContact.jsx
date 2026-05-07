import CardContact from "../../components/CardContact";
import Navbar from "../../components/Navbar";

function BannerContactSession({ data }) {
  const API_URL = "http://127.0.0.1:8080";


  console.log("BannerContactSession data:", data);

  return (
    <div className="w-full h-[90vh] relative">
      <Navbar />

      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/assets/img/banner-contact.jpeg')",
        }}
      />

      <div className="absolute inset-0  " />

      {/* Conteúdo */}
      <div className="relative z-10 flex flex-col justify-center h-full px-6 sm:px-10 lg:px-70">

       
        <h1 className="text-white text-3xl sm:text-5xl font-semibold max-w-xl leading-tight mt-40 mb-10">
          PRECISA FALAR <br /> COM A TEIU?
        </h1>

        <div className="flex flex-col sm:flex-row gap-6">

          <CardContact
            icon={`${API_URL}/storage/${data?.assets?.email_icon?.url}`}
            title={data?.texts?.email_title?.content}
            description={data?.texts?.email_value?.content}
            action="email"
          />

          <CardContact
            icon={`${API_URL}/storage/${data?.assets?.email_icon?.url}`}
            title={data?.texts?.whatsapp_title?.content}
            description={data?.texts?.whatsapp_value?.content}
            action="whatsapp"
          />

          <CardContact
            icon={`${API_URL}/storage/${data?.assets?.email_icon?.url}`}
            title={data?.texts?.social_title?.content}
            description={data?.texts?.social_value?.content}
            action="instagram"
          />

        </div>
      </div>
    </div>
  );
}

export default BannerContactSession;