import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import products from '../productsData';

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

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

      {product.tables?.map((table, index) => (
        <div key={index} className="mb-8">
          <h2 className="text-xl font-semibold mb-4">{table.title}</h2>
          <table className="w-full border-collapse border border-gray-300 shadow-md">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-300 p-3">Característica</th>
                <th className="border border-gray-300 p-3">Valor</th>
              </tr>
            </thead>
            <tbody>
              {table.data.map((row, i) => (
                <tr key={i}>
                  <td className="border border-gray-300 p-3">{row.caracteristica}</td>
                  <td className="border border-gray-300 p-3">{row.valor}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
}
