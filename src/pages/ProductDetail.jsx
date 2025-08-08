import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

import germen from '../assets/germen.jpeg';
import gritz3 from '../assets/gritz3.jpeg';
import fubafino from '../assets/fubafino.jpeg';
import fubaitaliano from '../assets/fubaitaliano.jpeg';
import fubamedio from '../assets/fubamedio.jpeg';
import canjicao from '../assets/canjicao.jpeg';
import canjiquinha from '../assets/canjiquinha.jpeg';
import dz1 from '../assets/dz1.jpeg';
import gritz1 from '../assets/gritz1.jpeg';

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const products = [
    { id: "4", name: "GRITZ 1", description: "Produto de granulometria fina...", longDesc: "Produto de granulometria fina, ideal para processos industriais que exigem uniformidade e boa fluidez. Excelente para uso em cervejarias, indústrias alimentícias e rações, garantindo consistência no produto final.", image: gritz1 },
    { id: "5", name: "GRITZ 2", description: "Versátil para aplicações...", longDesc: "Versátil para aplicações que exigem equilíbrio entre estrutura e solubilidade, sendo ideal para processos que demandam boa absorção e estabilidade de mistura.", image: gritz1 },
    { id: "7", name: "MixPro", description: "Partículas maiores...", longDesc: "Partículas maiores, ideal para formulações que demandam retenção de estrutura e menor solubilidade imediata. Ótima para alimentos extrusados e produtos de panificação específicos.", image: gritz1 },
    { id: "6", name: "GRITZ 3", description: "Partículas maiores...", longDesc: "Granulação grossa com excelente retenção de forma. Perfeito para produtos que necessitam de estrutura firme e crocante.", image: gritz3 },
    { id: "8", name: "CANJIQUINHA", description: "Produto robusto...", longDesc: "Produto robusto e tradicional com textura ideal para preparo de pratos típicos brasileiros, sopas e acompanhamentos.", image: canjiquinha },
    { id: "9", name: "CANJICA", description: "Grão grande ideal...", longDesc: "Grão grande e de alta qualidade, usado para doces, pratos gourmet e receitas festivas.", image: dz1 },
    { id: "10", name: "CANJICAO", description: "Grão grande ideal...", longDesc: "Similar à canjica tradicional, mas com grãos selecionados para melhor rendimento industrial.", image: canjicao },
    { id: "1", name: "FUBÁ FINO", description: "Produto com alta dispersão e absorção, ideal para formulações fermentadas e panificação.", longDesc: "Fubá de moagem ultrafina com alta dispersão e absorção, ideal para pães, bolos e fermentações rápidas.", image: fubafino },
    { id: "2", name: "FUBÁ MÉDIO", description: "Textura encorpada...", longDesc: "Fubá de moagem média que confere textura encorpada para receitas tradicionais e processos industriais modernos.", image: fubamedio },
    { id: "3", name: "FUBÁ ITALIANO", description: "Textura encorpada com toque gourmet, para receitas tradicionais e também processos industriais modernos.", longDesc: "Moagem especial para polentas e receitas italianas, garantindo sabor e consistência diferenciada.", image: fubaitaliano },
    { id: "11", name: "GERMEN", description: "Textura encorpada...", longDesc: "Rico em nutrientes e fibras, indicado para enriquecimento nutricional e uso em pães e cereais.", image: germen },
  ];

  const product = products.find(p => p.id === id);

  if (!product) {
    return <h2 className="text-center text-red-500">Produto não encontrado</h2>;
  }

  return (
    <div className="max-w-5xl mx-auto mt-8 mb-12 p-6 space-y-8">
      <button
        onClick={() => navigate('/produtos')}
        className="flex items-center gap-2 text-gray-700 hover:text-gray-900 mb-4"
      >
        <ArrowLeft size={20} />
        Voltar
      </button>

      <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
        <img
          src={product.image}
          alt={product.name}
          className="w-60 h-60 object-cover rounded-lg shadow-lg "
        />
        <div className="flex-1">
          <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
          <p className="text-lg text-gray-700 mr-20">{product.description}</p>
        </div>
      </div>

      <p className="text-lg text-gray-700 text-justify pt-8 pb-8">{product.longDesc}</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
          </tbody>
        </table>

        <table className="w-full border-collapse border border-gray-300 shadow-md">
          <thead className="bg-gray-100">
            <tr>
              <th className="border border-gray-300 p-3">Característica</th>
              <th className="border border-gray-300 p-3">Valor</th>
            </tr>
          </thead>
          <tbody>
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
    </div>
  );
}
