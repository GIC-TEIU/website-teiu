function CardContact({ icon, title, description }) {
    return (
      <div className="bg-black/10 backdrop-blur-md p-5 rounded-xl w-full sm:w-64 text-white border border-white/20">
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