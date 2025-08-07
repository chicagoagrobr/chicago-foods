import germen from '../assets/germen.jpeg';
import gritz3 from '../assets/gritz3.jpeg';
import mixpro from '../assets/mixpro.jpeg';
import fubafino from '../assets/fubafino.jpeg';
import fubaitaliano from '../assets/fubaitaliano.jpeg';
import fubamedio from '../assets/fubamedio.jpeg';
import canjicao from '../assets/canjicao.jpeg';
import canjiquinha from '../assets/canjiquinha.jpeg';
import dz1 from '../assets/dz1.jpeg';
import cf from '../assets/cf.png';

export default function ProductsPage() {
  const products = [
    {
      id: 1,
      name: "GRITZ 1",
      description: "Produto de granulometria fina, ideal para processos industriais que exigem uniformidade e boa fluidez.",
      desc: "Granulação Fina",
      image: "/assets/picles.jpg",
    },
    {
      id: 2,
      name: "GRITZ 2",
      description: "Versátil para aplicações que exigem equilíbrio entre estrutura e solubilidade.",
      desc: "Granulação Intermediária",
      image: "/assets/picles.jpg",
    },
    {
      id: 4,
      name: "MixPro",
      description: "Partículas maiores, ideal para formulações que demandam retenção de estrutura e menor solubilidade imediata.",
      desc: "Granulação Grossa",
      image: mixpro,
    },
    {
      id: 5,
      name: "GRITZ 3",
      description: "Partículas maiores, ideal para formulações que demandam retenção de estrutura e menor solubilidade imediata.",
      desc: "Granulação Grossa",
      image: gritz3,
    },
    {
      id: 6,
      name: "CANJIQUINHA",
      description: "Produto robusto e tradicional com textura ideal para preparo de alimentos prontos.",
      desc: "Textura Encorpada",
      image: canjiquinha,
    },
    {
      id: 7,
      name: "CANJICA",
      description: "Grão grande ideal para preparações doces e pratos gourmet industrializados.",
      desc: "Grão Degerminado",
      image: dz1,
    },
    {
      id: 8,
      name: "CANJICAO",
      description: "Grão grande ideal para preparações doces e pratos gourmet industrializados.",
      desc: "Grão Degerminado",
      image: canjicao,
    },
    {
      id: 9,
      name: "FUBÁ FINO",
      description: "Produto com alta dispersão e absorção, ideal para formulações fermentadas e panificação.",
      desc: "Moagem Ultrafina",
      image: fubafino,
    },
    {
      id: 10,
      name: "FUBÁ MEDIO",
      description: "Textura encorpada com toque gourmet, para receitas tradicionais e também processos industriais modernos.",
      desc: "Moagem Média",
      image: fubamedio,
    },
    {
      id: 11,
      name: "FUBÁ ITALIANO",
      description: "Textura encorpada com toque gourmet, para receitas tradicionais e também processos industriais modernos.",
      desc: "Moagem Média",
      image: fubaitaliano,
    },
    {
      id: 11,
      name: "GERMEN",
      description: "Textura encorpada com toque gourmet, para receitas tradicionais e também processos industriais modernos.",
      desc: "Moagem Média",
      image: germen,
    },
  ];

  return (
  <section className="relative min-h-screen px-6 py-12 text-gray-800 overflow-hidden" style={{ boxShadow:`inset 0px 4px 12px rgba(0,0,0,0.2), inset 0px -4px 8px rgba(0,0,0,0.1)`}}>
    <div
      className="absolute inset-0 z-0 top-[100px]"
      style={{
        backgroundImage: `url(${cf})`,
        backgroundSize: '93%',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'top',
        filter: 'blur(6px)',
        opacity: 0.3
      }}
    />

    <div className="relative z-10 max-w-6xl mx-auto">
      <h2 className="text-lg text-center">
        A <span className="text-orange-400 font-medium">Chicago Foods</span> oferece ao mercado industrial uma linha completa de produtos à base de milho amarelo, produzidos com
        alto padrão de qualidade, controle de umidade e uniformidade granulométrica. Nossos derivados atendem amplamente às
        demandas das indústrias alimentícia, cervejeira, pet food, ração animal, entre outras aplicações que exigem padronização,
        segurança alimentar e estabilidade de fornecimento.
      </h2>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 pt-10">
        {products.map((product) => (
          <div key={product.id} className="bg-white bg-opacity-90 rounded-xl shadow-2xl transition-all duration-300 hover:scale-110 p-5 flex flex-col">
            <img
              src={product.image}
              alt={product.name}
              className="rounded-xl h-48 object-cover mb-4 shadow"
            />
            <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
            <p className="text-gray-600 mb-4 flex-grow">{product.description}</p>
            <div className="text-green-800 font-bold text-lg">{product.desc}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
  );
}
