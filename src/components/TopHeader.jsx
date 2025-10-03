import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Search, Phone } from "lucide-react";
import ReactCountryFlag from "react-country-flag";
import { useTranslation } from "react-i18next";

const keywordMap = [
  { keywords: ["contato", "fale", "suporte", "orçamento", "email", "endereço"], path: "/contato", label: "Página de Contato" },
  { keywords: ["sobre", "empresa", "quem somos"], path: "/sobre", label: "Sobre Nós" },
  { keywords: ["produto", "serviço", "oferta", "milho", "canjica", "fuba", "germen", "gritz"], path: "/produtos", label: "Produtos" },
];

export default function SubHeader() {
  const { t, i18n } = useTranslation();
  const [search, setSearch] = useState("");
  const [showToast, setShowToast] = useState(false);
  const navigate = useNavigate();

  function toggleLang() {
    const newLang = i18n.language === "pt" ? "en" : "pt";
    i18n.changeLanguage(newLang);
  }

  function normalize(text) {
    return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
  }

  function searchRedirect() {
    const userInput = normalize(search);
    const match = keywordMap.find((item) =>
      item.keywords.some((keyword) => userInput.includes(normalize(keyword)))
    );

    if (match) {
      navigate(match.path);
      setTimeout(() => window.scrollTo({ top: 100, behavior: "smooth" }), 100);
    } else {
      setShowToast(true);
      setTimeout(() => setShowToast(false), 4000);
    }
  }

  return (
    <div
      className="bg-lime-200 font-body py-3"
      style={{ boxShadow: `inset 0px -4px 8px rgba(0,0,0,0.2)` }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 gap-2 sm:gap-4 flex-wrap">
        <Link
          to="/contato"
          className="text-green-900 font-semibold text-xs sm:text-sm transition-transform duration-300 hover:scale-105 flex items-center gap-1"
        >
          {t("subheader.contactLink")}
          <Phone className="w-4 h-5 xxs:hidden xs:flex" />
        </Link>

        <div className="flex items-center gap-2 sm:gap-3">
          <div className="relative w-48 xxs:w-40 celular:w-48 sm:w-64">
            <input
              type="text"
              placeholder={t("subheader.searchPlaceholder")}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && searchRedirect()}
              className="text-sm font-semibold rounded-full px-4 py-2 pr-8 bg-white
                         placeholder-green-800 w-full focus:outline-none
                         focus:ring-2 focus:ring-green-900 transition-all duration-200"
            />
            <button
              onClick={searchRedirect}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-green-900 opacity-80 hover:opacity-100 transition w-4 h-4 flex items-center justify-center"
              aria-label="Pesquisar"
            >
              <Search className="w-4 h-4" />
            </button>
          </div>

          <button
            onClick={toggleLang}
            className="hover:scale-110 transition"
            title={i18n.language === "pt" ? "Change to English" : "Mudar para Português"}
          >
            <ReactCountryFlag
              countryCode={i18n.language === "pt" ? "BR" : "US"}
              svg
              style={{ width: "1.5em", height: "1.5em" }}
            />
          </button>
        </div>
      </div>

      {showToast && (
        <div className="fixed bottom-5 right-5 bg-white px-4 py-3 rounded shadow-lg animate-slide-in z-50">
          {t("subheader.noPageFound")}
        </div>
      )}

      <style jsx>{`
        .animate-slide-in {
          animation: slide-in 0.3s ease-out;
        }
        @keyframes slide-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
