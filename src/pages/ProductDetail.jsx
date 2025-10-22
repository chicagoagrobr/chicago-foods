import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { ChatBubbleOvalLeftEllipsisIcon } from '@heroicons/react/24/outline';
import { useTranslation } from 'react-i18next';
import products from '../productsData';
import SEO from "../components/SEO";

function isListOnly(table) {
  return table.data.every(row => !row.valor || row.valor.trim() === "");
}

export default function ProductDetail() {
  const { t, i18n } = useTranslation('productDetail');
  const { id } = useParams();
  const navigate = useNavigate();

  const product = products.find(p => p.id === id);

  if (!product) {
    return <h2 className="text-center text-red-500">{t('productNotFound')}</h2>;
  }

  const locale = i18n.language;
  const name = product.name[locale] || product.name['en'];
  const description = product.description[locale] || product.description['en'];
  const longDesc = product.longDesc[locale] || product.longDesc['en'];
  const tables = product.tables?.map(table => ({
    ...table,
    title: table.title[locale] || table.title['en'],
    data: table.data.map(row => ({
      caracteristica: row.caracteristica[locale] || row.caracteristica['en'],
      valor: typeof row.valor === 'object'
        ? (row.valor[locale] || row.valor['en'] || "")
        : row.valor
    }))
  }));

  return (
    <>
      <SEO
        title={`${name} | Chicago Foods`}
        description={description}
        url={`https://chicagofoods.com.br/produtos/${product.id}`}
        image={product.image}
      />

      <div className="min-h-screen bg-lime-75 dark:bg-zinc-900 pt-8 pb-12">
        <main className="max-w-5xl mx-auto p-6 space-y-8">
          <button
            aria-label={t('backToProducts')}
            onClick={() => navigate('/produtos')}
            className="flex items-center gap-2 text-gray-700 hover:text-gray-900 dark:text-gray-200 mb-4"
          >
            <ArrowLeft size={20} />
            {t('back')}
          </button>

          <a
            href="https://wa.me/5564999642170"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t('chatWhatsApp')}
          >
            <button className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 p-4 rounded-full shadow-lg animate-shake-every-10s z-50">
              <ChatBubbleOvalLeftEllipsisIcon className="w-8 h-8 text-white" />
            </button>
          </a>

          <section className="max-w-4xl p-6 bg-white dark:bg-zinc-700 rounded-2xl shadow-xl flex flex-col md:flex-row items-center md:items-start gap-6">
            <img
              src={product.image}
              alt={`${name} - ${t('highQualityCorn')}`}
              loading="eager"
              fetchPriority="high"
              className="w-60 h-60 object-cover rounded-lg shadow-lg transition duration-300 hover:scale-105"
            />
            <div className="flex-1">
              <h1 className="text-lg xs:text-3xl font-bold mb-4 dark:text-gray-200">{name}</h1>
              <p className="text-sm xs:text-lg text-gray-700 dark:text-gray-200">{description}</p>
            </div>
          </section>

          <section>
            <p className="text-sm xs:text-lg text-gray-700 dark:text-gray-200 text-justify pt-2 pb-2">{longDesc}</p>
          </section>

          {tables?.map((table, index) => (
            <section key={index} className="mb-8">
              <h2 className="text-xl font-semibold mb-4 dark:text-orange-400">{table.title}</h2>

              {isListOnly(table) ? (
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-200">
                  {table.data.map((row, i) => (
                    <li key={i} className="mb-1 ">{row.caracteristica}</li>
                  ))}
                </ul>
              ) : (
                <table className="w-full border-collapse border shadow-md bg-white dark:bg-zinc-700 dark:text-gray-200 rounded-2xl overflow-hidden">
                  <thead className="bg-green-800 text-lime-75">
                    <tr>
                      <th className="border border-gray-300 dark:border-zinc-600 p-3 text-left">
                        {t('feature')}
                      </th>
                      <th className="border border-gray-300 dark:border-zinc-600 p-3 text-left">
                        {t('standard')}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {table.data.map((row, i) => (
                      <tr key={i}>
                        <td className="border border-gray-300 p-3 dark:border-zinc-600">{row.caracteristica}</td>
                        <td className="border border-gray-300 p-3 dark:border-zinc-600">{row.valor}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </section>
          ))}
        </main>
      </div>
    </>
  );
}
