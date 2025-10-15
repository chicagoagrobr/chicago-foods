import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Search, Phone, Moon, Sun } from "lucide-react";
import ReactCountryFlag from "react-country-flag";
import { useTranslation } from "react-i18next";

const keywordMap = [
  { keywords: ["contato", "fale", "suporte", "orçamento", "email"], path: "/contato" },
  { keywords: ["sobre", "empresa", "quem somos"], path: "/sobre" },
  { keywords: ["produto", "milho", "fubá", "canjica"], path: "/produtos" },
];

export default function SubHeader() {
  const { t, i18n } = useTranslation();
  const [search, setSearch] = useState("");
  const [showToast, setShowToast] = useState(false);

  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  const navigate = useNavigate();

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  function changeLang(lang) {
    if (i18n.language !== lang) {
      i18n.changeLanguage(lang);
    }
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
      className="bg-lime-200 dark:bg-gray-900 dark:text-gray-100 font-body py-3 transition-colors duration-300"
      style={{ boxShadow: `inset 0px -4px 8px rgba(0,0,0,0.2)` }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 gap-2 sm:gap-4 flex-wrap">
        <Link
          to="/contato"
          className="text-green-900 dark:text-lime-200 font-semibold text-xs sm:text-sm flex items-center gap-1 hover:scale-105 transition-transform"
        >
          <span className="hidden big:inline">{t("subheader.contactLink")}</span>
          <Phone className="w-4 h-5" />
        </Link>

        <div className="flex items-center gap-3">
          <div className="relative w-28 celular:w-36 xs:w-48 sm:w-64">
            <input
              type="text"
              placeholder={t("subheader.searchPlaceholder")}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && searchRedirect()}
              className="text-sm font-semibold rounded-full px-4 py-2 pr-8 bg-white dark:bg-gray-800 dark:text-white placeholder-green-800 dark:placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-green-900 transition-all w-full"
            />
            <button
              onClick={searchRedirect}
              aria-label="Search"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-green-900 dark:text-lime-200 opacity-80 hover:opacity-100 transition"
            >
              <Search className="w-4 h-4" />
            </button>
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => changeLang("pt")}
              title="Mudar para Português"
              className={`hover:scale-110 transition ${i18n.language === "pt" ? "scale-125" : ""}`}
            >
              <ReactCountryFlag countryCode="BR" svg style={{ width: "1.5em", height: "1.5em" }} />
            </button>

            <button
              onClick={() => changeLang("en")}
              title="Change to English"
              className={`hover:scale-110 transition ${i18n.language === "en" ? "scale-125" : ""}`}
            >
              <ReactCountryFlag countryCode="US" svg style={{ width: "1.5em", height: "1.5em" }} />
            </button>
          </div>

          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full bg-lime-50 dark:bg-gray-700 hover:scale-110 transition"
            title={darkMode ? "Modo claro" : "Modo escuro"}
          >
            {darkMode ? (
              <Sun className="text-lime-50" />
            ) : (
              <Moon className="text-green-900" />
            )}
          </button>
        </div>
      </div>
      
      {showToast && (
        <div className="fixed bottom-5 right-5 bg-white dark:bg-gray-800 dark:text-gray-100 px-4 py-3 rounded shadow-lg animate-slide-in z-50">
          {t("subheader.noPageFound")}
        </div>
      )}
    </div>
  );
}
