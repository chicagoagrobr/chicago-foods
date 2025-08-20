import germen from '../assets/germen.jpeg';
import fubafino from '../assets/fubafino.jpeg';
import fubaitaliano from '../assets/fubaitaliano.jpeg';
import fubamimoso from '../assets/fubamimoso.jpeg';
import canjica from '../assets/canjica.jpeg';
import canjicao from '../assets/canjicao.jpeg';
import canjiquinha from '../assets/canjiquinha.jpeg';
import gritz1 from '../assets/gritz1.jpeg';
import gritz2 from '../assets/gritz2.jpeg';
import gritz3 from '../assets/gritz3.jpeg';
import mixpro from '../assets/mixpro.jpeg';
import { Link } from "react-router-dom";
import fundo5 from '../assets/fundo5.jpeg'

export default function ProductsPage() {
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
      name: "Gérmen",
      description: "Subproduto nobre do milho, rico em nutrientes, sendo indicado para enriquecimento nutricional e formulações de alto valor agregado.",
      desc: "Alto Valor Nutricional",
      image: germen,
    },
  ];

  return (
    <section className="min-h-screen text-gray-800 overflow-hidden">
      <div className="relative">
        <img
          src={fundo5}
          alt="Plantação"
          className="w-full h-[180px] object-cover " style={{ boxShadow: `0px 4px 12px rgba(0,0,0,0.45)`}}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/25 flex flex-col justify-center items-center text-center">
          <h2 className="text-white text-lg md:text-xl max-w-4xl leading-relaxed">
            A <span className="text-orange-300 font-semibold">Chicago Foods</span> oferece ao mercado industrial uma linha completa de produtos à base de milho amarelo, com alto padrão de qualidade e uniformidade granulométrica.
          </h2>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-12 px-4">
        <div className="grid gap-8 big:grid-cols-2 lg:grid-cols-4 ml-2 mr-2 md:ml-16 md:mr-16 mb-15">
          {products.map((product) => (
            <Link
              key={product.id}
              to={`/produtos/${product.id}`}
              className="bg-white rounded-2xl shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-48 w-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              <div className="p-5 flex flex-col h-full">
                <h3 className="text-lg font-bold text-gray-700">{product.name}</h3>
                <div className="text-green-700">{product.desc}</div>
                <p className="text-sm text-gray-600 mt-2">{product.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
