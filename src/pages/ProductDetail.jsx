import { useParams } from 'react-router-dom';
import germen from '../assets/germen.jpeg';
import gritz3 from '../assets/gritz3.jpeg';
import fubafino from '../assets/fubafino.jpeg';
import fubaitaliano from '../assets/fubaitaliano.jpeg';
import fubamedio from '../assets/fubamedio.jpeg';
import canjicao from '../assets/canjicao.jpeg';
import canjiquinha from '../assets/canjiquinha.jpeg';
import dz1 from '../assets/dz1.jpeg';

export default function ProductDetail() {
  const { id } = useParams();

  const products = [
    { id: "1", name: "GRITZ 1", description: "Produto de granulometria fina...", longDesc: "Produto de granulometria fina, ideal para processos industriais que exigem uniformidade e boa fluidez. Excelente para uso em cervejarias, indústrias alimentícias e rações, garantindo consistência no produto final.", image: gritz3 },
    { id: "2", name: "GRITZ 2", description: "Versátil para aplicações...", longDesc: "Versátil para aplicações que exigem equilíbrio entre estrutura e solubilidade, sendo ideal para processos que demandam boa absorção e estabilidade de mistura.", image: gritz3 },
    { id: "4", name: "MixPro", description: "Partículas maiores...", longDesc: "Partículas maiores, ideal para formulações que demandam retenção de estrutura e menor solubilidade imediata. Ótima para alimentos extrusados e produtos de panificação específicos.", image: mixpro },
    { id: "5", name: "GRITZ 3", description: "Partículas maiores...", longDesc: "Granulação grossa com excelente retenção de forma. Perfeito para produtos que necessitam de estrutura firme e crocante.", image: gritz3 },
    { id: "6", name: "CANJIQUINHA", description: "Produto robusto...", longDesc: "Produto robusto e tradicional com textura ideal para preparo de pratos típicos brasileiros, sopas e acompanhamentos.", image: canjiquinha },
    { id: "7", name: "CANJICA", description: "Grão grande ideal...", longDesc: "Grão grande e de alta qualidade, usado para doces, pratos gourmet e receitas festivas.", image: dz1 },
    { id: "8", name: "CANJICAO", description: "Grão grande ideal...", longDesc: "Similar à canjica tradicional, mas com grãos selecionados para melhor rendimento industrial.", image: canjicao },
    { id: "9", name: "FUBÁ FINO", description: "Alta dispersão e absorção...", longDesc: "Fubá de moagem ultrafina com alta dispersão e absorção, ideal para pães, bolos e fermentações rápidas.", image: fubafino },
    { id: "10", name: "FUBÁ MÉDIO", description: "Textura encorpada...", longDesc: "Fubá de moagem média que confere textura encorpada para receitas tradicionais e processos industriais modernos.", image: fubamedio },
    { id: "11", name: "FUBÁ ITALIANO", description: "Textura encorpada...", longDesc: "Moagem especial para polentas e receitas italianas, garantindo sabor e consistência diferenciada.", image: fubaitaliano },
    { id: "12", name: "GERMEN", description: "Textura encorpada...", longDesc: "Rico em nutrientes e fibras, indicado para enriquecimento nutricional e uso em pães e cereais.", image: germen },
  ];

  const product = products.find(p => p.id === id);

  if (!product) {
    return <h2 className="text-center text-red-500">Produto não encontrado</h2>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <img
        src={product.image}
        alt={product.name}
        className="w-80 h-80 object-cover rounded-lg mb-6 mx-auto shadow-lg"
      />

      <h1 className="text-3xl font-bold mb-4 text-center">{product.name}</h1>

      <p className="text-lg text-gray-700 mb-6 text-justify">{product.longDesc}</p>

      <table className="w-full border-collapse border border-gray-300 shadow-md">
        <thead className="bg-gray-100">
          <tr>
            <th className="border border-gray-300 p-3">Característica</th>
            <th className="border border-gray-300 p-3">Valor</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-300 p-3">Umidade Máx.</td>
            <td className="border border-gray-300 p-3">13%</td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-3">Granulometria</td>
            <td className="border border-gray-300 p-3">0,8 - 1,2 mm</td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-3">Cor</td>
            <td className="border border-gray-300 p-3">Amarelo Ouro</td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-3">Origem</td>
            <td className="border border-gray-300 p-3">Milho Amarelo</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
