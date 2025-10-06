import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { ChatBubbleOvalLeftEllipsisIcon } from '@heroicons/react/24/outline';
import { useTranslation } from "react-i18next";

import germen from '../assets/germen.avif';
import fubafino from '../assets/fubafino.avif';
import fubaitaliano from '../assets/fubaitaliano.avif';
import fubamimoso from '../assets/fubamimoso.avif';
import canjica from '../assets/canjica.avif';
import canjicao from '../assets/canjicao.avif';
import canjiquinha from '../assets/canjiquinha.avif';
import gritz1 from '../assets/gritz1.avif';
import gritz2 from '../assets/gritz2.avif';
import gritz3 from '../assets/gritz3.avif';
import mixpro from '../assets/mixpro.avif';
import fundo5 from '../assets/fundo5.avif'
import SEO from "../components/SEO";

export default function ProductsPage() {
  const { t } = useTranslation("products");
  const [loadedImages, setLoadedImages] = useState({});

  const productImagesMap = {
    "fuba-fino": fubafino,
    "fuba-mimoso": fubamimoso,
    "fuba-italiano": fubaitaliano,
    "gritz-1": gritz1,
    "gritz-2": gritz2,
    "gritz-3": gritz3,
    "mixpro": mixpro,
    "canjiquinha": canjiquinha,
    "canjica": canjica,
    "canjicao": canjicao,
    "germen": germen,
  };

  const products = t("products", { returnObjects: true }).map(p => ({
    ...p,
    image: productImagesMap[p.id],
  }));

  useEffect(() => {
    Object.values(productImagesMap).forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  return (
    <>
      <SEO
        title={t("seo.title")}
        description={t("seo.description")}
        url="https://chicagofoods.com.br/produtos"
        image="https://chicagofoods.com.br/cf_512_square_adjusted.png"
      />
      <main className="min-h-screen text-gray-800 overflow-hidden">
        <a
          href="https://wa.me/5564999642170"
          target="_blank"
          rel="noopener noreferrer"
          aria-label={t("whatsappLabel")}
        >
          <button className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 p-4 rounded-full shadow-lg animate-shake-every-10s z-50">
            <ChatBubbleOvalLeftEllipsisIcon className="w-8 h-8 text-white" />
          </button>
        </a>

        <section className="relative">
          <img
            src={fundo5}
            alt={t("heroImageAlt")}
            loading="eager"
            fetchpriority="high"
            className="w-full h-[180px] object-cover"
            style={{ boxShadow: `0px 4px 12px rgba(0,0,0,0.25)` }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/15 flex flex-col justify-center items-center text-center">
            <h1
              className="text-white text-lg font-medium md:text-xl max-w-4xl leading-relaxed"
              dangerouslySetInnerHTML={{ __html: t("heroText") }}
            />
          </div>
        </section>

        <section className="max-w-7xl mx-auto py-12 px-4">
          <div className="grid gap-8 big:grid-cols-2 lg:grid-cols-4 ml-2 mr-2 md:ml-16 md:mr-16 mb-15">
            {products.map((product) => (
              <Link
                key={product.id}
                to={`/produtos/${product.id}`}
                className="bg-white rounded-2xl shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl hover:scale-105"
              >
                <div className="relative h-48 w-full">
                  {!loadedImages[product.id] && (
                    <div className="absolute inset-0 bg-gray-200 animate-pulse" />
                  )}

                  <img
                    src={product.image}
                    alt={product.name}
                    onLoad={() =>
                      setLoadedImages((prev) => ({
                        ...prev,
                        [product.id]: true,
                      }))
                    }
                    className={`h-48 w-full object-cover transition-all duration-700 hover:scale-110 ${
                      loadedImages[product.id] ? "opacity-100" : "opacity-0"
                    }`}
                  />
                </div>

                <div className="p-5 flex flex-col h-full">
                  <h2 className="text-lg font-bold text-gray-700">{product.name}</h2>
                  <div className="text-green-700">{product.desc}</div>
                  <p className="text-sm text-gray-600 mt-2">{product.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
