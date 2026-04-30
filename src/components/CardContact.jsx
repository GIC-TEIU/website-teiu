function CardContact({icon: Icon, title, description, action }) {

  const handleClick = () => {
    let url = "#";

    switch (action) {
      case "instagram":
        url = "https://instagram.com/teiuoficial";
        break;

      case "whatsapp":
        url = "https://wa.me/557799137026"; 
        break;

      case "email":
        url = "https://mail.google.com/mail/?view=cm&to=desenvolvimento.web2@teiu.com.br";
        break;

      default:
        return;
    }

    window.open(url, "_blank");
  };

 return (
    <div
      onClick={handleClick}
      className="cursor-pointer bg-black/10 backdrop-blur-md p-5 rounded-xl w-full sm:w-64 text-white border border-white/20 hover:scale-105 transition"
    >
      <div className="w-8 h-8 mb-4">
        {typeof Icon === "string" ? (
          <img src={Icon} alt={title} className="w-full h-full" />
        ) : (
          <Icon size={32} className="text-white" /> 
        )}
      </div>
      
      <h3 className="font-semibold mt-6">{title}</h3>
      <p className="text-sm opacity-80">{description}</p>
    </div>
  );
}

export default CardContact;