import { useState, useEffect, useRef } from "react";

const tabs = {
  mission: {
    title: "Nossa Missão",
    items: [
      {
        icon: "/assets/img/sustentabilidade.svg",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
      },
      {
        icon: "/assets/img/medal.svg",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
      },
    ],
  },
  vision: {
    title: "Nossa Visão",
    items: [
      { icon: "👁️", text: "Ser referência no mercado com inovação e excelência." },
      { icon: "🚀", text: "Crescer continuamente e impactar positivamente." },
    ],
  },
  values: {
    title: "Nossos Valores",
    items: [
      { icon: "🤝", text: "Ética, transparência e compromisso." },
      { icon: "💡", text: "Inovação e foco no cliente." },
    ],
  },
};

function OurMission() {
  const [activeTab, setActiveTab] = useState("mission");
  const [visible, setVisible] = useState(false);
  const [isLeaving, setIsLeaving] = useState(false);

  const ref = useRef(null);

  const current = tabs[activeTab];

  const isImageUrl = (value) => {
    if (typeof value !== "string") return false;

    return (
      value.startsWith("http") ||
      value.startsWith("/") ||
      value.endsWith(".png") ||
      value.endsWith(".jpg") ||
      value.endsWith(".jpeg") ||
      value.endsWith(".svg") ||
      value.endsWith(".webp")
    );
  };

  // 🔥 ENTRADA
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  // 🔥 SAÍDA
  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;

      const rect = ref.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const exitStart = windowHeight * 0.55;

      if (rect.top > exitStart) {
        setIsLeaving(true);
      } else {
        setIsLeaving(false);
      }
    };

    const onScroll = () => requestAnimationFrame(handleScroll);

    window.addEventListener("scroll", onScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      ref={ref}
      className={`w-full py-20 text-white mb-40 transition-all duration-1000 ${
        visible && !isLeaving
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-10"
      }`}
    >
      {/* Tabs */}
      <div className="flex justify-center mb-15">
        <div className="flex bg-white rounded-full p-1 shadow-md">
          {Object.keys(tabs).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === tab
                  ? "bg-[#0088F6] text-white shadow"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              {tab === "mission"
                ? "Missão"
                : tab === "vision"
                ? "Visão"
                : "Valores"}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-12 px-6">
        
        {/* IMAGE */}
        <div
          className={`w-[300px] h-[200px] relative transition-all duration-1000 ${
            visible && !isLeaving
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-10"
          }`}
        >
          <img
            src="assets/img/mission.png"
            alt="team"
            className="w-full h-full object-contain drop-shadow-[0_10px_25px_rgba(0,0,0,0.4)]"
          />
        </div>

        {/* TEXT */}
        <div
          className={`max-w-xl w-full transition-all duration-1000 delay-200 ${
            visible && !isLeaving
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-6"
          }`}
        >
          <h2
            key={current.title}
            className="text-2xl font-semibold mb-6 animate-fadeSlide"
          >
            {current.title}
          </h2>

          <div className="flex flex-col gap-4">
            {current.items.map((item, index) => (
              <div
                key={index + activeTab}
                className="flex items-start gap-3 bg-[#01459A] p-4 rounded-xl shadow-md animate-fadeSlide"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <span className="flex items-center justify-center w-12 h-12 mr-4 ml-4">
                  {isImageUrl(item.icon) ? (
                    <img
                      src={item.icon}
                      alt="icon"
                      className="w-full h-full object-contain drop-shadow-md"
                    />
                  ) : (
                    <span className="text-xl">{item.icon}</span>
                  )}
                </span>

                <p className="text-sm leading-relaxed text-white/90">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurMission;