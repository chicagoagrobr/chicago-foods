import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { ChatBubbleOvalLeftEllipsisIcon } from "@heroicons/react/24/outline";
import { useTranslation } from "react-i18next";
import SEO from "../components/SEO";

import heroImg from "../assets/fundoSobre.avif";
import germen from "../assets/germen.avif";
import fubafino from "../assets/fubafino.avif";
import fubaitaliano from "../assets/fubaitaliano.avif";
import fubamimoso from "../assets/fubamimoso.avif";
import canjica from "../assets/canjica.avif";
import canjicao from "../assets/canjicao.avif";
import canjiquinha from "../assets/canjiquinha.avif";
import gritz1 from "../assets/gritz1.avif";
import gritz2 from "../assets/gritz2.avif";
import gritz3 from "../assets/gritz3.avif";
import mixpro from "../assets/mixpro.avif";
import fundo3 from "../assets/fundo3.avif";
import empresa from "../assets/empresa.avif";
import colaboracao from "../assets/colaboracao.avif";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const carouselImages = [fundo3, canjicao, empresa, colaboracao];

const products = [
  { id: "fuba-fino", image: fubafino },
  { id: "fuba-mimoso", image: fubamimoso },
  { id: "fuba-italiano", image: fubaitaliano },
  { id: "gritz-1", image: gritz1 },
  { id: "gritz-2", image: gritz2 },
  { id: "gritz-3", image: gritz3 },
  { id: "mixpro", image: mixpro },
  { id: "canjiquinha", image: canjiquinha },
  { id: "canjica", image: canjica },
  { id: "canjicao", image: canjicao },
  { id: "germen", image: germen },
];

export default function AboutContent() {
  const { t } = useTranslation("about");

  useEffect(() => {
    products.forEach((p) => {
      const img = new Image();
      img.src = p.image;
    });
  }, []);

  return (
    <>
      <SEO
        title={t("seo.title")}
        description={t("seo.description")}
        url="https://chicagofoods.com.br/sobre"
        image="https://chicagofoods.com.br/cf_512_square_adjusted.png"
      />

      <a
        href="https://wa.me/5564999642170"
        target="_blank"
        rel="noopener noreferrer"
        aria-label={t("buttons.whatsapp")}
      >
        <button className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 p-4 rounded-full shadow-lg animate-shake-every-10s z-40">
          <ChatBubbleOvalLeftEllipsisIcon className="w-8 h-8 text-white" />
        </button>
      </a>

      <section
        className="relative h-[500px] flex items-center justify-center text-white"
        style={{
          backgroundImage: `url(${heroImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 backdrop-blur-sm bg-gradient-to-b from-black/30"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-green-700/20 to-orange-700/30"></div>

        <div className="relative z-10 max-w-3xl px-6">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight drop-shadow-lg">
            {t("hero.heading_part1")}{" "}
            <span className="text-orange-400">{t("hero.highlight")}</span>
          </h1>

          <p className="mt-6 text-lg md:text-xl text-gray-100 font-medium drop-shadow-md">
            {t("hero.subheading")}{" "}
            <span className="text-orange-300">{t("hero.highlight2")}</span>
          </p>

          <div className="mt-8">
            <a
              onClick={() => window.scrollBy({ top: 500, behavior: "smooth" })}
              className="inline-flex items-center gap-2 bg-green-900 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-full shadow-lg transition-transform transform hover:scale-105 cursor-pointer"
            >
              {t("hero.button")} <ChevronDown className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-white dark:bg-zinc-900">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-4xl font-bold text-green-900 dark:text-green-600 drop-shadow-md">
            {t("about.title")}
          </h2>
          <p className="text-lg md:text-xl leading-relaxed text-gray-800 dark:text-gray-100">
            {t("about.text_part1")}
            <span className="text-orange-400 font-bold">{t("about.highlight")}</span>
            {t("about.text_part2")}
          </p>
        </div>
      </section>

      <div className="dark:bg-zinc-700">
        <section className="relative flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto py-12 md:py-16 px-4 md:px-6 gap-8 md:gap-12">
          <div className="md:w-1/2 space-y-4 md:space-y-6 p-4 md:p-12">
            <h3 className="text-2xl sm:text-3xl md:text-4xl text-green-900 dark:text-green-600 font-bold mb-2 md:mb-4">
              {t("history.title")}
            </h3>
            <p className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-800 dark:text-gray-100">
              {t("history.text")}
            </p>
          </div>

          <div className="md:w-1/2 w-full">
            <Slider
              dots
              infinite
              speed={500}
              slidesToShow={1}
              slidesToScroll={1}
              autoplay
              autoplaySpeed={3000}
            >
              {carouselImages.map((img, index) => (
                <div key={index}>
                  <img
                    src={img}
                    alt={`Foto ${index + 1}`}
                    loading={index === 0 ? "eager" : "lazy"}
                    fetchPriority={index === 0 ? "high" : "auto"}
                    decoding="async"
                    className="w-full h-64 sm:h-80 md:h-96 object-cover"
                  />
                </div>
              ))}
            </Slider>
          </div>
        </section>
      </div>

      <section className="max-w-full mx-auto py-16 px-6 bg-white dark:bg-zinc-900">
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-lime-50 via-white to-green-50 dark:from-zinc-600 dark:via-green-700 dark:to-orange-400 rounded-2xl shadow-xl border-l-4 border-green-800 p-8 md:p-12 hover:scale-105 transition-transform duration-300">
            <p className="text-lg md:text-xl leading-relaxed text-gray-800 dark:text-gray-100">
              {t("mission.text_part1")}
              <span className="text-orange-400 font-bold">{t("mission.highlight")}</span>
              {t("mission.text_part2")}
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-zinc-900">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl text-green-900 dark:text-green-600 font-bold mb-10">
            {t("products.title")}
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {products.map((product) => (
              <Link
                key={product.id}
                to={`/produtos/${product.id}`}
                className="flex flex-col items-center text-center"
              >
                <img
                  src={product.image}
                  alt={t(`products.list.${product.id}`)}
                  className="w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 object-cover rounded-full shadow-xl hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <h3 className="mt-2 text-sm font-medium text-gray-800 dark:text-gray-100">
                  {t(`products.list.${product.id}`)}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
