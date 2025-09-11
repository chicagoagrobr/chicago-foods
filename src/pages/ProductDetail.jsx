import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import products from '../productsData';
import { useState } from "react";
import SEO from "../components/SEO";

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

  const [loadedImg, setLoadedImg] = useState(false);

  return (
    <>
    <SEO
      title={`${product.name} | Chicago Foods`}
      description={product.description}
      url={`https://chicagofoods.com.br/produtos/${product.id}`}
      image={product.image}
    />
    <div className="max-w-5xl mx-auto mt-8 mb-12 p-6 space-y-8">
      <button
        onClick={() => navigate('/produtos')}
        className="flex items-center gap-2 text-gray-700 hover:text-gray-900 mb-4"
      >
        <ArrowLeft size={20} />
        Voltar
      </button>

      <div className="max-w-4xl p-6 bg-white rounded-2xl shadow-xl flex flex-col md:flex-row items-center md:items-start gap-6">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          onLoad={() => setLoadedImg(true)}
          className={`w-60 h-60 object-cover rounded-lg shadow-lg transition duration-300 hover:scale-105
            ${loadedImg ? "blur-0 scale-100" : "blur-sm scale-105"}`}
        />
        <div className="flex-1">
          <h1 className="text-lg xs:text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-sm xs:text-lg text-gray-700">{product.description}</p>
        </div>
      </div>

      <p className="text-sm xs:text-lg text-gray-700 text-justify pt-2 pb-2">{product.longDesc}</p>

      {product.tables?.map((table, index) => (
        <div key={index} className="mb-8">
          <h2 className="text-xl font-semibold mb-4">{table.title}</h2>

          {isListOnly(table) ? (
            <ul className="list-disc list-inside text-gray-700">
              {table.data.map((row, i) => (
                <li key={i} className="mb-1">{row.caracteristica}</li>
              ))}
            </ul>
          ) : (
            <table className="w-full border-collapse border border-gray-300 shadow-md">
              <thead className="bg-gray-100">
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
        </div>
      ))}
    </div>
    </>
  );
}
