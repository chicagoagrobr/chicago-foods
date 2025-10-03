import { useState } from "react";
import AppRoutes from "./routes/Routes.jsx";

export default function App() {
  const [lang, setLang] = useState("pt");

  return <AppRoutes lang={lang} setLang={setLang} />;
}
