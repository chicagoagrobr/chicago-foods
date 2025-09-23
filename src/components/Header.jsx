import { useState } from "react";
import nome from '../assets/nome.avif';
import logo from '../assets/cf.avif';
import { Link, useLocation } from "react-router-dom";
import { Home, Boxes, Mail, Menu, X } from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  return (
    <header className="bg-green-800 py-3.5 sticky top-0 z-50 shadow-md shadow-green-900/30">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6">
        
        <Link
          to="/"
          onClick={() => window.scrollTo({ top: 550, behavior: "smooth" })}
          className="flex items-center space-x-1 transition-transform duration-300 hover:scale-105"
        >
          <img src={logo} alt="Logo da empresa: Chicago Foods" className="w-20 sm:w-[104px]" />
          <img src={nome} alt="Nome da empresa: Chicago Foods" className="h-10 sm:h-[59px] mt-1" />
        </Link>

        <nav className="hidden medium:flex items-center justify-center gap-x-8 p-3">
          <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className={`flex items-center gap-2 ${isActive("/") ? "text-orange-300" : "text-orange-100 hover:text-orange-300"} text-sm px-2 font-semibold`}>
            <Home className="w-5 h-5" /> Home
          </Link>
          <Link to="/produtos" className={`flex items-center gap-2 ${isActive("/produtos") ? "text-orange-300" : "text-orange-100 hover:text-orange-300"} text-sm font-semibold`}>
            <Boxes className="w-5 h-5" /> Produtos
          </Link>
          <Link to="/contato" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className={`flex items-center gap-2 ${isActive("/contato") ? "text-orange-300" : "text-orange-100 hover:text-orange-300"} text-sm ml-1 font-semibold`}>
            <Mail className="w-5 h-5" /> Contato
          </Link>
          <Link
            to="/contato"
            onClick={() => window.scrollTo({ top: 290, behavior: "smooth" })}
            className="hidden medium:inline-flex items-center bg-orange-400 shadow-2xl hover:bg-orange-300 text-white font-medium px-4 py-2 rounded-full transition">
            Solicitar Orçamento
          </Link>
        </nav>

        <button
          className="medium:hidden text-orange-100 hover:text-orange-300 transition-all duration-200"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      {menuOpen && (
        <div className="medium:hidden border-t border-green-700">
          <nav className="flex flex-col p-4 space-y-4">
            <Link to="/" onClick={() => {window.scrollTo({ top: 0, behavior: "smooth" });setMenuOpen(false);}} className={`flex items-center gap-2 ${isActive("/") ? "text-orange-300" : "text-orange-100 hover:text-orange-300"} font-semibold`}>
              <Home className="w-5 h-5" /> Home
            </Link>
            <Link to="/produtos" onClick={() => setMenuOpen(false)} className={`flex items-center gap-2 ${isActive("/produtos") ? "text-orange-300" : "text-orange-100 hover:text-orange-300"} font-semibold`}>
              <Boxes className="w-5 h-5" /> Produtos
            </Link>
            <Link to="/contato" onClick={() => {window.scrollTo({ top: 0, behavior: "smooth" });setMenuOpen(false);}} className={`flex items-center gap-2 ${isActive("/contato") ? "text-orange-300" : "text-orange-100 hover:text-orange-300"} font-semibold`}>
              <Mail className="w-5 h-5" /> Contato
            </Link>
            <Link
              to="/contato"
              onClick={() => {window.scrollTo({ top: 290, behavior: "smooth" }); 
              setMenuOpen(false);}}
              className="flex items-center bg-orange-400 hover:bg-orange-300 w-44 text-white font-semibold px-4 py-2 font-semibold  rounded-full shadow-2xl transition">
              Solicitar Orçamento
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
