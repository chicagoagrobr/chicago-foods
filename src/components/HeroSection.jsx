import { useEffect, useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import funcionario from "../assets/funcionario.avif";

const features = [
  {
    title: "Produção Personalizada",
    text: "Capacidade de adaptação para atender especificações exclusivas.",
  },
  {
    title: "Qualidade e Segurança como Prioridade",
    text: "Processos controlados, rastreabilidade total e padrão internacional de segurança alimentar, respeitando o meio ambiente e o produtor rural.",
  },
  {
    title: "Localização Estratégica",
    text: (
      <>
        Complexo com silos, centros de distribuição e unidades de produção automatizadas,
        posicionando a <span className="text-orange-300 font-semibold">CHIGAGO FOODS </span> 
        entre as mais completas estruturas do agronegócio brasileiro.
      </>
    ),
  },
];

export default function HeroSection({ images, carouselAlts }) {
  const [currentImage, setCurrentImage] = useState(0);
  const [loadedImages, setLoadedImages] = useState({});
  const [loadedImg, setLoadedImg] = useState(false);

  useEffect(() => {
    images.forEach((src, i) => {
      const img = new Image();
      img.src = src;
      img.onload = () => setLoadedImages((prev) => ({ ...prev, [i]: true }));
    });

    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [images]);

  return (
    <header role="banner" className="relative">
      <section
        className="relative w-full h-[500px] overflow-hidden"
        aria-label="Carrossel de destaques"
      >
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={carouselAlts[index]}
            loading={index === 0 ? "eager" : "lazy"}
            fetchpriority={index === 0 ? "high" : "low"}
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-in-out
              ${index === currentImage ? "opacity-100" : "opacity-0"}
              ${loadedImages[index] ? "blur-0 scale-100" : "blur-sm scale-105"}`}
            style={{ transitionProperty: "filter, transform, opacity" }}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/40 pointer-events-none" />
      </section>

      <section className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-0 relative -mt-[430px] items-center">
        <div className="flex justify-center sm:justify-start -mt-[10px]">
          <img
            src={funcionario}
            alt="Funcionário da Chicago Foods garantindo qualidade na produção"
            loading="eager"
            fetchpriority="high"
            onLoad={() => setLoadedImg(true)}
            className={`w-[320px] lg:w-[380px] h-[500px] medium:ml-12 lg:ml-10 xl:ml-24 object-cover shadow-2xl rounded-2xl transition duration-400
              ${loadedImg ? "blur-0 opacity-100" : "blur-xs opacity-70"}`}
          />
        </div>

        <div className="bg-black/50 backdrop-blur-lg border border-white/10 rounded-xl p-6 md:p-8 text-lime-50 shadow-2xl medium:mr-14 sm:-mt-[90px] md:-mt-[100px] lg:mr-6">
          <h1 className="sr-only">Destaques da Chicago Foods</h1> {/* para SEO e acessibilidade */}
          <ul className="space-y-6 sm:text-xs medium:text-sm lg:text-base xl:text-lg leading-relaxed">
            {features.map((f, i) => (
              <li key={i}>
                <h2 className="flex items-center gap-2 text-orange-200 font-semibold mb-1">
                  <FaCheckCircle size={20} className="text-green-400" />
                  <span>{f.title}</span>
                </h2>
                <p>{f.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </header>
  );
}
