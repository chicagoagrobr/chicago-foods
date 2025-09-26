import SEO from "../components/SEO";
import heroImg from "../assets/fundoSobre.avif";
import { ChevronDown } from "lucide-react";
import { ChatBubbleOvalLeftEllipsisIcon } from '@heroicons/react/24/outline';

export default function AboutContent() {
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
      aria-label="Chat on WhatsApp"
    >
      <button className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 p-4 rounded-full shadow-lg animate-shake z-50">
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
      <div className="absolute inset-0 backdrop-blur-sm bg-black/30"></div>
      
      <div className="absolute inset-0 bg-gradient-to-r from-green-700/40 to-orange-700/40"></div>

      <div className="relative z-10 max-w-3xl px-6">
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight drop-shadow-lg">
          Transformando o potencial agrícola <br />
          em <span className="text-orange-300">negócios sustentáveis</span>
        </h1>

        <p className="mt-6 text-lg md:text-xl text-gray-100 font-medium drop-shadow-md">
          Produção agrícola, <span className="text-orange-200">inovação no mercado</span>
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
            className="inline-flex items-center gap-2 bg-orange-400 hover:bg-orange-300 text-green-900 font-semibold px-6 py-3 rounded-full shadow-lg transition transform hover:scale-105"
          >
            Saiba Mais <ChevronDown className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
    </>
  );
}
