import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import parceiro1 from "../assets/parceiro1.png";
import parceiro2 from "../assets/parceiro2.png";
import parceiro3 from "../assets/parceiro3.png";
import parceiro4 from "../assets/parceiro4.webp";
import parceiro5 from "../assets/parceiro5.png";
import parceiro6 from "../assets/parceiro6.png";
import parceiro7 from "../assets/parceiro7.png";
import parceiro8 from "../assets/parceiro8.png";
import parceiro9 from "../assets/parceiro9.png";
import parceiro10 from "../assets/parceiro10.png";

const parceiros = [
  parceiro1, parceiro2, parceiro3, parceiro4, parceiro5,
  parceiro6, parceiro7, parceiro8, parceiro9, parceiro10
];

const Parceiros = () => {
  const scrollRef = useRef(null);
  const [hovered, setHovered] = useState(false);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -200 : 200;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section
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
          style={{ scrollBehavior: "smooth" }}
        >
          {parceiros.map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`Parceiro ${index + 1}`}
              className="h-[84px] w-auto object-contain duration-300 hover:scale-110 flex-shrink-0"
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
