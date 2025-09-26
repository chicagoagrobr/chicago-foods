import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import products from '../productsData';
import SEO from "../components/SEO";
import { ChatBubbleOvalLeftEllipsisIcon } from '@heroicons/react/24/outline';

function isListOnly(table){
  return table.data.every(row => !row.valor || row.valor.trim() === "");
}

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const product = products.find(p => p.id === id);

  if (!product) {
    return <h2 className="text-center text-red-500">Produto não encontrado</h2>;
  }

  return (
    <>
    <SEO
      title={`${product.name} | Chicago Foods`}
      description={product.description}
      url={`https://chicagofoods.com.br/produtos/${product.id}`}
      image={product.image}
    />
    <main className="max-w-5xl mx-auto mt-8 mb-12 p-6 space-y-8">
      <button
        aria-label="Voltar para lista de produtos"
        onClick={() => navigate('/produtos')}
        className="flex items-center gap-2 text-gray-700 hover:text-gray-900 mb-4"
      >
        <ArrowLeft size={20} />
        Voltar
      </button>

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

      <section className="max-w-4xl p-6 bg-white rounded-2xl shadow-xl flex flex-col md:flex-row items-center md:items-start gap-6">
        <img
          src={product.image}
          alt={`${product.name} - milho de alta qualidade da Chicago Foods`}
          loading="eager"
          fetchPriority="high"
          className="w-60 h-60 object-cover rounded-lg shadow-lg transition duration-300 hover:scale-105"
        />
        <div className="flex-1">
          <h1 className="text-lg xs:text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-sm xs:text-lg text-gray-700">{product.description}</p>
        </div>
      </section>

      <section>
        <p className="text-sm xs:text-lg text-gray-700 text-justify pt-2 pb-2">{product.longDesc}</p>
      </section>

      {product.tables?.map((table, index) => (
        <section key={index} className="mb-8">
          <h2 className="text-xl font-semibold mb-4">{table.title}</h2>

          {isListOnly(table) ? (
            <ul className="list-disc list-inside text-gray-700">
              {table.data.map((row, i) => (
                <li key={i} className="mb-1">{row.caracteristica}</li>
              ))}
            </ul>
          ) : (
            <table className="w-full border-collapse border shadow-md bg-white rounded-2xl overflow-hidden">
              <thead className="bg-green-800 text-lime-75">
                <tr>
                  <th className="border border-gray-300 p-3 text-left">Característica</th>
                  <th className="border border-gray-300 p-3 text-left">Padrão</th>
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
          )}
        </section>
      ))}
    </main>
    </>
  );
}
