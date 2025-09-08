import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const eagerModules = Object.values(
  import.meta.glob("../assets/parceiros/*.{png,jpg,jpeg,webp}", { eager: true })
).map((m) => m.default).slice(0, 3);

const lazyModules = import.meta.glob("../assets/parceiros/*.{png,jpg,jpeg,webp}");

const Parceiros = () => {
  const sectionRef = useRef(null);
  const scrollRef = useRef(null);
  const [hovered, setHovered] = useState(false);
  const [loaded, setLoaded] = useState({});
  const [parceiros, setParceiros] = useState(eagerModules);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -200 : 200;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      async ([entry]) => {
        if (entry.isIntersecting) {
          const allModules = Object.values(lazyModules);
          const loadedImages = await Promise.all(allModules.map((fn) => fn()));
          const allLogos = loadedImages.map((m) => m.default);

          setParceiros((prev) => {
            const combined = [...prev];
            allLogos.forEach((logo) => {
              if (!combined.includes(logo)) {
                combined.push(logo);
              }
            });
            return combined;
          });

          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-3 bg-white relative px-2"
      style={{ boxShadow: `inset 0px -4px 8px rgba(0,0,0,0.2)` }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="flex justify-center items-center gap-10 relative">
        <h2 className="text-xl font-semibold text-gray-800 whitespace-nowrap">
          Nossos <br /> Parceiros
        </h2>

        <div
          ref={scrollRef}
          className="flex gap-8 overflow-x-auto scrollbar-hide scroll-smooth pl-2"
        >
          {parceiros.map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`Parceiro ${index + 1}`}
              loading="lazy"
              onLoad={() =>
                setLoaded((prev) => ({ ...prev, [index]: true }))
              }
              className={`h-[84px] w-auto object-contain duration-500 hover:scale-110 flex-shrink-0 transition-all
                ${loaded[index] ? "blur-0" : "blur-sm"}`}
            />
          ))}
        </div>

        {hovered && (
          <button
            onClick={() => scroll("left")}
            className="absolute left-[120px] bg-gray-800 text-white p-2 rounded-full shadow-lg hover:bg-gray-600 transition medium3:hidden"
          >
            <ChevronLeft size={20} />
          </button>
        )}

        {hovered && (
          <button
            onClick={() => scroll("right")}
            className="absolute right-4 bg-gray-800 text-white p-2 rounded-full shadow-lg hover:bg-gray-600 transition medium3:hidden"
          >
            <ChevronRight size={20} />
          </button>
        )}
      </div>
    </section>
  );
};

export default Parceiros;
