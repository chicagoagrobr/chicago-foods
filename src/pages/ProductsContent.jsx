import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { ChatBubbleOvalLeftEllipsisIcon } from '@heroicons/react/24/outline';

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
  const [loadedImages, setLoadedImages] = useState({});

  const productImages = [
    fubafino,
    fubamimoso,
    fubaitaliano,
    gritz1,
    gritz2,
    gritz3,
    mixpro,
    canjiquinha,
    canjica,
    canjicao,
    germen,
  ];

  const products = [
    {
      id: "fuba-fino",
      name: "Fubá Fino",
      description: "Produto com alta dispersão e absorção, ideal para formulações fermentadas e panificação.",
      desc: "Moagem Ultrafina",
      image: fubafino,
    },
    {
      id: "fuba-mimoso",
      name: "Fubá Mimoso",
      description: "Produto de textura suave e coloração uniforme, ideal para receitas tradicionais e aplicações industriais que demandam acabamento refinado.",
      desc: "Moagem Fina Tradicional",
      image: fubamimoso,
    },
    {
      id: "fuba-italiano",
      name: "Fubá Italiano",
      description: "Textura encorpada com toque gourmet, para receitas tradicionais e também processos industriais modernos.",
      desc: "Moagem Média",
      image: fubaitaliano,
    },
    {
      id: "gritz-1",
      name: "Gritz 1",
      description: "Produto de granulometria fina, ideal para processos industriais que exigem uniformidade e boa fluidez.",
      desc: "Granulação Fina",
      image: gritz1,
    },
    {
      id: "gritz-2",
      name: "Gritz 2",
      description: "Versátil para aplicações que exigem equilíbrio entre estrutura e solubilidade.",
      desc: "Granulação Intermediária",
      image: gritz2,
    },
    {
      id: "gritz-3",
      name: "Gritz 3",
      description: "Partículas maiores, ideal para formulações que demandam retenção de estrutura e menor solubilidade imediata.",
      desc: "Granulação Grossa",
      image: gritz3,
    },
    {
      id: "mixpro",
      name: "MixPro",
      description: "Blend desenvolvido para oferecer equilíbrio entre solubilidade e estrutura, unindo as características de duas granulometrias diferentes.",
      desc: "Mistura de Gritz1 e Gritz2",
      image: mixpro,
    },
    {
      id: "canjiquinha",
      name: "Canjiquinha",
      description: "Produto robusto e tradicional com textura ideal para preparo de alimentos prontos.",
      desc: "Textura Encorpada",
      image: canjiquinha,
    },
    {
      id: "canjica",
      name: "Canjica",
      description: "Grão médio ideal para preparações doces e pratos gourmet industrializados.",
      desc: "Grão Degerminado",
      image: canjica,
    },
    {
      id: "canjicao",
      name: "Canjicão",
      description: "Produto de grãos grandes, indicado para preparações que necessitam textura consistente e sabor característico do milho.",
      desc: "Grão Degerminado",
      image: canjicao,
    },
    {
      id: "germen",
      name: "Nutrição Animal-Gérmen de Milho",
      description: "Subproduto nobre do milho, rico em nutrientes, sendo indicado para enriquecimento nutricional e formulações de alto valor agregado.",
      desc: "Alto Valor Nutricional",
      image: germen,
    },
  ];

  useEffect(() => {
    productImages.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  return (
    <>
    <SEO
        title="Produtos | Chicago Foods"
        description="Na Chicago Foods, temos o compromisso de fornecer derivados de milho de alta qualidade. Transformamos suas ideias em produtos que geram valor e confiança."
        url="https://chicagofoods.com.br/produtos"
        image="https://chicagofoods.com.br/cf_512_square_adjusted.png"
    />
    <main className="min-h-screen text-gray-800 overflow-hidden">
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
      <section className="relative">
        <img
          src={fundo5}
          alt="Campo de milho pronto para colheita"
          loading="eager"
          fetchpriority="high"
          className="w-full h-[180px] object-cover"
          style={{ boxShadow: `0px 4px 12px rgba(0,0,0,0.25)` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/15 flex flex-col justify-center items-center text-center">
          <h1 className="text-white text-lg font-medium md:text-xl max-w-4xl leading-relaxed">
            A <span className="text-orange-300 font-bold">Chicago Foods</span> oferece ao mercado industrial uma linha completa de produtos à base de milho amarelo, com alto padrão de qualidade e uniformidade granulométrica.
          </h1>
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
                  <h2 className="text-lg font-bold text-gray-700">
                    {product.name}
                  </h2>
                  <div className="text-green-700">{product.desc}</div>
                  <p className="text-sm text-gray-600 mt-2">
                    {product.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>
    </main>
    </>
  );
}
