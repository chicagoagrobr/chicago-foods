import { useState } from "react";
import nome from '../assets/nome.webp';
import logo from '../assets/cf.webp';
import { Link } from "react-router-dom";
import { Home, Boxes, Mail, Menu, X } from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-green-800 py-3.5 sticky top-0 z-50 shadow-md shadow-green-900/30">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6">
        
        <div className="flex items-center space-x-1 transition-transform duration-300 hover:scale-105">
          <img src={logo} alt="Logo da empresa: Chicago Foods" className="w-20 sm:w-[104px]" />
          <img src={nome} alt="Nome da empresa: Chicago Foods" className="h-10 sm:h-[59px] mt-1" />
        </div>

        <nav className="hidden md:flex items-center justify-center gap-x-8 p-3">
          <Link to="/" className="flex items-center gap-2 text-orange-100 text-sm hover:text-orange-300 px-2">
            <Home className="w-5 h-5" /> Home
          </Link>
          <Link to="/produtos" className="flex items-center gap-2 text-orange-100 text-sm hover:text-orange-300">
            <Boxes className="w-5 h-5" /> Produtos
          </Link>
          <Link to="/contato" className="flex items-center gap-2 text-orange-100 text-sm hover:text-orange-300 ml-1">
            <Mail className="w-5 h-5" /> Contato
          </Link>
        </nav>

        <button
          className="md:hidden text-orange-100 hover:text-orange-300 transition-all duration-200"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden border-t border-green-700">
          <nav className="flex flex-col p-4 space-y-4">
            <Link to="/" onClick={() => setMenuOpen(false)} className="flex items-center gap-2 text-orange-100 hover:text-orange-300">
              <Home className="w-5 h-5" /> Home
            </Link>
            <Link to="/produtos" onClick={() => setMenuOpen(false)} className="flex items-center gap-2 text-orange-100 hover:text-orange-300">
              <Boxes className="w-5 h-5" /> Produtos
            </Link>
            <Link to="/contato" onClick={() => setMenuOpen(false)} className="flex items-center gap-2 text-orange-100 hover:text-orange-300">
              <Mail className="w-5 h-5" /> Contato
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
