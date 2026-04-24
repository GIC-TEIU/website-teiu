import { useState, useEffect, useRef } from "react";

function OurHistory({ data }) {
  const [showAll, setShowAll] = useState(false);
  const [visibleIndexes, setVisibleIndexes] = useState([]);
  const [leavingIndexes, setLeavingIndexes] = useState([]);
  const [lineHeight, setLineHeight] = useState(0);
  const [activeDots, setActiveDots] = useState([]);
  const [isToggling, setIsToggling] = useState(false);

  const itemRefs = useRef([]);
  const containerRef = useRef(null);
  const ticking = useRef(false);

    const buildTimeline = () => {
    const timelineData = data?.components?.timeline;

    if (!timelineData) return [];

    const texts = timelineData.texts || {};
    const assets = timelineData.assets || {};

    const events = Object.keys(texts)
      .filter((key) => key.startsWith("event_") && key.includes("_title"))
      .map((key) => {
        const number = key.split("_")[1]; 

        return {
          year: `Evento ${number}`,
          text: texts[key]?.content || "",
          image: assets[`asset_${number}`]?.url
            ? `http://127.0.0.1:8080/storage/${assets[`asset_${number}`].url}`
            : "/assets/img/placeholder.png",
        };
      });

    return events;
  };

  const timeline = buildTimeline();

  const visibleItems = showAll ? timeline : timeline.slice(0, 2);

  useEffect(() => {
    itemRefs.current = [];
  }, [showAll]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.dataset.index);

          if (entry.isIntersecting) {
            setVisibleIndexes((prev) =>
              prev.includes(index) ? prev : [...prev, index]
            );
          }
        });
      },
      { threshold: 0.2 }
    );

    itemRefs.current.forEach((el) => el && observer.observe(el));

    return () => observer.disconnect();
  }, [visibleItems]);

  useEffect(() => {
    const handleScroll = () => {
      if (ticking.current) return;

      ticking.current = true;

      requestAnimationFrame(() => {
        const container = containerRef.current;
        if (!container) return;

        const rect = container.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        const triggerPoint = windowHeight * 0.75;
        const visible = triggerPoint - rect.top;
        const total = rect.height;

        const progress = Math.min(
          Math.max(visible / (total * 1.2), 0),
          1
        );

        setLineHeight(progress * 100);

        const newActiveDots = [];
        const newLeaving = [];

        itemRefs.current.forEach((el, index) => {
          if (!el) return;

          const itemRect = el.getBoundingClientRect();

          if (itemRect.top < triggerPoint) {
            newActiveDots.push(index);
          }

          if (itemRect.top > windowHeight * 0.85) {
            newLeaving.push(index);
          }
        });

        setActiveDots(newActiveDots);
        setLeavingIndexes(newLeaving);

        ticking.current = false;
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [showAll]);

  const handleToggle = () => {
    setIsToggling(true);
    setShowAll((prev) => !prev);

    setTimeout(() => {
      setIsToggling(false);
    }, 400);
  };

  return (
    <div className="w-full bg-[#F5F5F5] py-10 px-4 sm:px-8 lg:px-[150px]">
      <h2
        className="text-2xl font-bold mb-10 sm:mb-12 ml-0 sm:ml-10"
        dangerouslySetInnerHTML={{
          __html:
            data?.components?.timeline?.texts?.title?.content ||
            "Nossa História",
        }}
      />

      <div ref={containerRef} className="relative max-w-5xl mx-auto">
        {/* LINHA */}
        <div className="hidden sm:block absolute left-1/2 top-0 h-full w-[2px] transform -translate-x-1/2 bg-gray-300">
          <div
            className={`w-full bg-[#383838] ${
              isToggling ? "" : "transition-all duration-300 ease-out"
            }`}
            style={{ height: `${lineHeight}%` }}
          />
        </div>

        {visibleItems.map((item, index) => {
          const isLeft = index % 2 === 0;
          const isVisible = visibleIndexes.includes(index);
          const isLeaving = leavingIndexes.includes(index);
          const isActive = activeDots.includes(index);

          return (
            <div
              key={index}
              ref={(el) => (itemRefs.current[index] = el)}
              data-index={index}
              className={`relative w-full flex flex-col sm:flex-row items-start pt-6 mb-16 ${
                isLeft
                  ? "sm:justify-start"
                  : "sm:justify-end sm:flex-row-reverse"
              }`}
            >
              {/* IMAGEM */}
              <div
                className={`w-full sm:w-[40%] ${
                  isLeft ? "sm:mr-auto" : "sm:ml-auto"
                } transform transition-all duration-700 ${
                  isVisible && !isLeaving
                    ? "opacity-100 translate-x-0"
                    : isLeaving
                    ? isLeft
                      ? "opacity-0 -translate-x-10"
                      : "opacity-0 translate-x-10"
                    : isLeft
                    ? "opacity-0 -translate-x-10"
                    : "opacity-0 translate-x-10"
                }`}
              >
                <img
                  src={item.image}
                  alt={`event-${index}`}
                  className="w-full rounded-lg shadow-md"
                />
              </div>

              {/* TEXTO */}
              <div
                className={`w-full sm:w-[45%] px-4 sm:px-6 mt-4 sm:mt-0 transform transition-all duration-700 ${
                  isVisible && !isLeaving
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-6"
                }`}
              >
                <h3 className="font-bold mb-2 text-[#383838] text-lg">
                  {item.year}
                </h3>

                <div
                  className="text-sm sm:text-base text-gray-700"
                  dangerouslySetInnerHTML={{ __html: item.text }}
                />
              </div>

              {/* BOLINHA */}
              <div
                className={`hidden sm:block absolute left-1/2 top-0 transform -translate-x-1/2 w-4 h-4 rounded-full border-2 border-white transition-all duration-500 ${
                  isActive
                    ? "bg-[#383838] scale-110"
                    : "bg-gray-300 scale-90"
                }`}
              />
            </div>
          );
        })}
      </div>

      {/* BOTÃO */}
      {timeline.length > 2 && (
        <div className="flex justify-center mt-10">
          <button
            onClick={handleToggle}
            className="px-6 py-2 cursor-pointer rounded-lg border border-[#383838] text-[#383838] bg-transparent 
                       hover:bg-[#383838] hover:text-white transition-colors duration-300"
          >
            {showAll ? "Ver Menos" : "Ver nossa Linha do Tempo"}
          </button>
        </div>
      )}
    </div>
  );
}

export default OurHistory;