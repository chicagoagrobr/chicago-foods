import empresa from '../assets/empresa.avif';
import empresa1 from '../assets/empresa3.avif';
import empresa2 from '../assets/empresa2.avif';
import img1 from '../assets/fundo1.avif';
import img2 from '../assets/fundo2.avif';
import img3 from '../assets/fundo3.avif';
import img4 from '../assets/fundo4.avif';
import colaboracao from '../assets/colaboracao.avif';
import CepeaWidget from '../components/CepeaWidget';
import SEO from "../components/SEO";
import HeroSection from "../components/HeroSection";
import { ChatBubbleOvalLeftEllipsisIcon } from '@heroicons/react/24/outline';
import { useTranslation } from "react-i18next";

const images = [img1, img2, img3, img4];

export default function HomeContent() {
  const { t } = useTranslation("home");

  const carouselAlts = [
    t("carousel.alt1"),
    t("carousel.alt2"),
    t("carousel.alt3"),
    t("carousel.alt4"),
  ];

  return (
    <>
      <SEO
        title={t("seo.title")}
        description={t("seo.description")}
        url="https://chicagofoods.com.br/"
        image="https://chicagofoods.com.br/cf_512_square_adjusted.png"
      />

      <main
        className="w-full relative bg-white dark:bg-zinc-900 dark:text-orange-100"
        style={{ boxShadow: `inset 0px -4px 6px rgba(0,0,0,0.10)` }}
      >
        <HeroSection images={images} carouselAlts={carouselAlts} />

        <a
          href="https://wa.me/5564999642170"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
        >
          <button className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 p-4 rounded-full shadow-lg animate-shake-every-10s z-50">
            <ChatBubbleOvalLeftEllipsisIcon className="w-8 h-8 text-white" />
          </button>
        </a>

        <section className="w-full flex justify-center px-4 mt-8 md:mt-16">
          <p className="max-w-[1200px] text-xl md:text-2xl p-6">
            {t("about.text1")}{" "}
            <span className="font-bold text-orange-400">Chicago Foods</span>,{" "}
            {t("about.text2")}
          </p>
        </section>

        <section className="w-full py-10 px-4 mb-6 mt-8 flex justify-center">
          <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div className="w-full h-[400px] relative flex xxs:-mt-24 md:mt-0">
              <img src={empresa} alt={t("images.alt1")} loading="lazy" decoding="async"
                className="absolute left-[26%] big:left-[34%] top-56 md:top-40 xxs:w-[210px] lg:w-[300px] xl:w-[340px] rounded-2xl shadow-2xl" />
              <img src={empresa1} alt={t("images.alt2")} loading="lazy" decoding="async"
                className="absolute lg:left-[6%] big:left-[12%] top-32 md:top-16 xxs:w-[220px] lg:w-[260px] rounded-2xl shadow-2xl" />
              <img src={empresa2} alt={t("images.alt3")} loading="lazy" decoding="async"
                className="absolute left-[29%] big:left-[40%] top-16 md:top-4 lg:top-2 xxs:w-[205px] lg:w-[300px] xl:w-[360px] rounded-2xl shadow-2xl" />
            </div>

            <div className="flex flex-col gap-8 text-center text-lg md:text-sm xl:text-lg md:text-left">
              <div>
                <h3 className="text-xl big:text-2xl sm:text-3xl md:text-xl xl:text-2xl font-semibold mb-4 dark:text-white">
                  {t("production.title")}
                </h3>
                <p className="mb-4 sm:text-left">{t("production.subtitle")}</p>
                <ul className="list-disc pl-6 space-y-2 marker:text-green-800 text-left">
                  <li>{t("production.item1")}</li>
                  <li>{t("production.item2")}</li>
                  <li>{t("production.item3")}</li>
                </ul>
              </div>
              <div className="flex justify-center md:justify-start md:-ml-10 xl:ml-0 -mt-10">
                <div className="scale-[0.70] celular:scale-75 xs:scale-90 big:scale-100 md:scale-75 xl:scale-100">
                  <CepeaWidget />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative px-6 mt-4 lg:mt-16 mb-24 md:px-32 max-w-[1600px] mx-auto">
          <div className="bg-gradient-to-br from-lime-50 via-white to-green-50 dark:from-zinc-800 dark:to-green-800 rounded-2xl shadow-lg p-8 md:p-12 border-l-4 border-green-800">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-orange-50 mb-4">
              {t("trust.title")}
            </h3>
            <p className="text-lg text-gray-700 dark:text-orange-100 mb-4 leading-relaxed">
              {t("trust.text1")}
            </p>
            <p className="text-lg text-gray-700 dark:text-orange-100 leading-relaxed">
              {t("trust.text2")}
            </p>
          </div>
        </section>

        <section className="relative w-full h-[300px]">
          <img
            src={colaboracao}
            alt={t("commitment.imageAlt")}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover blur-xs"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 bg-black/40 text-white">
            <h3 className="text-2xl font-bold mb-2">
                <span className="text-orange-400">{t("commitment.highlight")}</span> {t("commitment.title")}
            </h3>
            <p className="max-w-2xl">{t("commitment.text")}</p>
          </div>
        </section>
      </main>
    </>
  );
}
