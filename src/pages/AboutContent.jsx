import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { ChatBubbleOvalLeftEllipsisIcon } from "@heroicons/react/24/outline";
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

const products = [
  { id: "fuba-fino", name: "Fubá Fino", image: fubafino },
  { id: "fuba-mimoso", name: "Fubá Mimoso", image: fubamimoso },
  { id: "fuba-italiano", name: "Fubá Italiano", image: fubaitaliano },
  { id: "gritz-1", name: "Gritz 1", image: gritz1 },
  { id: "gritz-2", name: "Gritz 2", image: gritz2 },
  { id: "gritz-3", name: "Gritz 3", image: gritz3 },
  { id: "mixpro", name: "MixPro", image: mixpro },
  { id: "canjiquinha", name: "Canjiquinha", image: canjiquinha },
  { id: "canjica", name: "Canjica", image: canjica },
  { id: "canjicao", name: "Canjicão", image: canjicao },
  { id: "germen", name: "Nutrição Animal - Gérmen de Milho", image: germen },
];

export default function AboutContent() {
  useEffect(() => {
    products.forEach((p) => {
      const img = new Image();
      img.src = p.image;
    });
  }, []);

  return (
    <>
      <SEO
        title="Sobre Nós | Chicago Foods"
        description="Na Chicago Foods, temos o compromisso de fornecer derivados de milho de alta qualidade. Transformamos suas ideias em produtos que geram valor e confiança."
        url="https://chicagofoods.com.br/sobre"
        image="https://chicagofoods.com.br/cf_512_square_adjusted.png"
      />

      <a
        href="https://wa.me/5564999642170"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat no WhatsApp"
      >
        <button className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 p-4 rounded-full shadow-lg animate-shake-every-10s z-50">
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
        <div className="absolute inset-0 backdrop-blur-sm bg-gradient-to-b from-black/60"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-green-700/20 to-orange-700/30"></div>

        <div className="relative z-10 max-w-3xl px-6">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight drop-shadow-lg">
            Transformando o potencial agrícola <br />
            em <span className="text-orange-300">negócios sustentáveis</span>
          </h1>

          <p className="mt-6 text-lg md:text-xl text-gray-100 font-medium drop-shadow-md">
            Produção agrícola,{" "}
            <span className="text-orange-200">inovação no mercado</span>
          </p>

          <div className="mt-8">
            <a
              href="#institucional"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("institucional")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center gap-2 bg-orange-400 hover:bg-orange-300 text-green-900 font-semibold px-6 py-3 rounded-full shadow-lg transition-transform transform hover:scale-105"
            >
              Saiba Mais <ChevronDown className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 text-center" id="institucional">
        <div className="max-w-4xl mx-auto space-y-6">
          <h2 className="text-3xl font-semibold">Quem Somos</h2>
          <p className="leading-relaxed">
            A{" "}
            <span className="font-semibold text-green-900">
              Chicago Agrobusiness
            </span>{" "}
            nasceu com a missão de transformar o potencial agrícola do{" "}
            <span className="font-semibold text-green-900">Centro-Oeste</span>{" "}
            em negócios sólidos, inovadores e sustentáveis.
          </p>
        </div>
      </section>

      <section className="py-16 bg-lime-75">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold mb-10">Nossos Produtos</h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {products.map((product, index) => (
              <Link
                key={product.id}
                to={`/produtos/${product.id}`}
                className="flex flex-col items-center text-center"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 object-cover rounded-full shadow-md hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <h3 className="mt-2 text-sm font-medium text-gray-800">
                  {product.name}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
