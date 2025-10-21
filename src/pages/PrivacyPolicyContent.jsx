import SEO from "../components/SEO";
import { useTranslation } from "react-i18next";

export default function PrivacyPolicyContent() {
  const { t } = useTranslation("privacy");

  const sections = t("sections", { returnObjects: true });

  return (
    <>
      <SEO
        title={t("seo.title")}
        description={t("seo.description")}
        url="https://chicagofoods.com.br/politica"
        image="https://chicagofoods.com.br/cf_512_square_adjusted.png"
      />

      <section className="min-h-screen text-gray-800 dark:bg-zinc-900 dark:text-gray-200">
        <div className="relative flex items-center justify-center h-64">
          <div className="text-center px-6">
            <h1 className="text-lg sm:text-3xl mb-2 text-green-800 font-bold">
              {t("header.title")}
            </h1>
            <p className="max-w-2xl text-gray-700 dark:text-gray-200 mx-auto text-sm sm:text-lg">
              {t("header.intro")}
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto pb-12 px-6 space-y-12">
          {sections.map((section, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-zinc-700 shadow-2xl hover:scale-105 transition rounded-lg p-8"
            >
              <h2 className="text-2xl font-semibold mb-4">{section.title}</h2>
              {Array.isArray(section.content) ? (
                <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-100">
                  {section.content.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-700 dark:text-gray-100">{section.content}</p>
              )}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
