import germen from '../assets/germen.jpeg';
import gritz3 from '../assets/gritz3.jpeg';
import fubafino from '../assets/fubafino.jpeg';
import fubaitaliano from '../assets/fubaitaliano.jpeg';
import fubamedio from '../assets/fubamedio.jpeg';
import canjicao from '../assets/canjicao.jpeg';
import canjiquinha from '../assets/canjiquinha.jpeg';
import dz1 from '../assets/dz1.jpeg';
import gritz1 from '../assets/gritz1.jpeg';
import { Link } from "react-router-dom";

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
      image: fubamedio,
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
      image: gritz1,
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
      image: gritz1,
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
      image: dz1,
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
  <section className="relative min-h-screen px-6 py-12 text-gray-800 overflow-hidden" style={{ boxShadow:`inset 0px 4px 12px rgba(0,0,0,0.2), inset 0px -4px 8px rgba(0,0,0,0.1)`}}>
    <div className="relative z-10 max-w-6xl mx-auto">
      <h2 className="text-lg text-center">
        A <span className="text-orange-400 font-medium">Chicago Foods</span> oferece ao mercado industrial uma linha completa de produtos à base de milho amarelo, produzidos com
        alto padrão de qualidade, controle de umidade e uniformidade granulométrica. Nossos derivados atendem amplamente às
        demandas das indústrias alimentícia, cervejeira, pet food, ração animal, entre outras aplicações que exigem padronização,
        segurança alimentar e estabilidade de fornecimento.
      </h2>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 pt-10">
        {products.map((product) => (
          <Link
            key={product.id}
            to={`/produtos/${product.id}`}
            className="bg-white bg-opacity-90 rounded-xl shadow-2xl transition-all duration-300 hover:scale-110 p-5 flex flex-col">
            <img
              src={product.image}
              alt={product.name}
              className="rounded-xl h-48 object-cover mb-4 shadow"
            />
            <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
            <p className="text-gray-600 mb-4 flex-grow">{product.description}</p>
            <div className="text-green-800 font-bold text-lg">{product.desc}</div>
          </Link>
        ))}
      </div>
    </div>
  </section>
  );
}
