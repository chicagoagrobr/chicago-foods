import { useState } from "react";
import { useEffect } from "react";
import AppRoutes from "./routes/Routes.jsx";
import "./i18n";
import i18n from "i18next";

export default function App() {
  const [lang, setLang] = useState("pt");

  useEffect(() => {
    i18n.changeLanguage(lang);
  }, [lang]);

  return (
    <AppRoutes lang={lang} setLang={setLang} />
  );
}
