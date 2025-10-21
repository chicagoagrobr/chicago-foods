import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import colaboracao from "../assets/colaboracao.avif";
import { useState, useEffect } from "react";
import SEO from "../components/SEO";
import { ChatBubbleOvalLeftEllipsisIcon } from "@heroicons/react/24/outline";
import { useTranslation } from "react-i18next";

export default function ContactContent() {
  const { t } = useTranslation("contact");

  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    assunto: "",
    mensagem: "",
  });

  const [statusMessage, setStatusMessage] = useState(null);
  const [sending, setSending] = useState(false);

  function handleChange(e) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setSending(true);

    try {
      const emailjs = await import("emailjs-com");

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formData,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setStatusMessage({
        type: "success",
        text: t("successMessage"),
      });

      setFormData({ nome: "", email: "", assunto: "", mensagem: "" });
    } catch (err) {
      console.error("Erro:", err);
      setStatusMessage({
        type: "error",
        text: t("errorMessage"),
      });
    } finally {
      setSending(false);
    }
  }

  useEffect(() => {
    if (statusMessage) {
      const timer = setTimeout(() => setStatusMessage(null), 6000);
      return () => clearTimeout(timer);
    }
  }, [statusMessage]);

  return (
    <>
      <SEO
        title={t("seo.title")}
        description={t("seo.description")}
        url="https://chicagofoods.com.br/contato"
        image="https://chicagofoods.com.br/cf_512_square_adjusted.png"
      />

      <main className="min-h-0 text-gray-800 dark:bg-zinc-900 dark:text-gray-200">
        <a
          href="https://wa.me/5564999642170"
          target="_blank"
          rel="noopener noreferrer"
          aria-label={t("whatsappLabel")}
        >
          <button className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 p-4 rounded-full shadow-lg animate-shake-every-10s z-50">
            <ChatBubbleOvalLeftEllipsisIcon className="w-8 h-8 text-white" />
          </button>
        </a>

        <section className="relative w-full h-[180px]">
          <img
            src={colaboracao}
            alt={t("heroImageAlt")}
            loading="eager"
            fetchpriority="high"
            className="w-full h-full object-cover"
            style={{ boxShadow: `0px 4px 12px rgba(0,0,0,0.25)` }}
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 bg-black/40 text-white">
            <h1 className="text-2xl font-bold mb-2">
              <span className="text-orange-300 dark:text-orange-400">{t("heroTitle")}</span>
            </h1>
            <h2 className="max-w-2xl font-medium">
              {t("heroSubtitle")}
            </h2>
          </div>
        </section>

        <section className="max-w-4xl md:pl-2 xxs:pl-0 pr-2 mx-auto py-16">
          <div className="grid md:grid-cols-2 gap-10">
            <form
              aria-label={t("formLabel")}
              onSubmit={handleSubmit}
              className="space-y-4 bg-white dark:bg-zinc-800 p-8 rounded-xl shadow-2xl xxs:w-[280px] celular:w-[320px] big:w-full max-w-md mx-auto"
            >
              <label className="block text-sm font-medium mb-1">
                {t("form.name")}
              </label>
              <input
                type="text"
                name="nome"
                value={formData.nome}
                onChange={handleChange}
                placeholder={t("form.namePlaceholder")}
                required
                className="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-800 dark:bg-zinc-700 dark:border-none"
              />

              <label className="block text-sm font-medium mb-1">
                {t("form.email")}
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder={t("form.emailPlaceholder")}
                required
                className="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-800 dark:bg-zinc-700 dark:border-none"
              />

              <label className="block text-sm font-medium mb-1">
                {t("form.subject")}
              </label>
              <input
                type="text"
                name="assunto"
                value={formData.assunto}
                onChange={handleChange}
                placeholder={t("form.subjectPlaceholder")}
                required
                className="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-800 dark:bg-zinc-700 dark:border-none"
              />

              <label className="block text-sm font-medium mb-1">
                {t("form.message")}
              </label>
              <textarea
                name="mensagem"
                value={formData.mensagem}
                onChange={handleChange}
                placeholder={t("form.messagePlaceholder")}
                required
                className="w-full border rounded px-4 py-2 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-green-800 dark:bg-zinc-700 dark:border-none"
              ></textarea>

              <button
                disabled={sending}
                className={`px-6 py-2 rounded text-white transition ${
                  sending
                    ? "bg-gray-500 cursor-not-allowed"
                    : "bg-green-800 hover:bg-green-900"
                }`}
              >
                {sending ? t("form.sending") : t("form.send")}
              </button>
            </form>

            <div className="bg-white dark:bg-zinc-800 p-8 rounded-xl shadow-2xl flex flex-col xxs:w-[280px] celular:w-[320px] big:w-full max-w-md mx-auto">
              <h3 className="text-xl font-semibold mb-4">
                {t("infoTitle")}
              </h3>

              <div className="flex items-start gap-4 mb-4">
                <FaEnvelope className="text-green-800 dark:text-green-500 mt-1" />
                <div>
                  <p className="font-medium">{t("info.email")}</p>
                  <p>contato@chicagofoods.com.br</p>
                </div>
              </div>

              <div className="flex items-start gap-4 mb-4">
                <FaPhoneAlt className="text-green-800 dark:text-green-500 mt-1" />
                <div>
                  <p className="font-medium">{t("info.phone")}</p>
                  <p>(64) 99964-2170</p>
                </div>
              </div>

              <div className="flex items-start gap-4 mb-4">
                <FaMapMarkerAlt className="text-green-800 dark:text-green-500 mt-1" />
                <div>
                  <p className="font-medium">{t("info.address")}</p>
                  <p>{t("info.addressDetail")}</p>
                </div>
              </div>

              <p className="mt-6 text-sm text-green-800 dark:text-green-500">
                {t("info.note")}
              </p>
            </div>
          </div>
        </section>

        {statusMessage && (
          <div
            className={`fixed animate-slide-in z-50 bottom-5 right-5 px-4 py-3 rounded-lg shadow-lg text-white transition-opacity duration-500 ${
              statusMessage.type === "success"
                ? "bg-green-600"
                : "bg-red-600"
            }`}
          >
            {statusMessage.text}
          </div>
        )}
      </main>
    </>
  );
}
