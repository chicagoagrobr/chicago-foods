export default function ProductsPage() {
  const products = [
    {
      id: 1,
      name: "GRITZ 1",
      description: "Produto de granulometria fina, ideal para processos industriais que exigem uniformidade e boa fluidez.",
      desc: "Granulação Fina",
      image: "/assets/molho.jpg",
    },
    {
      id: 2,
      name: "GRITZ 2",
      description: "Versátil para aplicações que exigem equilíbrio entre estrutura e solubilidade.",
      desc: "Granulação Intermediária",
      image: "/assets/picles.jpg",
    },
    {
      id: 3,
      name: "GRITZ 3",
      description: "Partículas maiores, ideal para formulações que demandam retenção de estrutura e menor solubilidade imediata.",
      desc: "Granulação Grossa",
      image: "/assets/ketchup.jpg",
    },
    {
      id: 4,
      name: "CANJIQUINHA",
      description: "Produto robusto e tradicional com textura ideal para preparo de alimentos prontos.",
      desc: "Textura Encorpada",
      image: "/assets/mostarda.jpg",
    },
    {
      id: 5,
      name: "CANJICA",
      description: "Grão grande ideal para preparações doces e pratos gourmet industrializados.",
      desc: "Grão Degerminado",
      image: "/assets/chutney.jpg",
    },
    {
      id: 6,
      name: "FUBÁ FINO",
      description: "Produto com alta dispersão e absorção, ideal para formulações fermentadas e panificação.",
      desc: "Moagem Ultrafina",
      image: "/assets/maionese.jpg",
    },
    {
      id: 7,
      name: "FUBÁ ITALIANO",
      description: "Textura encorpada com toque gourmet, para receitas tradicionais e também processos industriais modernos.",
      desc: "Moagem Média",
      image: "/assets/maionese.jpg",
    },
  ];

  return (
    <section className="min-h-screen px-6 py-16 bg-lime-50 text-gray-800" style={{ boxShadow:`inset 0px -4px 4px rgba(0,0,0,0.10)`}}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-lg font-bold mb-10 text-center text-green-800">
            A Chicago Foods oferece ao mercado industrial uma linha completa de produtos à base de milho amarelo, produzidos com
            alto padrão de qualidade, controle de umidade e uniformidade granulométrica. Nossos derivados atendem amplamente às
            demandas das indústrias alimentícia, cervejeira, pet food, ração animal, entre outras aplicações que exigem padronização,
            segurança alimentar e estabilidade de fornecimento.
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 pt-10">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-xl shadow hover:shadow-lg transition p-5 flex flex-col">
              <img
                src={product.image}
                alt={product.name}
                className="rounded-xl h-48 object-cover mb-4"
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
