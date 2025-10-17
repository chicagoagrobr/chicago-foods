import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { FaCheckCircle } from "react-icons/fa";
import funcionario from "../assets/funcionario.avif";

export default function HeroSection({ images, carouselAlts }) {
  const [currentImage, setCurrentImage] = useState(0);
  const [loadedImages, setLoadedImages] = useState({});
  const [loadedImg, setLoadedImg] = useState(false);
  const { t } = useTranslation();

  const features = t("hero.features", { returnObjects: true });

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
        aria-label={t("hero.carouselLabel")}
      >
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={carouselAlts[index]}
            loading={index === 0 ? "eager" : "lazy"}
            fetchPriority={index === 0 ? "high" : "low"}
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-in-out
              ${index === currentImage ? "opacity-100" : "opacity-0"}
              ${loadedImages[index] ? "blur-0 scale-100" : "blur-sm scale-105"}`}
            style={{ transitionProperty: "filter, transform, opacity" }}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/20 dark:from-black/60 dark:via-black/30 dark:to-black/60 pointer-events-none" />
      </section>

      <section className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-0 relative -mt-[430px] items-center">
        <div className="flex justify-center sm:justify-start -mt-[10px]">
          <div className="relative w-[320px] lg:w-[380px] h-[500px] medium:ml-12 lg:ml-10 xl:ml-24 rounded-2xl overflow-hidden shadow-xl">
            <img
              src={funcionario}
              alt={t("hero.altFuncionario")}
              loading="eager"
              fetchPriority="high"
              onLoad={() => setLoadedImg(true)}
              className={`w-full h-full object-cover transition duration-400
                ${loadedImg ? "blur-0 opacity-100" : "blur-xs opacity-70"}`}
            />
            <div className="absolute inset-0 dark:bg-black/20"></div>
          </div>
        </div>

        <div className="bg-black/50 backdrop-blur-lg border border-white/10 rounded-xl p-6 md:p-8 text-lime-50 shadow-2xl medium:mr-14 sm:-mt-[90px] md:-mt-[100px] lg:mr-6">
          <h1 className="sr-only">{t("hero.heading")}</h1>
          <ul className="space-y-6 sm:text-xs medium:text-sm lg:text-base xl:text-lg leading-relaxed">
            {features.map((f, i) => (
              <li key={i}>
                <h2 className="flex items-center gap-2 text-orange-200 font-bold mb-1">
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
