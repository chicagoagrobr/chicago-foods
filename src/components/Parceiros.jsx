import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useTranslation } from "react-i18next";

const eagerModules = import.meta.glob("../assets/parceiros/*.avif", { eager: true });

export default function Parceiros() {
  const { t } = useTranslation();
  const sectionRef = useRef(null);
  const scrollRef = useRef(null);
  const [hovered, setHovered] = useState(false);
  const [loaded, setLoaded] = useState({});
  const [parceiros, setParceiros] = useState([]);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -400 : 400;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const allImages = Object.values(eagerModules).map((m) => m.default);
    setParceiros(allImages);
  }, []);

  useEffect(() => {
    const scrollInterval = setInterval(() => {
      if (scrollRef.current) {
        const { scrollLeft, clientWidth, scrollWidth } = scrollRef.current;
        if (scrollLeft >= scrollWidth / 2) {
          scrollRef.current.scrollTo({ left: 0, behavior: "auto" });
        } else {
          scrollRef.current.scrollBy({ left: 200, behavior: "smooth" });
        }
      }
    }, 3000);
    return () => clearInterval(scrollInterval);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-3 bg-white dark:bg-green-950 relative px-2"
      style={{ boxShadow: `inset 0px -4px 8px rgba(0,0,0,0.2)` }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="max-w-screen-medium3 mx-auto flex justify-center items-center gap-10 relative">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 whitespace-nowrap text-center">
          {t("partners.title")}
          <span className="block ml-1">{t("partners.title2")}</span>
        </h2>

        <div
          ref={scrollRef}
          className="flex gap-8 overflow-x-auto scrollbar-hide scroll-smooth pl-2"
        >
          {[...parceiros, ...parceiros].map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`${t("partners.alt")} ${index + 1}`}
              loading="eager"
              fetchpriority="auto"
              decoding="async"
              onLoad={() => setLoaded((prev) => ({ ...prev, [index]: true }))}
              className={`h-[84px] w-auto object-contain duration-500 hover:scale-110 flex-shrink-0 transition-all
                ${loaded[index] ? "blur-0 bg-transparent" : "blur-sm bg-gray-200 animate-pulse"}`}
            />
          ))}
        </div>

        {hovered && (
          <button
            onClick={() => scroll("left")}
            className="absolute left-[120px] bg-gray-800 text-white p-2 rounded-full shadow-lg hover:bg-gray-600 transition"
            aria-label={t("partners.scrollLeft")}
          >
            <ChevronLeft size={20} />
          </button>
        )}

        {hovered && (
          <button
            onClick={() => scroll("right")}
            className="absolute right-4 bg-gray-800 text-white p-2 rounded-full shadow-lg hover:bg-gray-600 transition"
            aria-label={t("partners.scrollRight")}
          >
            <ChevronRight size={20} />
          </button>
        )}
      </div>
    </section>
  );
}
