function CardContact({ icon, title, description, action }) {

  const handleClick = () => {
    let url = "#";

    switch (action) {
      case "instagram":
        url = "https://instagram.com/teiuoficial";
        break;

      case "whatsapp":
        url = "https://wa.me/5577988364540"; 
        break;

      case "email":
        url = "https://mail.google.com/mail/?view=cm&to=icaro2rodrigues@gmail.com";
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
      <img src={icon} alt={title} />
      
      <h3 className="font-semibold mt-6">
        {title}
      </h3>
      
      <p className="text-sm opacity-80">
        {description}
      </p>
    </div>
  );
}

export default CardContact;